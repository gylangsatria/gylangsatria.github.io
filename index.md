---
layout: default
---
<section class="home-hero">
  <p class="eyebrow">Tech blog, workflow notes, and systems thinking</p>
  <h1>Welcome to Gylang’s corner of the web.</h1>
  <p>Deep dives into Linux, iOS, code, and practical experiments. Simple, readable, and always tuned for modern tech minds.</p>
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
    <p>My writing focuses on practical systems, debugging notes, device experiments, and the tools that keep everything running smoothly.</p>
    <div class="tag-list">
      <span>Linux</span>
      <span>iOS</span>
      <span>Code</span>
      <span>DIY</span>
      <span>Automation</span>
    </div>
  </article>
</section>
