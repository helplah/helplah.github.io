const arrayLike = document.getElementsByClassName("projects__li");
const projects = Array.from(arrayLike); // all projects
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

// ul parent node
const projectsParent = document.getElementById("projects__parent");

function clickOnProject(e) {
  // remove event listener from all projects
  // after first click u can only click left, right arrow or exit
  projects.forEach(project => project.removeEventListener("click", clickOnProject, { once: true }));
  console.log(e);

  // select all the other projects (or all non-clicked projects)
  let otherProjects = projects.filter(project => project !== e.path[1]);
  console.log(otherProjects);

  // remove projects__li*, * being 0-4, and projects__flex to allow clicked project to expand
  for (let x = 0; x < otherProjects.length; x++) {
    let projectsFlex = otherProjects[x].classList[2];
    let projectsListNo = otherProjects[x].classList[1];
    otherProjects.forEach(project => {
      project.classList.remove(projectsFlex, projectsListNo);
    });
  }

  // remove projects__flex class from clicked project, change cursor back to default
  e.path[1].classList.remove("projects__flex");
  e.path[1].style = "cursor: default;"; // how can I style all li elements

  const section = document.createElement("section");
  section.className = "container projects__description";

  const clickedClass = e.path[1].className;
  const clickedNum = clickedClass[clickedClass.length - 1];

  const leftArrow = document.createElement("div");
  leftArrow.className = "projects__leftArrow"
  leftArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" stroke-width="4"/></svg>`;

  const rightArrow = document.createElement("div");
  rightArrow.className = "projects__rightArrow";
  rightArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" stroke-width="4"/></svg>`;
  console.log();

  let li = "";
  for (let x = 0; x < whatILearnt[clickedNum].length; x++) {
    li += `<li>${whatILearnt[clickedNum][x]}</li>`;
  }

  // how to create multiple li element depending on how many in array
  section.innerHTML = `<div><h3>${header[clickedNum]}</h3><p>${intro[clickedNum]}</p><hr class="projects__hr"><h3>Accomplishments</h3>${li}</div>`;

  projectsParent.appendChild(section);
  e.path[1].appendChild(leftArrow);
  e.path[1].appendChild(rightArrow);
}

// exit project
// show previous and next project
