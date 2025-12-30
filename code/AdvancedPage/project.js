let projectsData = {};

fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    projectsData = data;
    loadProject("Road2Supercar"); // default project
  });

function loadProject(projectKey) {
  const project = projectsData[projectKey];

  // Title
  document.getElementById("project-title").textContent = project.title;

  // Links
  document.getElementById("project-live").href = project.live;
  document.getElementById("project-github").href = project.github;

  // Gallery
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  project.images.forEach((img) => {
    gallery.innerHTML += `
      <div class="gallery_item">
        <img src="${img}" class="gallery_photo">
      </div>
    `;
  });

  // Description
  const desc = document.getElementById("project-description");
  desc.innerHTML = "";
  project.description.forEach((p) => {
    desc.innerHTML += `<p class="paragraph">${p}</p>`;
  });

  // Points
  const info = document.getElementById("project-info");
  info.innerHTML = "";
  project.info.forEach((item) => {
    info.innerHTML += `<li class="list_item">${item}</li>`;
  });

  const tech = document.getElementById("tech-stack");
  tech.innerHTML = "";
  project.tech.forEach((item) => {
    tech.innerHTML += `<li class="list_item">${item}</li>`;
  });
}

//Setting how to Highlight Project Sidebar
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".side-nav_link");
  const navItems = document.querySelectorAll(".side-nav_item");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const projectKey = link.dataset.project;

      // Load the selected project if it exists
      if (projectsData[projectKey]) {
        loadProject(projectKey);
      }

      // Remove active class from all items
      navItems.forEach((item) =>
        item.classList.remove("side-nav_item--active")
      );

      // Add active class to the clicked item
      link.closest(".side-nav_item").classList.add("side-nav_item--active");
    });
  });
});
