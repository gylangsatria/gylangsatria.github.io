---
layout: default
---

<section class="home-hero">
  <p class="eyebrow"> technology writer, blogger, and IT practitioner</p>
  <h1>Welcome to Gylang Satria Yudha's corner of the web.</h1>
  <p>For more than a decade, I've been exploring the world of technology through writing, experimentation, and hands-on practice. What started as a passion for blogging grew into a career focused on systems, networks, cybersecurity, and technology education.</p>
</section>

<section class="home-panels">
  <article class="home-panel">
    <h2>Latest posts</h2>
    <ul class="post-list">
      {% for post in site.posts limit:5 %}
      <li class="post-list-item">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span>{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
      {% endfor %}
    </ul>
    <a href="{{ '/archive.html' | relative_url }}" class="post-nav-btn" title="View all posts">
      <span>View all posts</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </a>
  </article>
  <article class="home-panel">
    <h2>What this blog covers</h2>
    <p>This website is where I document ideas, discoveries, technical deep dives, and lessons learned along the way. Whether it's Windows, Linux, infrastructure, security, or emerging technologies, my goal is simple: understand it deeply, then share it clearly.</p>
    <div class="tag-list">
      <span>Network Security</span>
      <span>Linux</span>
      <span>Blogging</span>
      <span>Cybersecurity</span>
    </div>
  </article>
</section>

<section class="home-panel winpoin-section">
  <h2>Latest from WinPoin</h2>
  <div id="winpoin-posts" class="winpoin-grid">
    <p class="winpoin-loading">Memuat postingan terbaru…</p>
  </div>
  <a href="https://winpoin.com" target="_blank" rel="noopener" class="post-nav-btn" title="Visit WinPoin">
    <span>Visit WinPoin</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </a>
</section>
