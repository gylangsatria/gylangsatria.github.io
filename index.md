---
layout: default
---
<section class="home-hero">
  <p class="eyebrow">Network security, systems thinking, and practical tinkering</p>
  <h1>Welcome to Gylang Satria Yudha's corner of the web.</h1>
  <p>Exploring network security, Linux infrastructure, and the intersection of technology and education. Graduate of Universitas Sangga Buana with a thesis on AES encryption for online exam security. Writing about what I build, break, and secure.</p>
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
    <p>My writing focuses on network security, Linux systems, infrastructure experiments, and lessons learned from academic research and real-world applications. No fluff. Just genuine projects and honest stories.</p>
    <div class="tag-list">
      <span>Network Security</span>
      <span>Linux</span>
      <span>Infrastructure</span>
      <span>Cybersecurity</span>
      <span>DIY</span>
    </div>
  </article>
</section>