import { Octokit } from "@octokit/rest";

export default defineEventHandler(async (event) => {
  try {
    const octokit = new Octokit({ 
      auth: process.env.GITHUB_TOKEN 
    });
    
    const { data: repos } = await octokit.rest.repos.listForUser({
      username: "codebyriley"
    });

    return repos.map(repo => ({
      name: repo.name,
      description: repo.description || "No description provided",
      source: repo.html_url
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch projects'
    });
  }
}); 