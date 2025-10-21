// Unity.js (vervang de bestaande inhoud van je Unity.js door dit)

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
    videoUrl: "../MP4/ZwedenGameplay.mp4", // MP4 demo
    downloadUrl: "./Builds/PlanetPuzzle.zip"
  }
];

// Elements
const projectList = document.getElementById("project-list");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const videoContainer = document.getElementById("video-container");
const addProjectBtn = document.getElementById("add-project-btn");

// Plyr player instance (houdt huidige player bij zodat we hem kunnen vernietigen)
let currentPlayer = null;

// Stop media en destroy currentPlayer als aanwezig
function stopMedia() {
  if (currentPlayer && typeof currentPlayer.destroy === 'function') {
    try { currentPlayer.destroy(); } catch (e) { /* ignore */ }
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

// openModal: maakt Plyr embed voor YouTube of een HTML5-video voor MP4, en instancieert Plyr
function openModal(videoUrl) {
  if (!videoContainer || !modal) return;

  stopMedia();

  if (isYouTubeUrl(videoUrl)) {
    // Zorg voor embed-formaat (haal id uit watch-URL als nodig)
    let src = videoUrl;
    if (/watch\?v=/.test(videoUrl)) {
      const idMatch = videoUrl.match(/[?&]v=([^&]+)/);
      if (idMatch) src = `https://www.youtube.com/embed/${idMatch[1]}`;
    } else if (/youtu\.be\//.test(videoUrl)) {
      const idMatch = videoUrl.match(/youtu\.be\/([^?]+)/);
      if (idMatch) src = `https://www.youtube.com/embed/${idMatch[1]}`;
    }

    // Plyr YouTube embed wrapper
    // id "player" gebruikt om Plyr te initializen
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

    // instantiate Plyr
    try {
      currentPlayer = new Plyr('#player', { 
        controls: ['play-large','play','progress','mute','volume','fullscreen'],
        youtube: { noCookie: false } 
      });
    } catch (e) {
      // als Plyr niet beschikbaar is (niet geladen), fallback: iframe al zichtbaar
      currentPlayer = null;
    }

  } else {
    // HTML5 video (MP4)
    // geef id "player" zodat we Plyr op dezelfde selector kunnen gebruiken
    videoContainer.innerHTML = `
      <video id="player" controls playsinline>
        <source src="${videoUrl}" type="video/mp4" />
        Je browser ondersteunt dit videoformaat niet.
      </video>
    `;

    // instantiate Plyr
    try {
      currentPlayer = new Plyr('#player', {
        controls: ['play-large','play','progress','mute','volume','fullscreen'],
        // optioneel: instellingen, captions, etc.
      });
      // probeer autoplay (kan geblokkeerd worden door browser als niet-muted)
      currentPlayer.play().catch(()=>{/* autoplay geblokkeerd, geen probleem */});
    } catch (e) {
      currentPlayer = null;
    }
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
    projectPath.innerText = project.path;

    detailsDiv.appendChild(projectName);
    detailsDiv.appendChild(projectPath);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("project-info");
    infoDiv.innerHTML = `
      <div>Cloud: ${project.cloudStatus}</div>
      <div>Modified: ${project.modified}</div>
      <div>Version: ${project.unityVersion}</div>
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
  ````````````