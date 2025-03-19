document.addEventListener("DOMContentLoaded", function () {
    console.log("Discord profielpagina geladen");

    const profilePic = document.querySelector(".profile-pic");
    const aboutTab = document.getElementById("about-tab");
    const activityTab = document.getElementById("activity-tab");
    const aboutSection = document.getElementById("about-section");
    const activitySection = document.getElementById("activity-section");

    // Profielfoto animatie bij hover
    profilePic.addEventListener("mouseenter", function () {
        profilePic.style.transform = "translateX(-50%) scale(1.1)";
        profilePic.style.transition = "0.3s ease-in-out";
    });

    profilePic.addEventListener("mouseleave", function () {
        profilePic.style.transform = "translateX(-50%) scale(1)";
    });

    // Tab wisselen tussen 'Over Mij' en 'Activiteit'
    function switchTab(selectedTab, otherTab, showSection, hideSection) {
        showSection.style.display = "block";
        hideSection.style.display = "none";
        selectedTab.classList.add("active-tab");
        otherTab.classList.remove("active-tab");
    }

    aboutTab.addEventListener("click", function () {
        switchTab(aboutTab, activityTab, aboutSection, activitySection);
    });

    activityTab.addEventListener("click", function () {
        switchTab(activityTab, aboutTab, activitySection, aboutSection);
    });
});

/* --------- Scrolbar --------- */ 
document.addEventListener("DOMContentLoaded", function () {
    console.log("Discord profielpagina geladen");

    const profilePic = document.querySelector(".profile-pic");
    const aboutTab = document.getElementById("about-tab");
    const activityTab = document.getElementById("activity-tab");
    const aboutSection = document.getElementById("about-section");
    const activitySection = document.getElementById("activity-section");

    // Profielfoto animatie bij hover
    profilePic.addEventListener("mouseenter", function () {
        profilePic.style.transform = "translateX(-50%) scale(1.1)";
        profilePic.style.transition = "0.3s ease-in-out";
    });

    profilePic.addEventListener("mouseleave", function () {
        profilePic.style.transform = "translateX(-50%) scale(1)";
    });

    // Tab wisselen tussen 'Over Mij' en 'Activiteit'
    function switchTab(selectedTab, otherTab, showSection, hideSection) {
        showSection.style.display = "block";
        hideSection.style.display = "none";
        selectedTab.classList.add("active-tab");
        otherTab.classList.remove("active-tab");
    }

    aboutTab.addEventListener("click", function () {
        switchTab(aboutTab, activityTab, aboutSection, activitySection);
    });

    activityTab.addEventListener("click", function () {
        switchTab(activityTab, aboutTab, activitySection, aboutSection);
    });

    function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", () => {
    const clock = document.createElement("div");
    clock.id = "clock";
    document.getElementById("taskbar").appendChild(clock);
});

});

