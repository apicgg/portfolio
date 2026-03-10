function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.md$/, "");
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { attributes: {}, body: raw.trim() };
  }

  const endIndex = raw.indexOf("\n---", 3);

  if (endIndex === -1) {
    return { attributes: {}, body: raw.trim() };
  }

  const frontmatter = raw.slice(3, endIndex).trim();
  const body = raw.slice(endIndex + 4).trim();
  const attributes = {};

  for (const line of frontmatter.split("\n")) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    attributes[key] = value;
  }

  return { attributes, body };
}

function renderInline(text) {
  const codeSegments = [];
  let rendered = escapeHtml(text);

  rendered = rendered.replace(/`([^`]+)`/g, (_, code) => {
    const placeholder = `__CODE_${codeSegments.length}__`;
    codeSegments.push(`<code>${escapeHtml(code)}</code>`);
    return placeholder;
  });

  rendered = rendered.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    (_, label, url) =>
      `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`,
  );
  rendered = rendered.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  rendered = rendered.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return rendered.replace(/__CODE_(\d+)__/g, (_, index) => codeSegments[index]);
}

function flushParagraph(buffer, parts) {
  if (buffer.length === 0) {
    return;
  }

  parts.push(`<p>${renderInline(buffer.join(" "))}</p>`);
  buffer.length = 0;
}

function flushList(items, parts, type) {
  if (items.length === 0) {
    return;
  }

  const renderedItems = items
    .map((item) => `<li>${renderInline(item)}</li>`)
    .join("");
  parts.push(`<${type}>${renderedItems}</${type}>`);
  items.length = 0;
}

function flushBlockquote(lines, parts) {
  if (lines.length === 0) {
    return;
  }

  parts.push(`<blockquote><p>${renderInline(lines.join(" "))}</p></blockquote>`);
  lines.length = 0;
}

function renderMarkdown(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n").trim();

  if (!normalized) {
    return "";
  }

  const lines = normalized.split("\n");
  const parts = [];
  const paragraph = [];
  const unorderedList = [];
  const orderedList = [];
  const blockquote = [];
  let inCodeBlock = false;
  let codeLines = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushParagraph(paragraph, parts);
      flushList(unorderedList, parts, "ul");
      flushList(orderedList, parts, "ol");
      flushBlockquote(blockquote, parts);

      if (inCodeBlock) {
        parts.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }

      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (trimmed === "") {
      flushParagraph(paragraph, parts);
      flushList(unorderedList, parts, "ul");
      flushList(orderedList, parts, "ol");
      flushBlockquote(blockquote, parts);
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);

    if (headingMatch) {
      flushParagraph(paragraph, parts);
      flushList(unorderedList, parts, "ul");
      flushList(orderedList, parts, "ol");
      flushBlockquote(blockquote, parts);
      const level = headingMatch[1].length;
      parts.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.*)$/);

    if (unorderedMatch) {
      flushParagraph(paragraph, parts);
      flushList(orderedList, parts, "ol");
      flushBlockquote(blockquote, parts);
      unorderedList.push(unorderedMatch[1]);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);

    if (orderedMatch) {
      flushParagraph(paragraph, parts);
      flushList(unorderedList, parts, "ul");
      flushBlockquote(blockquote, parts);
      orderedList.push(orderedMatch[1]);
      continue;
    }

    const blockquoteMatch = trimmed.match(/^>\s?(.*)$/);

    if (blockquoteMatch) {
      flushParagraph(paragraph, parts);
      flushList(unorderedList, parts, "ul");
      flushList(orderedList, parts, "ol");
      blockquote.push(blockquoteMatch[1]);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph(paragraph, parts);
  flushList(unorderedList, parts, "ul");
  flushList(orderedList, parts, "ol");
  flushBlockquote(blockquote, parts);

  if (inCodeBlock && codeLines.length > 0) {
    parts.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }

  return parts.join("\n");
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/^---[\s\S]*?---\n?/, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[*_>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readingTime(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180));
  return `${minutes} min read`;
}

export function formatDisplayDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const rawPosts = import.meta.glob("../content/blog/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

export const posts = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const { attributes, body } = parseFrontmatter(raw);
    const plainText = stripMarkdown(body);

    return {
      slug: slugFromPath(path),
      title: attributes.title || slugFromPath(path),
      date: attributes.date || "1970-01-01",
      summary: attributes.summary || plainText.slice(0, 160),
      excerpt: plainText.slice(0, 180),
      readingTime: readingTime(plainText),
      html: renderMarkdown(body),
    };
  })
  .sort((left, right) => new Date(right.date) - new Date(left.date));

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}
