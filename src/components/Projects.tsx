"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCodeBranch, FaGithub } from "react-icons/fa";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  language: string;
};

const FEATURED_REPOS: string[] = [
  "vite-mern-template",
  "bio-link",
  "portfolio",
  "react-native-website",
  "goal-app",
  "SecurityApp",
  "deliveroo-clone",
];

const GITHUB_USERNAME = "apicgg";

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        // If specific repos are configured, fetch them individually
        if (FEATURED_REPOS.length > 0) {
          const repoPromises = FEATURED_REPOS.map((repoName) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`)
              .then((res) => res.json())
              .catch(() => null),
          );

          const repoData = await Promise.all(repoPromises);
          const validRepos = repoData
            .filter((repo): repo is Repo => repo !== null && !repo.fork)
            .map((repo) => ({
              id: repo.id,
              name: repo.name,
              description: repo.description || "",
              html_url: repo.html_url,
              stargazers_count: repo.stargazers_count,
              forks_count: repo.forks_count || 0,
              fork: repo.fork,
              language: repo.language || "",
            }));

          // Maintain the order specified in FEATURED_REPOS
          const orderedRepos = FEATURED_REPOS.map((repoName) =>
            validRepos.find((repo) => repo.name === repoName),
          ).filter((repo): repo is Repo => repo !== undefined);

          setRepos(orderedRepos);
        } else {
          // Fallback: fetch top starred repos if no specific repos are configured
          const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
          );
          const data: Repo[] = await response.json();

          const filteredRepo = data
            .filter((repo) => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

          setRepos(filteredRepo);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section-padding">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Loading featured projects...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Mobile apps, libraries, and open-source contributions
          </p>
        </motion.div>

        {repos.length === 0 ? (
          <p className="text-center text-gray-500">No repositories found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-hover group block overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-blue-400">
                    {repo.name}
                  </h3>
                  <FaGithub className="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-400" />
                </div>
                <p className="mb-4 line-clamp-3 text-sm text-gray-300">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300">
                    {repo.language || "N/A"}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <span>⭐</span>
                      <span className="font-semibold">
                        {repo.stargazers_count}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="h-3.5 w-3.5" />
                      <span className="font-semibold">{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://github.com/apicgg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            View All Projects on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
