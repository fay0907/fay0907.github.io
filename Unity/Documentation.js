// ---------- Klok ----------
function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
    

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

          <p>Welkom to the SwedenProject!</p>
          <div style="height:20px"></div>

          <p>The Sweden Project is a local multiplayer party game created by a seven-person team over one month. 
          Set in the 1600s during Dutch - Swedish tensions, players take the role of Dutch or Swedish villagers working together to gather resources, 
          trade locally, and complete lively minigames. Sweden needs armaments for the war effort, 
          while the Netherlands needs materials to reinforce its dikes — but both sides must succeed to win. 
          Coordinate, cooperate, and keep both nations safe from danger.
          to check out code for this project, check out my 
          <a href='https://github.com/L0rdSquidy/Team-2-Game/tree/main/Team2Game' target='_blank' rel='noopener noreferrer'>Github</a></p >
          <div style="height:20px"></div>

          <img src="../DubleAlliance/DubbleAlliance.png" alt="Sweden Project Logo">
        `
      },
      {
        title: "Gameplay Video",
        content: `
          <h1>Gameplay Mechanics</h1>

          <div style="height:20px"></div>

          <p>A brief gameplay demo showing the core mechanics, level flow, and visual direction of the Sweden project.<p>

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
    media: 
    [
      "../NeonFendingMachine/gambling.png",
      "../NeonFendingMachine/starfalgambling-made-with-clipchamp.gif",
      
    ],
    docs: [
      {
        title: "Introductie",
        content:`
        <h1>OperationStarfall Intro</h1>

        <div style="height:20px"></div>

        <p>Project Starfall is a Unity project I developed with half of my class to simulate working at a professional game studio.
        We were colocated in an office-style environment and ran the full Agile process: rotating Sprint Masters, 
        sprint planning, daily stand-ups and stand-downs, and regular retrospectives. We used Codecks to track tasks and keep planning transparent, 
        adapted our workflow each sprint, and delivered playable builds while practicing real-world team communication and coordination.
        <P>
        
        <img src="../NeonFendingMachine/NEON.png" alt="Operation Starfall Logo">
        `
      },
      {
        title: "Gameplay Video",
        content: `
          <h2>Gameplay Mechanics</h2>

          <div style="height:20px"></div>

          <p>A brief gameplay demo showing the core mechanics, level flow, and visual direction of Operation Starfall.<p>
          
          <div style="height:20px"></div>

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
    media: 
    [
      "../PortfolioGame/IFightStrategyClip.mp4",
      "../PortfolioGame/EnemyAttack.jpg",
      "../PortfolioGame/BBlockAttack.jpg",
      "../PortfolioGame/PlayerFunction.jpg",
      "../PortfolioGame/SwordAttack.jpg",
      "../PortfolioGame/IFightStrategy-Interface.jpg"
    ],
    docs: [
      {
        title: "Intro",
        content:` 
        
        <h1>MyProjects Intro</h1>
        
        <p>The portfolio game project is my own project. It still has that name because I haven’t come up with a real name for it yet.
          <div style="height:20px"></div>
          For my Advanced software exam I chose to make a strategy-style state machine, and from that I also ended up creating an enemy AI.
          <div style="height:20px"></div>
          Now that I’m no longer using this project for school, the plan is to turn it into a game where you travel through different kinds of worlds, and each world has its own game genre and its own art style.
          <div style="height:20px"></div>
          he main genre will be open world, and the idea is that you go on quests to find different kinds of keys to help the other worlds. After you finish the main story, you can replay all the games as separate levels if you want.
          <div style="height:20px"></div>
          This is everything I’ve thought of so far for the project, but hopefully I’ll add a lot more later.
          to check out code for this project, check out my 
        <a href='https://github.com/fay0907/PortfolioGame/tree/OpenWorld/PortfolioGame' target='_blank' rel='noopener noreferrer'>Github</a><p>
        `
      },
      {
        title: "Gameplay",
          content: `
    
          <h2>Gameplay Video</h2>
           <video controls style="width:100%; border-radius:10px; margin-bottom:15px;">
            <source src="../PortfolioGame/IFightStrategyClip.mp4" type="video/mp4">
          </video>
        ` 
      }
      ,{
        title: "Code Sippets",
        content: `
          <h1>Code Sippets</h1>
          <div style="height:20px"></div>
          
          <p>IFightStrategy defines the Strategy Pattern for combat behavior.
          Any class that implements this interface provides its own way of handling attacks and blocks, allowing the player to switch between different fighting styles during gameplay (e.g., "AggressiveStyle", "DefensiveStyle", "MagicStyle", etc.).
          
          div style="height:20px"></div>

          ExecuteAttack(PlayerCharacter attacker, EnemyCharacter target)
          Executes the attack behavior defined by this strategy. The implementation determines things like damage, animations, timing, and any special effects.
          
          <div style="height:20px"></div>

          ExecuteBlock(PlayerCharacter defender, EnemyCharacter enemyAttacker)
          Executes the blocking or defensive behavior. The strategy defines how effective the block is, whether it triggers a counter, reflects damage, etc.
          
          <div style="height:20px"></div>

          tring strategyName { get; }
          The readable name of the strategy — useful for debugging, UI, or informing the player which fighting style is currently active.<p>

          <div style="height:20px"></div>

          <img src="../PortfolioGame/PlayerFunction.jpg">
          <img src="../PortfolioGame/SwordAttack.jpg">
          <img src="../PortfolioGame/BlockAttack.jpg">
          <img src="../PortfolioGame/EnemyAttack.jpg">
          
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
