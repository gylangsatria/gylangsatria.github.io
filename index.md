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
    <div class="post-carousel" data-current="0">
      {% for post in site.posts limit:5 %}
      <div class="post-carousel-item" data-index="{{ forloop.index0 }}" {% if forloop.first %}data-active="true"{% endif %}>
        <a href="{{ post.url | relative_url }}" class="post-carousel-title">{{ post.title }}</a>
        <span class="post-carousel-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        {% if post.content.size > 200 %}
        <p class="post-carousel-excerpt">{{ post.content | strip_html | truncatewords: 25 }}</p>
        {% endif %}
      </div>
      {% endfor %}
      <div class="post-carousel-controls">
        <button class="post-carousel-btn post-carousel-prev" type="button" aria-label="Previous post">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <span class="post-carousel-counter"><span class="post-carousel-current">1</span> / {{ site.posts | size | at_most: 5 }}</span>
        <button class="post-carousel-btn post-carousel-next" type="button" aria-label="Next post">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </div>
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
