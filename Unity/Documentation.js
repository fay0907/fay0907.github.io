/* -------------------- Projecten -------------------- */
const projects = [
  /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* ZwedenProject project */
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
  {
    name: "ZwedenProject",
    path: "C:/Projects/ZwedenProject",
    cloudStatus: "Yes",
    modified: "3 days ago",
    unityVersion: "2021.3.1f1",
    media: [
      "../MP4/Zweden2Computers.mp4",
      "../Jpg/foto_team1.jpg"
    ],
    docs: [
      {
        title: "Introductie",
        content: `
          <h1>ZwedenProject Introductie</h1>
          <p>Welkom bij ZwedenProject!</p>
          <img src="../Jpg/foto_team_intro.jpg">
        `
      },
      {
        title: "Gameplay",
        content: `
          <h2>Gameplay Mechanics</h2>
          <video controls>
            <source src="../MP4/ZwedenGameplay.mp4" type="video/mp4">
          </video>
          <p>Hier wordt gameplay uitgelegd.</p>
        `
      }
    ],
    downloadUrl: "./Builds/ZwedenProject.zip"
  },
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* OperationStarfall project */
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
  {
    name: "OperationStarfall",
    path: "C:/Projects/OperationStarfall",
    cloudStatus: "No",
    modified: "5 days ago",
    unityVersion: "2021.3.0f2",
    media: [
      "../NeonFendingMachine/gambling.png",
      "../NeonFendingMachine/starfalgambling-made-with-clipchamp.gif"

    ],
    docs: [
      {
        title: "Introductie",
        content: "<h1>OperationStarfall Intro</h1><p>Project uitleg hier.</p>"
      },
      {
        title: "Gameplay",
        content: `
          <h2>Gameplay Mechanics</h2>
          <img src="../NeonFendingMachine/starfalgambling-made-with-clipchamp.gif" alt="Gameplay GIF" 
          style="width:100%; border-radius:10px; margin-bottom:15px;">
        `          
      }
    ],
    downloadUrl: "./Builds/OperationStarfall.zip"
  },
  /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* MyProjects project */
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
  {
    name: "MyProjects",
    path: "C:/Projects/MyProjects",
    cloudStatus: "Yes",
    modified: "2 weeks ago",
    unityVersion: "2022.1.0f1",
    media: ["../PortfolioGame/IFightStrategyClip.mp4"],
    docs: [
      {
        title: "Intro",
        content: "<h1>MyProjects Intro</h1><p>Uitleg hier.</p>"
      },
      {
        title: "Gameplay",
          content: `
          <h2>Gameplay Gameplay</h2>
          <video controls>
            <source src="../PortfolioGame/IFightStrategyClip.mp4" type="video/mp4">
          </video>
        ` 
      }
    ],
    downloadUrl: "./Builds/PlanetPuzzle.zip"
  }
];

/* -------------------- Elements -------------------- */
const projectList = document.getElementById("project-list");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const videoContainer = document.getElementById("video-container");

/* -------------------- Media Modal -------------------- */
let currentPlayer = null;
function stopMedia() {
  if (currentPlayer && typeof currentPlayer.destroy === 'function') {
    try { currentPlayer.destroy(); } catch(e){}
    currentPlayer = null;
  }
  if(videoContainer) videoContainer.innerHTML = '';
}

function openMedia(mediaArray){
  stopMedia();
  let html = '';
  mediaArray.forEach(item=>{
    if(/\.(mp4|webm|ogg)$/i.test(item)){
      html += `<video controls style="width:100%; border-radius:10px; margin-bottom:15px;"><source src="${item}" type="video/mp4"></video>`;
    } else {
      html += `<img src="${item}" style="width:100%; border-radius:10px; margin-bottom:15px;">`;
    }
  });
  videoContainer.innerHTML = html;
  modal.style.display = "flex";
}

/* -------------------- Documentatie Modal -------------------- */
const docsModal = document.getElementById("docsModal");
const docsSidebar = document.getElementById("docs-sidebar");
const docsBody = document.getElementById("docs-body");
const docsClose = document.getElementById("docs-close");

function openDocs(docs) {
  docsModal.style.display = "flex";
  loadDocs(docs);
}

function loadDocs(docs){
  docsSidebar.innerHTML = "";
  docsBody.innerHTML = docs[0].content;
  docs.forEach(section=>{
    const item = document.createElement("div");
    item.innerText = section.title;
    item.onclick = ()=> docsBody.innerHTML = section.content;
    docsSidebar.appendChild(item);
  });
}

docsClose.onclick = ()=> docsModal.style.display = "none";
window.onclick = (e)=> { if(e.target === docsModal) docsModal.style.display = "none"; };

/* -------------------- Load Projects -------------------- */
function loadProjects() {
  if(!projectList) return;
  projectList.innerHTML = '';

  projects.forEach((project)=>{
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

    if(project.downloadUrl){
      const downloadButton = document.createElement("a");
      downloadButton.classList.add("download-button");
      downloadButton.href = project.downloadUrl;
      downloadButton.setAttribute('download','');
      downloadButton.innerText = "Download Build";
      downloadButton.addEventListener('click',e=>e.stopPropagation());
      infoDiv.appendChild(downloadButton);
    }

    // --- Hier voegen we de Open Documentatie knop toe ---
    const docsButton = document.createElement("div");
    docsButton.classList.add("docs-button");
    docsButton.innerText = "Open Documentatie";
    docsButton.addEventListener("click",(e)=>{
      e.stopPropagation();
      openDocs(project.docs);
    });
    infoDiv.appendChild(docsButton);

    projectItem.appendChild(detailsDiv);
    projectItem.appendChild(infoDiv);

    projectItem.addEventListener("click",()=> {
      if(project.media) openMedia(project.media);
    });

    projectList.appendChild(projectItem);
  });
}

/* -------------------- Modal Close Event -------------------- */
if(closeModal){
  closeModal.addEventListener("click",()=>{
    if(modal) modal.style.display="none";
    stopMedia();
  });
}
window.addEventListener("click",(e)=>{
  if(e.target === modal){
    modal.style.display="none";
    stopMedia();
  }
});

/* -------------------- Add Project Button -------------------- */
const addProjectBtn = document.getElementById("add-project-btn");
if(addProjectBtn){
  addProjectBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("Hier kun je een nieuwe project-toevoeg-functionaliteit bouwen!");
  });
}

/* -------------------- Init -------------------- */
document.addEventListener('DOMContentLoaded', loadProjects);
