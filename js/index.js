const arrayLike = document.getElementsByClassName("projects__li");
const projects = Array.from(arrayLike); // all projects
console.log(projects);
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

// ul parent node
const projectsParent = document.getElementById("projects__parent");

function clickOnProject(e) {
  // remove event listener from all projects
  // after first click u can only click left, right arrow or exit
  // projects.forEach(project => project.removeEventListener("click", clickOnProject, { once: true }));
  console.log(e);
  console.log(e.path);

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

  // remove projects__flex class from clicked project, change cursor back to default
  e.path[1].classList.remove("projects__flex");
  // style li elements
  e.path[1].style = "cursor: default;";
  // add classes to ul
  e.path[2].classList.add("carousel", "slide");

  // get class names of projects__li
  const clickedClass = e.path[1].className;
  // get the last number of projects__li
  const clickedNum = clickedClass[clickedClass.length - 1];
  // multidimensional array that contains a list of accomplishments
  let li = "";
  for (let x = 0; x < whatILearnt[clickedNum].length; x++) {
    li += `<li>${whatILearnt[clickedNum][x]}</li>`;
  }
  console.log(clickedNum);

  // add section that acts as projects__description
  const section = document.createElement("section");
  section.className = "container projects__description";
  section.innerHTML = `<div>
    <h3>${header[clickedNum]}</h3>
    <p>${intro[clickedNum]}</p>
    <hr class="projects__hr">
    <h3>Accomplishments</h3>
    ${li}
    <br>
    <div class="projects__links">
      <a href="${projectsLink[clickedNum]}" class="projects__link" target="_blank">
        <i class="fas fa-external-link-alt"></i>
      </a>
      <a href="${projectsSource[clickedNum]}" class="projects__link" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>`;


  const leftArrow = document.createElement("div");
  //leftArrow.className = "projects__leftArrow"
  leftArrow.innerHTML = `<div class="projects__leftArrow" role="button">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </div>`;
  leftArrow.addEventListener("click", function() {
    prevClick(clickedNum);
  });


  const rightArrow = document.createElement("div");
  //rightArrow.className = "projects__rightArrow";
  rightArrow.innerHTML = `<div class="projects__rightArrow" role="button">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </div>`;
  rightArrow.addEventListener("click", function() {
    nextClick(clickedNum)
  });


  const closeBtn = document.createElement("div");
  //closeBtn.className = "";
  closeBtn.innerHTML = `<button type="button" class="close projects__closeBtn" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`;


  projectsParent.appendChild(section);
  e.path[2].appendChild(leftArrow);
  e.path[2].appendChild(rightArrow);
  e.path[2].appendChild(closeBtn);
}

/* index doesn't change that's why it only works when user clicks on bg img again */
// show previous project
function prevClick(index) {
  console.log(index);
  let curProject = projects[index];
  // disable flex value for this project
  curProject.classList.remove(`projects__li${index}`);

  // enable flex value for previous project
  if (index > 0) {
    let prevProject = projects[index-1];
    prevProject.classList.add(`projects__li${index-1}`);
  } else {
    let prevProject = projects[4];
    prevProject.classList.add("projects__li4");
  }
}

// show next project
function nextClick(index) {
  console.log(index);
  let curProject = projects[index];
  // disable flex value for this project
  curProject.classList.remove(`projects__li${index}`);

  // enable flex value for previous project
  if (index < 4) {
    let nextProject = projects[index+1];
    nextProject.classList.add(`projects__li${index+1}`);
  } else {
    let nextProject = projects[0];
    nextProject.classList.add("projects__li0");
  }
}

// exit project
function close(){

}
