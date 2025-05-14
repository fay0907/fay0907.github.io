// Update de klok
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update de klok elke seconde
  setInterval(updateClock, 1000);
  updateClock();
  
  
  /* ---------- Projecten ---------- */
  
  // Voorbeeld projectdata – pas aan naar jouw eigen projecten.
  const projects = [
    {
      name: "TeamDemo",
      path: "C:/Projects/TeamDemo",
      cloudStatus: "Yes",
      modified: "3 days ago",
      unityVersion: "2021.3.1f1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // voorbeeld: YouTube-liedje
    },
    {
      name: "OperationOrbital",
      path: "C:/Projects/OperationOrbital",
      cloudStatus: "No",
      modified: "5 days ago",
      unityVersion: "2021.3.0f2",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" // voorbeeld
    },
    {
      name: "PlanetPuzzle",
      path: "C:/Projects/PlanetPuzzle",
      cloudStatus: "Yes",
      modified: "2 weeks ago",
      unityVersion: "2022.1.0f1",
      videoUrl: "https://www.youtube.com/embed/A71aqufiNtQ"
    }
  ];
  
  // Haal de HTML-elementen op
  const projectList = document.getElementById("project-list");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");
  const videoContainer = document.getElementById("video-container");
  
  // Functie om projecten in de DOM te laden
  function loadProjects() {
    projects.forEach((project) => {
      // Maak een div voor het project
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
  
      // Linker gedeelte (details: naam, path)
      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("project-details");
  
      const projectName = document.createElement("div");
      projectName.classList.add("project-name");
      projectName.innerText = project.name;
  
      const projectPath = document.createElement("div");
      projectPath.classList.add("project-path");
      projectPath.innerText = project.path;
  
      detailsDiv.appendChild(projectName);
      detailsDiv.appendChild(projectPath);
  
      // Rechter gedeelte (info: cloud, modified, unityVersion)
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("project-info");
      infoDiv.innerHTML = `
        <div>Cloud: ${project.cloudStatus}</div>
        <div>Modified: ${project.modified}</div>
        <div>Version: ${project.unityVersion}</div>
      `;
  
      // Voeg beide gedeelten samen
      projectItem.appendChild(detailsDiv);
      projectItem.appendChild(infoDiv);
  
      // Klik-event om de video te openen in de modal
      projectItem.addEventListener("click", () => {
        openModal(project.videoUrl);
      });
  
      // Voeg het project-item toe aan de projectList
      projectList.appendChild(projectItem);
    });
  }
  
  // Functie om de modal te openen
  function openModal(videoUrl) {
    // Plaats de video in de videoContainer
    videoContainer.innerHTML = `
      <iframe 
        width="560" 
        height="315" 
        src="${videoUrl}" 
        title="Project Video" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    `;
    modal.style.display = "block";
  }
  
  // Sluit de modal wanneer op het sluit-icoon wordt geklikt
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    videoContainer.innerHTML = ""; // Verwijder de iframe (video stoppen)
  });
  
  // Sluit de modal wanneer er buiten wordt geklikt
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoContainer.innerHTML = "";
    }
  });
  
  // Laad de projecten zodra de script geladen is
  loadProjects();
  
  // Event listener voor de "New Project"-knop (optioneel)
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", () => {
    alert("Hier kun je een nieuwe project-toevoeg-functionaliteit bouwen!");
  });
  
  /* ---------- Download projecten ---------- */
  // Voorbeeld projectdata – voeg een downloadUrl toe
  const Projects = [
    {
      name: "TeamDemo",
      path: "C:/Projects/TeamDemo",
      cloudStatus: "Yes",
      modified: "3 days ago",
      unityVersion: "2021.3.1f1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      downloadUrl: "./Builds/TeamDemo.zip" // Gebruik een relatieve URL
    },
    {
      name: "OperationOrbital",
      path: "C:/Projects/OperationOrbital",
      cloudStatus: "No",
      modified: "5 days ago",
      unityVersion: "2021.3.0f2",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      downloadUrl: "./Builds/OperationOrbital.zip"
    },
    {
      name: "PlanetPuzzle",
      path: "C:/Projects/PlanetPuzzle",
      cloudStatus: "Yes",
      modified: "2 weeks ago",
      unityVersion: "2022.1.0f1",
      videoUrl: "https://www.youtube.com/embed/A71aqufiNtQ",
      downloadUrl: "./Builds/PlanetPuzzle.zip"
    }
  ];
  
  // Functie om projecten in de DOM te laden
  function loadProjects() {
    projects.forEach((project) => {
      // Maak een div voor het project
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
  
      // Linker gedeelte (details: naam, path)
      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("project-details");
  
      const projectName = document.createElement("div");
      projectName.classList.add("project-name");
      projectName.innerText = project.name;
  
      const projectPath = document.createElement("div");
      projectPath.classList.add("project-path");
      projectPath.innerText = project.path;
  
      detailsDiv.appendChild(projectName);
      detailsDiv.appendChild(projectPath);
  
      // Rechter gedeelte (info: cloud, modified, unityVersion)
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("project-info");
      infoDiv.innerHTML = `
        <div>Cloud: ${project.cloudStatus}</div>
        <div>Modified: ${project.modified}</div>
        <div>Version: ${project.unityVersion}</div>
      `;
  
      // Downloadknop
      const downloadButton = document.createElement("a");
      downloadButton.classList.add("download-button");
      downloadButton.href = project.downloadUrl; // Download-URL
      downloadButton.download = ""; // Forceer download
      downloadButton.innerText = "Download Build";
  
      // Voeg de downloadknop toe aan het infoDiv
      infoDiv.appendChild(downloadButton);
  
      // Voeg beide gedeelten samen
      projectItem.appendChild(detailsDiv);
      projectItem.appendChild(infoDiv);
  
      // Klik-event om de video te openen in de modal
      projectItem.addEventListener("click", () => {
        openModal(project.videoUrl);
      });
  
      // Voeg het project-item toe aan de projectList
      projectList.appendChild(projectItem);
    });
  }

// ...existing code...