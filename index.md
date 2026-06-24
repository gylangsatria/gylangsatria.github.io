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
      {% for post in site.posts limit:4 %}
      <li class="post-list-item">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span>{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
      {% endfor %}
    </ul>
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
