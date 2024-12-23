const projects = [
  {
    title: "Optimization of CNC Machining",
    category: "Process Optimization",
    description: "Improved machining efficiency by reducing cycle time.",
    image: "Project/1.PNG",
    link: "details/cnc-machining.html",
  },
  {
    title: "3D Printing Prototypes",
    category: "Design & Simulation",
    description: "Developed functional prototypes using SLA and FDM printing.",
    image: "Project/3.PNG",
    link: "details/3d-printing.html",
  },
  {
    title: "Robotic Welding System",
    category: "Automation",
    description: "Automated welding processes for improved precision.",
    image: "Project/5.PNG",
    link: "details/robotic-welding.html",
  },
  {
    title: "Material Testing Techniques",
    category: "Material Analysis",
    description: "Analyzed material properties using tensile and hardness tests.",
    image: "Project/7.PNG",
    link: "details/material-testing.html",
  },
  {
    title: "Injection Molding Optimization",
    category: "Process Optimization",
    description: "Minimized defects and cycle time in plastic part production.",
    image: "Project/11.PNG",
    link: "details/injection-molding.html",
  },
];

const projectContainer = document.getElementById("project-container");
const categoryButtons = document.querySelectorAll(".category-btn");

// Function to display projects
function displayProjects(filter = "all") {
  projectContainer.innerHTML = "";
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  filteredProjects.forEach((project) => {
    const projectCard = `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-details">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${project.category}</p>
          <p class="project-description">${project.description}</p>
          <a href="${project.link}" class="project-link">View Details</a>
        </div>
      </div>
    `;
    projectContainer.innerHTML += projectCard;
  });
}

// Event listeners for category buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    displayProjects(button.dataset.category);
  });
});

// Initial load
displayProjects();
