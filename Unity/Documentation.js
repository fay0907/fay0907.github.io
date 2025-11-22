/* -------------------- Projecten -------------------- */
const projects = [
  /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/* ZwedenProject project */
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
  {
    name: "SwedenProject",
    path: "C:/Projects/SwedenProject",
    cloudStatus: "Yes",
    modified: "3 days ago",
    unityVersion: "2021.3.1f1",
    media: [
      "../MP4/Zweden2Computers.mp4",
      "../Jpg/foto_team1.jpg",
      "../MP4/ZwedenGameplay.mp4"
    ],
    docs: [
      {
        title: "Introductie",
        content: `
          <h1>SwedenProject Introductie</h1>
          <div style="height:20px"></div>

          <p>Welkom bij SwedenProject!</p>
          <div style="height:20px"></div>

          <p>The Sweden Project is a local multiplayer party game created by a seven-person team over one month. 
          Set in the 1600s during Dutch - Swedish tensions, players take the role of Dutch or Swedish villagers working together to gather resources, 
          trade locally, and complete lively minigames. Sweden needs armaments for the war effort, 
          while the Netherlands needs materials to reinforce its dikes — but both sides must succeed to win. 
          Coordinate, cooperate, and keep both nations safe from danger.</p >
          <div style="height:20px"></div>

          <img src="../Jpg/foto_team_intro.jpg">
        `
      },
      {
        title: "Gameplay",
        content: `
          <h1>Gameplay Mechanics</h1>
          
          <div style="height:20px"></div>
          <h3>The gameplay one screen width stert menu and trading system</h3>

          <video controls style="width:100%; border-radius:10px; margin-bottom:15px;">
            <source src="../MP4/ZwedenGameplay.mp4" type="video/mp4">
          </video>

          <h3>The gameplay one two screens</h3>
          <div style="height:20px"></div>

          <video controls style="width:100%; border-radius:10px; margin-bottom:15px;">
            <source src="../MP4/Zweden2Computers.mp4" type="video/mp4">
          </video>

          <p>Hier wordt gameplay uitgelegd.</p>
        `
      }
      ,{
        title: "Code Snippets",
        content: `
          <h1>Code Snippets</h1>
          <p>Hier zijn enkele codevoorbeelden:</p>
          <pre><code>// Voorbeeld code hier</code></pre>
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
      "../NeonFendingMachine/starfalgambling-made-with-clipchamp.gif",
      "../PortfolioGame/EnemyAttack.png",
      "../PortfolioGame/BLockAttack.png",
      "../PortfolioGame/PlayerFunction.png",
      "../PortfolioGame/SwordAttack.png",
      "../PortfolioGame/IFightStrategy-Interface.png"
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
      ,{
        title: "Code Sippets",
        content: `
          <h1>Code Sippets</h1>
          <img src="../PortfolioGame/IFightStrategy-Interface.png" alt="Code Snippet" style="width:100%; border-radius:10px; margin-bottom:15px;">
          <img src="../PortfolioGame/PlayerFunction.png" alt="Code Snippet" style="width:100%; border-radius:10px; margin-bottom:15px;">
          <img src="../PortfolioGame/SwordAttack.png" alt="Code Snippet" style="width:100%; border-radius:10px; margin-bottom:15px;">
          <img src="../PortfolioGame/BlockAttack.png" alt="Code Snippet" style="width:100%; border-radius:10px; margin-bottom:15px;">
          <img src="../PortfolioGame/EnemyAttack.png" alt="Code Snippet" style="width:100%; border-radius:10px; margin-bottom:15px;">
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
      ,{
        title: "Code Sippets",
        content: `
          <h1>Code Sippets</h1>
          
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
