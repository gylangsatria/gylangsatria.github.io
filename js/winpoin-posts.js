(function () {
  "use strict";

  const API_URL = "https://winpoin.com/wp-json/wp/v2/posts?per_page=6&_embed";

  const container = document.getElementById("winpoin-posts");

  if (!container) return;

  async function fetchPosts() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const posts = await res.json();
      renderPosts(posts);
    } catch (err) {
      container.innerHTML =
        '<p class="winpoin-error">Gagal memuat postingan dari WinPoin.</p>';
      console.error("Winpoin fetch error:", err);
    }
  }

  function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function renderPosts(posts) {
    container.innerHTML = "";

    posts.forEach(function (post) {
      const title =
        post.title && post.title.rendered ? post.title.rendered : "";
      const excerpt = post.excerpt
        ? stripHtml(post.excerpt.rendered).substring(0, 150) + "…"
        : "";
      const date = post.date ? formatDate(post.date) : "";
      const link = post.link || "#";
      const featuredImage =
        post._embedded &&
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0] &&
        post._embedded["wp:featuredmedia"][0].source_url
          ? post._embedded["wp:featuredmedia"][0].source_url
          : null;

      const card = document.createElement("article");
      card.className = "winpoin-card";

      let imgHtml = "";
      if (featuredImage) {
        imgHtml =
          '<div class="winpoin-card-thumb"><img src="' +
          featuredImage +
          '" alt="" loading="lazy" /></div>';
      }

      card.innerHTML =
        imgHtml +
        '<div class="winpoin-card-body">' +
        '<h3 class="winpoin-card-title"><a href="' +
        link +
        '" target="_blank" rel="noopener">' +
        escapeHtml(title) +
        "</a></h3>" +
        '<p class="winpoin-card-excerpt">' +
        escapeHtml(excerpt) +
        "</p>" +
        '<div class="winpoin-card-footer">' +
        '<time class="winpoin-card-date">' +
        date +
        "</time>" +
        '<span class="winpoin-card-source">WinPoin</span>' +
        "</div>" +
        "</div>";

      container.appendChild(card);
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  fetchPosts();
})();
