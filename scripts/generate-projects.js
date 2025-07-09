const { Octokit } = require("@octokit/rest");
const fs = require('fs');
const path = require('path');

async function generateProjectsData() {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        const { data: repos } = await octokit.rest.repos.listForUser({
            username: "codebyriley"
        });

        const projects = repos.map(repo => ({
            name: repo.name,
            description: repo.description || "No description provided",
            source: repo.html_url
        }));

        // Write to a JSON file that can be imported
        const outputPath = path.join(__dirname, '../public/data/projects.json');
        const outputDir = path.dirname(outputPath);

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
        console.log(`Generated projects data: ${outputPath}`);
        console.log(`Total projects: ${projects.length}`);
    } catch (error) {
        console.error('Error generating projects data:', error);
        process.exit(1);
    }
}

generateProjectsData(); 