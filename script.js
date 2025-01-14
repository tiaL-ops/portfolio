// Select the grid and items
const grid = document.getElementById("myGrid");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");


grid.classList.add("initial");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      grid.classList.remove("initial");
      grid.classList.add("visible");
    }, 10); // 
  });



item4.addEventListener("click", () => {
  console.log("item4 clicked");

  if (grid.classList.contains("big")) {
    console.log("Big, reverting to normal layout");
    grid.classList.remove("big"); 
  } else {
    console.log("Expanding item4, shrinking others");
    grid.classList.add("big"); 
  }
});



function showProject(id) {
  const projectDetails = document.querySelectorAll('.project-detail');
  projectDetails.forEach(detail => detail.style.display = 'none');

  const project = document.getElementById(id);
  if (project) {
    project.style.display = 'block';
  }
}
