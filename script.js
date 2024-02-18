fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects-container');
        const searchInput = document.getElementById('search-input');

        // Function to filter projects based on search query
        const filterProjects = () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const filteredProjects = data.filter(project => project.name.toLowerCase().includes(searchTerm));
            displayProjects(filteredProjects);
        };

        // Function to display projects
        const displayProjects = (projects) => {
            projectsContainer.innerHTML = '';
            projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';

                const link = document.createElement('a');
                link.className = 'project-link';
                link.href = project.link;
                link.target = '_blank';
                link.textContent = project.name;

                const description = document.createElement('p');
                description.className = 'project-description';
                description.textContent = project.description;

                projectDiv.appendChild(link);
                projectDiv.appendChild(description);
                projectsContainer.appendChild(projectDiv);
            });
        };

        // Display all projects initially
        displayProjects(data);

        // Event listener for search input
        searchInput.addEventListener('input', filterProjects);
    })
    .catch(error => console.error('Error fetching projects:', error));
