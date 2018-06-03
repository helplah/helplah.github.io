const arrayLike = document.getElementsByClassName("projects__li");
const projects = Array.from(arrayLike); // all projects
console.log("All projects", projects);
// add event listener to all projects
projects.forEach(project => project.addEventListener("click", clickOnProject, { once: true }));

// texts
const header = ["Flashcard App", "Tribute Page", "Twitch TV", "React Wikipedia", "React Quote Machine"];
const intro = [
  "Created during Chingu Voyage, a collaborative environment where hundreds of people build projects together to learn. It allows users to create a topic, insert questions and answers.",
  "This was the second website that I created. I chose Elon Musk because I respect his tenacity, work ethics and his reasons for what he's doing.",
  "Tracks twitch streamers and shows what they're streaming if they're online. Allows user to filter based on status.",
  "Created using React, search the typed word at Wikipedia and return the top 10 results",
  "Created using React, generates a new design quote when it's clicked"
];
const whatILearnt = [
  ["Learnt Node.js and Express", "Learnt React and Redux", "Added if user isAuthenticated", "Made it responsive", "Refactored and used table and grid"],
  ["Second website I built", "Responsive image", "Refactored CSS to SCSS"],
  ["Third website I built", "Used Twitch API", "Used jQuery, Bootstrap"],
  ["Created with React and Babel", "Used Wikipedia OpenSearch"],
  ["Created with React and Babel", "Used Quotes on Design API", "Used jQuery"]
];
const projectsLink = [
  "https://shrouded-taiga-52624.herokuapp.com/",
  "/tribute-page",
  "/twitch-tv",
  "/react-wikipedia",
  "/react-quote-machine"
];
const projectsSource = [
  "https://github.com/chingu-voyage4/Bears-Team-9",
  "https://github.com/helplah/tribute-page",
  "https://github.com/helplah/twitch-tv",
  "https://github.com/helplah/react-wikipedia",
  "https://github.com/helplah/react-quote-machine"
];
const projectsList = [];
for (let x = 0; x < 5; x++){
  projectsList.push([`${"projects__li" + x}`]);
}

const projectsParent = document.getElementById("projects__parent"); // ul parent node
const section = document.createElement("section"); // section contains description of project

function clickOnProject(e) {
  // remove event listener from all projects
  // after first click u can only click left, right arrow or exit
  projects.forEach(project => project.removeEventListener("click", clickOnProject, { once: true }));
  console.log("Clicked project event", e);
  console.log("Clicked projects path array", e.path);

  // select all the other projects (or all non-clicked projects)
  let otherProjects = projects.filter(project => project !== e.path[1]);
  console.log(otherProjects);

  // remove projects__li*, * being 0-4, and projects__flex to allow clicked project to expand
  for (let x = 0; x < otherProjects.length; x++) {
    let projectsFlex = otherProjects[x].classList[2];
    let projectsListNo = otherProjects[x].classList[1];
    otherProjects.forEach(project => {
      project.style = "cursor: default;";
      project.classList.remove(projectsFlex, projectsListNo);
    });
  }

 // remove projects__flex class from clicked project
  e.path[1].classList.remove("projects__flex");
  e.path[1].style = "cursor: default;"; // change cursor back to default

  // add section that acts as projects__description
  section.className = "container";
  section.id = "projects__description";

  // get class names of projects__li
  const clickedClass = e.path[1].className;
  // get the last number of projects__li
  const clickedNum = clickedClass[clickedClass.length - 1];
  changeSection(clickedNum, section);

  // Add leftArrow on clicked
  const leftArrow = document.createElement("div");
  leftArrow.id = "projects__leftArrow";
  leftArrow.innerHTML = `<div role="button">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </div>`;
  leftArrow.addEventListener("click", function() {
    prevClick(clickedNum);
  });

  // Add rightArrow on clicked
  const rightArrow = document.createElement("div");
  rightArrow.id = "projects__rightArrow";
  rightArrow.innerHTML = `<div role="button">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </div>`;
  rightArrow.addEventListener("click", function() {
    nextClick(clickedNum);
  });

  // Add closeBtn on clicked
  const closeBtn = document.createElement("div");
  closeBtn.id = "projects__closeBtn";
  closeBtn.innerHTML = `<button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`;
  closeBtn.addEventListener("click", close, { once: true });

  projectsParent.appendChild(section);
  e.path[2].appendChild(leftArrow);
  e.path[2].appendChild(rightArrow);
  e.path[2].appendChild(closeBtn);
}

function changeSection(index, section) {
  // multidimensional array that contains a list of accomplishments
  let li = "";
  for (let x = 0; x < whatILearnt[index].length; x++) {
    li += `<li>${whatILearnt[index][x]}</li>`;
  }

  section.innerHTML = `<div>
    <h3>${header[index]}</h3>
    <p>${intro[index]}</p>
    <hr class="projects__hr">
    <h3>Accomplishments</h3>
    ${li}
    <br>
    <div class="projects__url">
      <a href="${projectsLink[index]}" class="projects__links" target="_blank">
        <i class="fas fa-external-link-alt"></i>
      </a>
      <a href="${projectsSource[index]}" class="projects__links" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>`;
}

let index = -1;
// show previous project
function prevClick(clickedNum) {
  if (index === -1) {
    index = clickedNum;
  }

  let curProject = projects[index];
  // disable flex value for this project
  curProject.classList.remove(`projects__li${index}`);

  // enable flex value for previous project
  if (index > 0) {
    index--;
  } else {
    index = 4;
  }
  let prevProject = projects[index];
  prevProject.classList.add(`projects__li${index}`);
  changeSection(index, section);
}

// show next project
function nextClick(clickedNum) {
  if (index === -1) {
    index = clickedNum;
  }

  let curProject = projects[index];
  // disable flex value for this project
  curProject.classList.remove(`projects__li${index}`);

  // enable flex value for next project
  if (index < 4) {
    index++;
  } else {
    index = 0;
  }
  let nextProject = projects[index];
  nextProject.classList.add(`projects__li${index}`);
  changeSection(index, section);
}

// exit carousel
function close() {
  // add projects__li*, * being 0-4, and projects__flex to allow all projects to occupy space
  for (let x = 0; x < projects.length; x++) {
    if (projects[x].classList.length === 1) {
      projects[x].classList.add(projectsList[x], "projects__flex");
    } else {
      projects[x].classList.add("projects__flex");
    }
    projects[x].style = "";
  }

  document.getElementById("projects__description").remove();
  document.getElementById("projects__leftArrow").remove();
  document.getElementById("projects__rightArrow").remove();
  document.getElementById("projects__closeBtn").remove();
  projects.forEach(project => project.addEventListener("click", clickOnProject, { once: true }));
}

const icon = document.getElementById("header__icon");
icon.addEventListener("click", clickHamburger);
const overlay = document.getElementsByClassName('header__overlay')[0];
const menu = document.getElementsByClassName('header__menu')[0];
const html = document.getElementsByTagName("html")[0];

function clickHamburger() {
  icon.classList.toggle("active");
  for (let x = 0; x < icon.children.length; x++){
    icon.children[x].classList.remove("no-animation");
  }
  overlay.classList.toggle("active");
  menu.classList.toggle("active");
  html.classList.toggle("active");
  overlay.addEventListener("click", clickMenuLinks, { once: true });
}

function clickMenuLinks() {
  icon.classList.toggle("active");
  overlay.classList.toggle("active");
  menu.classList.toggle("active");
  html.classList.toggle("active");
}
