// Get the box element
const box = document.getElementById("box");

// Function to change box size based on viewport
function resizeBox() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const boxSize = Math.min(viewportWidth, viewportHeight) * 0.2; // Adjust the size as needed
  box.style.width = boxSize + "px";
  box.style.height = boxSize + "px";
}

// Function to move the box randomly within the viewport
function moveBox() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;

  // Calculate the maximum position to avoid going outside the viewport
  const maxX = viewportWidth - boxWidth;
  const maxY = viewportHeight - boxHeight;

  // Generate random positions within the viewport
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply the new position to the box
  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}

// Resize the box initially and whenever the window is resized
window.addEventListener("resize", () => {
  resizeBox();
});

// Move the box when hovered over
box.addEventListener("mouseenter", () => {
  moveBox();
});

// Resize the box initially
resizeBox();
