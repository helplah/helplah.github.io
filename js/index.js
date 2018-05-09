let arrayLike = document.getElementsByClassName("projects__li");
let projects = Array.from(arrayLike);
console.log(projects);
projects.forEach(project => project.addEventListener("click", projectDetails));

function projectDetails(e) {
  e.preventDefault();
  const text = [""]
}
