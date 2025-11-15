"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  fork: number;
  language: string;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/apicgg/repos?per_page=100",
        );
        const data: Repo[] = await response.json();

        const filteredRepo = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(filteredRepo);
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
      <section id="projects" className="py-20 text-center">
        <p className="text-gray-600">Fetching top GitHub projects...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Top GitHub Projects
        </h2>

        {repos.length === 0 ? (
          <p className="text-center text-gray-500">No repositories found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="group block overflow-hidden rounded-2xl border border-gray-600 shadow-sm transition hover:shadow-xl"
              >
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold transition group-hover:text-blue-500">
                    {repo.name}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="mb-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{repo.language || "N/A"}</span>
                    <span>⭐ {repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-blue-500">
                    <FaGithub size={16} className="mr-2" />
                    View on GitHub
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://github.com/apicgg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[#1C3782] px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
