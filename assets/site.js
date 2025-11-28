// site.js — small helpers: mobile menu and TOC generation
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Initialize highlight.js
  try { hljs.highlightAll(); } catch (e) { /* ignore if hljs missing */ }

  // Build a simple TOC from headings in .post-content
  const content = document.querySelector('.post-content');
  const tocRoot = document.getElementById('page-toc');
  if (content && tocRoot) {
    const headings = content.querySelectorAll('h2, h3');
    if (headings.length === 0) {
      tocRoot.textContent = '—';
    } else {
      const ul = document.createElement('ul');
      headings.forEach(h => {
        if (!h.id) {
          h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }
        const li = document.createElement('li');
        li.className = 'toc-' + h.tagName.toLowerCase();
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        ul.appendChild(li);
      });
      tocRoot.innerHTML = '';
      tocRoot.appendChild(ul);
    }
  }
});
