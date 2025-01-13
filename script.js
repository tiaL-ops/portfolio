// Select the grid and items
const grid = document.getElementById("myGrid");
const item4 = document.getElementById("item4");
const item2 = document.getElementById("item2");


grid.classList.add("initial");

// Add a click event listener to item2
item2.addEventListener("click", () => {
  grid.classList.remove("initial");
  grid.classList.add("visible");
});


// Add a click event listener to item4
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
