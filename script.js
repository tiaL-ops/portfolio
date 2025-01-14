// Select the grid and items
const grid = document.getElementById("myGrid");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");


grid.classList.add("initial");

// Add a click event listener to item2
item5.addEventListener("mouseenter", () => {
  grid.classList.remove("initial");
  grid.classList.add("visible");
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


document.addEventListener("DOMContentLoaded", () => {
    const item2 = document.getElementById("item2");

    if (item2) { 
        // Create the overlay element
        const overlay = document.createElement("div");
        overlay.classList.add("hover-overlay");
        overlay.textContent = "Hovered Text";

        // Style the overlay
        Object.assign(overlay.style, {
            position: "absolute",       
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: "0",             
            transition: "opacity 0.3s ease",
            pointerEvents: "none"    
        });

      
        item2.style.position = "relative";
        item2.appendChild(overlay);

        // Add hover effect
        item2.addEventListener("mouseenter", () => {
            overlay.style.opacity = "1"; 
        });

        item2.addEventListener("mouseleave", () => {
            overlay.style.opacity = "0"; 
        });
    }
});