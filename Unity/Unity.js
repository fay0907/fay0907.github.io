// Unity.js (origineel, met video-modal)

// ---------- Klok ----------
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clockEl = document.getElementById('clock');
  if (clockEl) clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ---------- Projecten ---------- */
const projects = [
  {
    name: "TeamDemo",
    path: "C:/Projects/TeamDemo",
    cloudStatus: "Yes",
    modified: "3 days ago",
    unityVersion: "2021.3.1f1",
    videoUrl: "../MP4/Zweden2Computers.mp4",
    downloadUrl: "./Builds/TeamDemo.zip"
  },
  {
    name: "OperationStarfall",
    path: "C:/Projects/TeamDemo",
    cloudStatus: "Yes",
    modified: "3 days ago",
    unityVersion: "2021.3.1f1",
    videoUrl: "../MP4/Zweden2Computers.mp4",
    downloadUrl: "./Builds/TeamDemo.zip"
  },
  {
    name: "MyProjects",
    path: "C:/Projects/MyProjects",
    cloudStatus: "Yes",
    modified: "2 weeks ago",
    unityVersion: "2022.1.0f1",
    videoUrl: "../MP4/ZwedenGameplay.mp4",
    downloadUrl: "./Builds/PlanetPuzzle.zip"
  }
];

// Elements
const projectList = document.getElementById("project-list");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const videoContainer = document.getElementById("video-container");
const addProjectBtn = document.getElementById("add-project-btn");

// Plyr player instance
let currentPlayer = null;

// Stop media en destroy currentPlayer
function stopMedia() {
  if (currentPlayer && typeof currentPlayer.destroy === 'function') {
    try { currentPlayer.destroy(); } catch (e) { }
    currentPlayer = null;
  }
  if (videoContainer) videoContainer.innerHTML = '';
}

// Helpers
function isYouTubeUrl(url) {
  if (!url) return false;
  return /youtube\.com|youtu\.be/.test(url);
}
function isVideoFile(url) {
  if (!url) return false;
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

// Open modal voor video
function openModal(videoUrl) {
  if (!videoContainer || !modal) return;

  stopMedia();

  if (isYouTubeUrl(videoUrl)) {
    let src = videoUrl;
    if (/watch\?v=/.test(videoUrl)) {
      const idMatch = videoUrl.match(/[?&]v=([^&]+)/);
      if (idMatch) src = `https://www.youtube.com/embed/${idMatch[1]}`;
    } else if (/youtu\.be\//.test(videoUrl)) {
      const idMatch = videoUrl.match(/youtu\.be\/([^?]+)/);
      if (idMatch) src = `https://www.youtube.com/embed/${idMatch[1]}`;
    }
    videoContainer.innerHTML = `
      <div class="plyr__video-embed" id="player">
        <iframe
          src="${src}?origin=${location.origin}&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0"
          allowfullscreen
          allowtransparency
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    `;
    try {
      currentPlayer = new Plyr('#player', { 
        controls: ['play-large','play','progress','mute','volume','fullscreen'],
        youtube: { noCookie: false } 
      });
    } catch (e) { currentPlayer = null; }
  } else {
    videoContainer.innerHTML = `
      <video id="player" controls playsinline>
        <source src="${videoUrl}" type="video/mp4" />
        Je browser ondersteunt dit videoformaat niet.
      </video>
    `;
    try {
      currentPlayer = new Plyr('#player', {
        controls: ['play-large','play','progress','mute','volume','fullscreen'],
      });
      currentPlayer.play().catch(()=>{});
    } catch (e) { currentPlayer = null; }
  }

  modal.style.display = "block";
}

// Laad projecten in DOM
function loadProjects() {
  if (!projectList) return;
  projectList.innerHTML = '';

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("project-details");

    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.innerText = project.name;

    const projectPath = document.createElement("div");
    projectPath.classList.add("project-path");
    if(project.path) projectPath.innerText = project.path;

    detailsDiv.appendChild(projectName);
    detailsDiv.appendChild(projectPath);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("project-info");
    infoDiv.innerHTML = `
      ${project.cloudStatus ? `<div>Cloud: ${project.cloudStatus}</div>` : ''}
      ${project.modified ? `<div>Modified: ${project.modified}</div>` : ''}
      ${project.unityVersion ? `<div>Version: ${project.unityVersion}</div>` : ''}
    `;

    if (project.downloadUrl) {
      const downloadButton = document.createElement("a");
      downloadButton.classList.add("download-button");
      downloadButton.href = project.downloadUrl;
      downloadButton.setAttribute('download', '');
      downloadButton.innerText = "Download Build";
      downloadButton.addEventListener('click', (e) => e.stopPropagation());
      infoDiv.appendChild(downloadButton);
    }

    const docsButton = document.createElement("button");
    docsButton.classList.add("docs-button");
    docsButton.innerText = "Open Documentatie";
    docsButton.addEventListener("click", (e) => {
      e.stopPropagation(); 
      openDocs(project.name);
    });
    infoDiv.appendChild(docsButton);

    projectItem.appendChild(detailsDiv);
    projectItem.appendChild(infoDiv);

    projectItem.addEventListener("click", () => {
      if (project.videoUrl) openModal(project.videoUrl);
    });

    projectList.appendChild(projectItem);
  });
}

// Close modal events
if (closeModal) {
  closeModal.addEventListener("click", () => {
    if (modal) modal.style.display = "none";
    stopMedia();
  });
}
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    stopMedia();
  }
});

// Add project button
if (addProjectBtn) {
  addProjectBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Hier kun je een nieuwe project-toevoeg-functionaliteit bouwen!");
  });
}

// Init
document.addEventListener('DOMContentLoaded', loadProjects);
