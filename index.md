---
layout: default
title: Home
---
---
layout: default
title: Home
---

<section class="hero card">
	<h1>Welcome — CTF Writeups & Exploits</h1>
	<p>Practical writeups for reversing, pwn, web, and crypto problems.</p>
</section>

<section id="writeups">
	<h2>Latest writeups</h2>
	<div class="posts-list">
		{% for post in site.posts limit:12 %}
			<article class="card">
				<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
				<p class="muted">{{ post.excerpt | strip_html | truncate: 160 }}</p>
				<p class="muted small">{{ post.date | date: "%b %d, %Y" }} • {{ post.category }}</p>
			</article>
		{% endfor %}
		{% if site.posts == empty %}
			<p>No posts yet — create a writeup under `_posts/`.</p>
		{% endif %}
	</div>
</section>
