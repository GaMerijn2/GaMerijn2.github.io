const projects = document.querySelectorAll('.project');
let currentProject = 0;

// Show the first project initially
projects[currentProject].classList.add('active');

function showProject(index) {
    projects[currentProject].classList.remove('active');
    currentProject = (index + projects.length) % projects.length; // Ensure cycling between 0 and length
    projects[currentProject].classList.add('active');
}

function showNextProject() {
    showProject(currentProject + 1);
}

function showPreviousProject() {
    showProject(currentProject - 1);
}

// Cycle projects automatically every 5 seconds
let autoCycle = setInterval(showNextProject, 5000);

// Manual navigation using arrows
document.querySelector('.arrow-left').addEventListener('click', () => {
    clearInterval(autoCycle); // Stop auto-cycling when manually navigating
    showPreviousProject();
    autoCycle = setInterval(showNextProject, 5000); // Restart auto-cycling
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    clearInterval(autoCycle); // Stop auto-cycling when manually navigating
    showNextProject();
    autoCycle = setInterval(showNextProject, 5000); // Restart auto-cycling
});
