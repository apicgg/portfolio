// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Calculate experience years
const startYear = 2018;
const currentYear = new Date().getFullYear();
const experience = currentYear - startYear;
document.getElementById('experience').textContent = experience;

// Fetch GitHub projects
async function fetchProjects() {
    const container = document.getElementById('projects-container');
    
    try {
        const response = await fetch('https://api.github.com/users/apicgg/repos?per_page=100');
        const repos = await response.json();
        
        // Filter out forks and sort by stars
        const filteredRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
        
        if (filteredRepos.length === 0) {
            container.innerHTML = '<p>No repositories found.</p>';
            return;
        }
        
        container.innerHTML = filteredRepos.map(repo => `
            <div class="project-card">
                <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}</a></h3>
                <p>${escapeHtml(repo.description || 'No description provided.')}</p>
                <div class="project-meta">
                    <span>${repo.language || 'N/A'}</span>
                    <span>⭐ ${repo.stargazers_count}</span>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching repos:', error);
        container.innerHTML = '<p>Unable to load projects. Please try again later.</p>';
    }
}

// Simple HTML escape function
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load projects on page load
fetchProjects();

