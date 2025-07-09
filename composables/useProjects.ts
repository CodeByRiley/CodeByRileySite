interface Project {
    name: string;
    description: string;
    source: string;
}

export const useProjects = () => {
    const projects = ref<Project[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchProjects = async () => {
        // Only use sessionStorage on the client side
        if (process.client) {
            // Check if we have cached data in sessionStorage
            const cached = sessionStorage.getItem('projects-cache');
            const cacheTimestamp = sessionStorage.getItem('projects-cache-timestamp');

            // Cache is valid for 1 hour
            const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
            const now = Date.now();
            const isCacheValid = cached && cacheTimestamp && (now - parseInt(cacheTimestamp)) < CACHE_DURATION;

            if (isCacheValid) {
                try {
                    projects.value = JSON.parse(cached);
                    return;
                } catch (e) {
                    // If parsing fails, clear cache and fetch fresh data
                    sessionStorage.removeItem('projects-cache');
                    sessionStorage.removeItem('projects-cache-timestamp');
                }
            }
        }

        // Fetch fresh data
        loading.value = true;
        error.value = null;

        try {
            const freshProjects = await $fetch<Project[]>('/api/projects');

            // Cache the fresh data only on client side
            if (process.client) {
                const now = Date.now();
                sessionStorage.setItem('projects-cache', JSON.stringify(freshProjects));
                sessionStorage.setItem('projects-cache-timestamp', now.toString());
            }

            projects.value = freshProjects;
        } catch (err) {
            error.value = 'Failed to fetch projects';
            console.error('Error fetching projects:', err);

            // If we have stale cache, use it as fallback (client side only)
            if (process.client) {
                const cached = sessionStorage.getItem('projects-cache');
                if (cached) {
                    try {
                        projects.value = JSON.parse(cached);
                    } catch (e) {
                        // If even the stale cache is corrupted, clear it
                        sessionStorage.removeItem('projects-cache');
                        sessionStorage.removeItem('projects-cache-timestamp');
                    }
                }
            }
        } finally {
            loading.value = false;
        }
    };

    return {
        projects: readonly(projects),
        loading: readonly(loading),
        error: readonly(error),
        fetchProjects
    };
}; 