import "./styles.css";
import { formatDisplayDate, getPostBySlug, posts } from "./blog-content.js";

document.getElementById("year").textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const listView = document.getElementById("blog-list-view");
const postView = document.getElementById("blog-post-view");
const listContainer = document.getElementById("blog-post-list");
const emptyState = document.getElementById("blog-empty-state");
const articleContainer = document.getElementById("blog-article");

function renderList() {
  if (posts.length === 0) {
    emptyState.hidden = false;
    return;
  }

  listContainer.innerHTML = posts
    .map(
      (post) => `
        <article class="writing-card">
          <div class="writing-card-meta">
            <span>${formatDisplayDate(post.date)}</span>
            <span>${post.readingTime}</span>
          </div>
          <h2><a href="/blog/?slug=${post.slug}">${post.title}</a></h2>
          <p>${post.summary}</p>
          <a class="writing-link" href="/blog/?slug=${post.slug}">Read post</a>
        </article>
      `,
    )
    .join("");
}

function renderPost(post) {
  document.title = `${post.title} | Anurag Pramanik`;

  articleContainer.innerHTML = `
    <div class="blog-post-header">
      <p class="eyebrow">Blog</p>
      <h1>${post.title}</h1>
      <div class="writing-card-meta">
        <span>${formatDisplayDate(post.date)}</span>
        <span>${post.readingTime}</span>
      </div>
      <p class="blog-post-summary">${post.summary}</p>
    </div>
    <div class="blog-post-body">
      ${post.html}
    </div>
  `;
}

renderList();

if (slug) {
  const post = getPostBySlug(slug);

  if (post) {
    listView.hidden = true;
    postView.hidden = false;
    renderPost(post);
  } else {
    listView.hidden = false;
    postView.hidden = true;
    emptyState.hidden = false;
    emptyState.innerHTML = `
      <p>The article you requested was not found.</p>
      <a class="writing-link" href="/blog/">Return to all posts</a>
    `;
  }
}
