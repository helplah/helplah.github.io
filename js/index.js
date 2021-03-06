document.addEventListener("DOMContentLoaded", yall);

new TypeIt('#hero__typewriter', {
  strings: ([`I have experience with HTML, SASS, Bootstrap, JavaScript, jQuery, React, Redux,`, 
    `Material-UI, Node.js, Express and MongoDB.`]),
  speed: 41,
  startDelay: 300,
  autoStart: true,
});

const arrayLike = document.getElementsByClassName("projects__li");
const projects = Array.from(arrayLike); // all projects
// console.log("All projects", projects);

// texts and links
const title = ["ShopLah (Shopping Cart)", "Flashcard App", "Tribute Page", "Twitch TV", "React Wikipedia", "React Quote Machine"];
const intro = [
  `Retrieves and displays products from Express API. Users must log in to add, remove products and change item quantity. 
    When user logins, retrieve added products from database. Limits access to cart, profile and checkout page to logged in users. 
    Displays and tallies the total quantity and price.`,
  `Created during Chingu Voyage, a collaborative environment where hundreds of people build projects together to learn. 
    It allows users to create a topic, insert questions and answers. 
    Users can only add card or delete from the topic they created, but they can study all the existing topics (even if they didn't create it).`,
  `Built as a tribute to Elon Musk with a timeline of his life. 
    I chose Elon Musk because I admire and respect his tenacity, work ethics and drive towards serial entrepreneurship. 
    Most importantly, I'm impressed and inspired by his motivation for doing all these things - he truly believes in building a better world.`,
  `Tracks twitch streamers and shows what they're streaming if they're online. Allows user to filter based on status.`,
  `Searches the typed word at Wikipedia and returns the top 10 results. 
    When you click on any of the results, it directs you to the said result.`, 
  `Generates a new design quote when it's clicked. Allows user to tweet said quote.`
];
const accomplishments = [
  ["Created REST API endpoint", "Tested /GET routes", "React, Redux and Material-UI front-end", 
    "Node.js and MongoDB back-end", "User authentication with passport.js, passport-auth0 and express-session", "Responsive and mobile friendly", 
    "Deployed to Heroku successfully"],
  ["React and Redux front-end", "Node.js and Express back-end", "Practised Git and did my first PR", "Made it responsive using media queries and refactoring CSS", 
    "Used table and grid for layout"],
  ["Responsive and mobile friendly", "Responsive image", "Refactored CSS to SCSS"],
  ["Responsive and mobile friendly", "Consumed Twitch API", "jQuery for event handling", "Bootstrap"],
  ["Create React App boilerplate", "Responsive and mobile friendly", "Wikipedia OpenSearch", "Used CSS grid for layout"],
  ["Create React App boilerplate", "Responsive and mobile friendly", "Consumed Quotes on Design API", "Used ES6 JavaScript and fetch"]
];
const projectsLink = [
  "https://jenlky-shopping-cart.herokuapp.com/",
  "https://shrouded-taiga-52624.herokuapp.com/",
  "/tribute-page",
  "/twitch-tv",
  "/react-wikipedia",
  "/react-quote-machine"
];
const projectsSource = [
  "https://github.com/helplah/shopping-cart",
  "https://github.com/chingu-voyage4/Bears-Team-9",
  "https://github.com/helplah/tribute-page",
  "https://github.com/helplah/twitch-tv",
  "https://github.com/helplah/react-wikipedia",
  "https://github.com/helplah/react-quote-machine"
];
const projectsList = [];
for (let x = 0; x < 6; x++) {
  projectsList.push([`${"projects__li" + x}`]);
}

const sectionProjects = document.getElementById("projects"); 
const flexbox = document.querySelector(".projects__flexbox");
const section = document.createElement("section"); // section contains description of project
section.className = "container"; // add class container and id projects__description to section
section.id = "projects__description";

const carousel = document.getElementById("carouselMain");
changeSection(0, section);
sectionProjects.append(section);

// it only works for the first slide
/* carousel.addEventListener("slide.bs.carousel", function(e) {
  let curClass = e.relatedTarget.id;
  let curIndex = curClass[curClass.length-1];
  console.log("Index", curIndex);

  //section.parentNode.removeChild(section);
  changeSection(curIndex, section);
  sectionProjects.append(section);
});
*/

$("#carouselMain").on('slide.bs.carousel', function(e) {
  let curClass = e.relatedTarget.id;
  let curIndex = curClass[curClass.length-1];
  // console.log("Index", curIndex);

  //section.parentNode.removeChild(section);
  changeSection(curIndex, section);
  sectionProjects.append(section);
});

if (window.innerWidth < 992) {
  carousel.classList.remove("container");
} 

function changeSection(index, section) {  
  // multidimensional array that contains a list of accomplishments
  let li = "";
  for (let x = 0; x < accomplishments[index].length; x++) {
    li += `<li>${accomplishments[index][x]}</li>`;
  }

  section.innerHTML = `<div>
    <h3>${title[index]}</h3>
    <p>${intro[index]}</p>
    <hr class="projects__hr">
    <h3>Accomplishments</h3>
    <ul>${li}</ul>
    <br>
    <div class="projects__url">
      <a href="${projectsLink[index]}" class="projects__links" target="_blank" rel="noopener" alt="Project link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>
        </svg>
      </a>
      <a href="${projectsSource[index]}" class="projects__links" target="_blank" rel="noopener" alt="Open project">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
      </a>
    </div>
  </div>`;
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