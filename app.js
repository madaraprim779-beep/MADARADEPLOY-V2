const githubButton = document.getElementById("githubButton");
const githubStatus = document.getElementById("githubStatus");
const projects = document.getElementById("projects");
const emptyProjects = document.getElementById("emptyProjects");

// Projets de démonstration
const demoProjects = [
  {
    name: "mon-premier-site",
    branch: "main",
    status: "Ready",
    url: "#"
  }
];

function createProjectCard(project) {
  const card = document.createElement("div");

  card.className = "project-card";

  card.innerHTML = `
    <div class="project-top">
      <div class="project-icon">🌐</div>
      <span>GitHub</span>
    </div>

    <h3>${project.name}</h3>

    <p>
      Branche : ${project.branch}
    </p>

    <div class="project-status">
      🟢 ${project.status}
    </div>

    <div class="project-actions">
      <button onclick="deployProject('${project.name}')">
        🚀 Deploy
      </button>

      <button onclick="openProject('${project.url}')">
        Voir
      </button>
    </div>
  `;

  projects.appendChild(card);
}

function showDemoProject() {
  if (!projects || !