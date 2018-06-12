document.addEventListener("DOMContentLoaded", yall);

new TypeIt('#hero__typewriter', {
  speed: 38,
  startDelay: 500,
  autoStart: true
}).type(`Hi I'm Jenssen Lee! Looking to start my career as a Front-End Developer in Singapore.`)
  .pause(700)
  .break()
  .break()
  .type(`I have experience with HTML, SASS, Bootstrap, JavaScript, jQuery, React, Node.js, Express.`)
  .pause(700)
  .break()
  .break()
  .type(`This site was designed and built by me - the code is available on <a href="https://github.com/helplah/helplah.github.io" target="_blank" rel="noopener">Github</a>.`);

const arrayLike = document.getElementsByClassName("projects__li");
const projects = Array.from(arrayLike); // all projects
console.log("All projects", projects);

// add event listener to all projects:
// greater than 768px width run desktopClick func else run mobileClick func
if (window.innerWidth > 768) {
  projects.forEach(project => project.addEventListener("click", desktopClick, { once: true }));
} else {
  projects.forEach(project => project.addEventListener("click", function() {
    setTimeout(mobileClick, 150, this);
  }));
}

// texts and links
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
section.className = "container"; // add class container and id projects__description to section
section.id = "projects__description";

/* when user is using tablet and above width devices */
function desktopClick(e) {
  // remove event listener from all projects
  // after first click u can only click left, right arrow or exit
  projects.forEach(project => project.removeEventListener("click", desktopClick, { once: true }));
  console.log("Clicked project event", e);
  console.log("Clicked projects path array", e.path);

  // composedPath for firefox
  const path = e.path || e.composedPath();
  console.log(path);

  // select all the other projects (or all non-clicked projects)
  let otherProjects = projects.filter(project => project !== path[2]);
  console.log(otherProjects);

  // remove projects__li*, * being 0-4, and projects__flex to allow clicked project to expand
  otherProjects.forEach(project => {
    project.classList.remove("projects__flex");
    Object.assign(project.style,{cursor:"default", display:"none"});
  });

  // remove projects__flex class from clicked project
  path[2].classList.remove("projects__flex");
  path[2].style = "cursor: default;"; // change cursor back to default

  // get class names of projects__li
  const clickedClass = path[2].className;
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
  projectsParent.style.paddingBottom = "4vh";
  path[3].appendChild(leftArrow);
  path[3].appendChild(rightArrow);
  path[3].appendChild(closeBtn);
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
      <a href="${projectsLink[index]}" class="projects__links" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>
        </svg>
      </a>
      <a href="${projectsSource[index]}" class="projects__links" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
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
  //curProject.classList.remove(`projects__li${index}`);
  Object.assign(curProject.style, {display:"none"});

  // enable flex value for previous project
  if (index > 0) {
    index--;
  } else {
    index = 4;
  }
  let prevProject = projects[index];
  //prevProject.classList.add(`projects__li${index}`);
  Object.assign(prevProject.style, {display:"inline-block"});
  changeSection(index, section);
}

// show next project
function nextClick(clickedNum) {
  if (index === -1) {
    index = clickedNum;
  }

  let curProject = projects[index];
  // disable flex value for this project
  //curProject.classList.remove(`projects__li${index}`);
  Object.assign(curProject.style, {display:"none"});

  // enable flex value for next project
  if (index < 4) {
    index++;
  } else {
    index = 0;
  }
  let nextProject = projects[index];
  //nextProject.classList.add(`projects__li${index}`);
  Object.assign(nextProject.style, {display:"inline-block"});
  changeSection(index, section);
}

// exit carousel
function close() {
  // add projects__li*, * being 0-4, and projects__flex to allow all projects to occupy space
  for (let x = 0; x < projects.length; x++) {
    projects[x].classList.add("projects__flex");
    projects[x].removeAttribute("style");
  }

  document.getElementById("projects__description").remove();
  document.getElementById("projects__leftArrow").remove();
  document.getElementById("projects__rightArrow").remove();
  document.getElementById("projects__closeBtn").remove();
  projectsParent.style.paddingBottom = "0";
  projects.forEach(project => project.addEventListener("click", desktopClick, { once: true }));
}

const icon = document.getElementById("header__icon");
icon.addEventListener("click", clickHamburger);
const overlay = document.getElementsByClassName('header__overlay')[0];
const menu = document.getElementsByClassName('header__menu')[0];
const html = document.getElementsByTagName("html")[0];

function clickHamburger() {
  clickMenuLinks();
  for (let x = 0; x < icon.children.length; x++){
    icon.children[x].classList.remove("no-animation");
  }
  overlay.addEventListener("click", clickMenuLinks, { once: true });
}

function clickMenuLinks() {
  icon.classList.toggle("active");
  overlay.classList.toggle("active");
  menu.classList.toggle("active");
  html.classList.toggle("active");
}

let lastClicked;
/* when user is using tablet and below width devices */
function mobileClick(click) {
  console.log("Click", click);

  const clickedClass = click.className; // get class names of projects__li
  const clickedNum = clickedClass[clickedClass.length - 1]; // get the last number of projects__li
  changeSection(clickedNum, section);

  let description = document.querySelector("#projects__description");
  // if description is present, clicks on itself or other projects will close it
  // if other projects are clicked, it will cause description to appear below it
  if (description !== null) { // if description exists
    if (click.nextElementSibling !== description) { // if u click other projects
      lastClicked.style.height = "30vh";
      click.style.height = "45vh";
      click.parentNode.insertBefore(section, click.nextSibling);
    } else {
      click.style.height = "30vh";
      description.parentNode.removeChild(description);
    }
    //description.style.marginBottom = "0";
  // if description is not present, on clicked it'll appear beneath clicked element
  } else {
    //description.style.marginBottom = "4vh";
    click.style.height = "45vh";
    click.parentNode.insertBefore(section, click.nextSibling);
  }
  lastClicked = click;
  console.log("Last Clicked", lastClicked);
}
