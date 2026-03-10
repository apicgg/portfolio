import "./styles.css";
import { formatDisplayDate, posts } from "./blog-content.js";

document.getElementById("year").textContent = new Date().getFullYear();

const startYear = 2018;
const currentYear = new Date().getFullYear();
const experience = currentYear - startYear;
document.getElementById("experience").textContent = experience;

function renderLatestPosts() {
  const container = document.getElementById("writing-container");

  if (!container) {
    return;
  }

  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) {
    container.innerHTML = "<p>No posts published yet.</p>";
    return;
  }

  container.innerHTML = latestPosts
    .map(
      (post) => `
        <article class="writing-card">
          <div class="writing-card-meta">
            <span>${formatDisplayDate(post.date)}</span>
            <span>${post.readingTime}</span>
          </div>
          <h3><a href="/blog/?slug=${post.slug}">${post.title}</a></h3>
          <p>${post.summary}</p>
          <a class="writing-link" href="/blog/?slug=${post.slug}">Read post</a>
        </article>
      `,
    )
    .join("");
}

async function fetchProjects() {
  const container = document.getElementById("projects-container");

  try {
    const response = await fetch(
      "https://api.github.com/users/apicgg/repos?per_page=100",
    );
    const repos = await response.json();

    const filteredRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    if (filteredRepos.length === 0) {
      container.innerHTML = "<p>No repositories found.</p>";
      return;
    }

    container.innerHTML = filteredRepos
      .map((repo) => {
        const name = escapeHtml(repo.name);
        const description = escapeHtml(
          repo.description || "No description provided.",
        );
        const language = escapeHtml(repo.language || "N/A");
        const url = escapeHtml(repo.html_url);
        const ariaLabel = escapeHtml(`View ${name} project on GitHub`);
        return `
            <div class="project-card">
                <h3><a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${ariaLabel}">${name}</a></h3>
                <p>${description}</p>
                <div class="project-meta">
                    <span>${language}</span>
                    <span>⭐ ${repo.stargazers_count}</span>
                </div>
            </div>
        `;
      })
      .join("");
  } catch (error) {
    console.error("Error fetching repos:", error);
    container.innerHTML =
      "<p>Unable to load projects. Please try again later.</p>";
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

fetchProjects();
renderLatestPosts();
