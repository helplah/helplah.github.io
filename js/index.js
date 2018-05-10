const arrayLike = document.getElementsByClassName("projects__li");
const projects = Array.from(arrayLike);
console.log(projects);
projects.forEach(project => project.addEventListener("click", showDetails));

const array = ["flashcard", "tribute-page", "twitch-tv", "react-wikipedia", "react-quote-machine"];

const intro = ["Flashcard App", `Created during Chingu Voyage, a collaborative environment where hundreds of people build projects together to learn. The app allows users to create a topic, insert questions and answers.`];

const description = ["a", "talk cock", "sing song"];

let moreInfo = document.createElement("section");
moreInfo.className = "container";

function showDetails(e) {
  e.preventDefault();
  console.log(e);

  // e.path[2] = clicked project object
  let otherProjects = projects.filter(project => project !== e.path[2]);
  console.log(otherProjects);

  for (let x = 0; x < otherProjects.length; x++) {
    // remove projects__li* and projects__flex, * being 0-4, to allow clicked project to expand
    let projectsFlex = otherProjects[x].classList[2];
    let projectsListNo = otherProjects[x].classList[1];

    otherProjects.forEach(project => {
      project.classList.remove(projectsFlex, projectsListNo);
    });
  }
  // remove projects__flex class from clicked project
  e.path[2].classList.remove("projects__flex");
  let projectsUl = document.getElementsByClassName("projects__flexbox")[0];
  console.log(projectsUl);
  projectsUl.appendChild("moreInfo");
}
