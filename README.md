TheKrizzler — Jekyll CTF writeups

Quick start (Windows, requires Ruby + Jekyll installed):

1. Install Jekyll (if not already):

```powershell
gem install jekyll bundler
```

2. Serve locally:

```cmd
cd "c:\Users\Kriz\Documents\Prog\thekrizzler.github.io"
bundle exec jekyll serve --livereload
```

3. Open http://127.0.0.1:4000 in your browser.

Notes:
- GitHub Pages will build this repository automatically if pushed to `main`.
- To preview locally, ensure dependencies are installed and use the `jekyll serve` command above.
- This theme uses Google Fonts and highlight.js via CDN.
