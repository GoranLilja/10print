// The size of the cell where the lines are drawn.
let cellSize = 20

// The current x position. This will increase by cellSize after drawing the lines to move horizontally.
let x = 0

// The current y position. This will increase by cellSize after drawing a complete row of lines, to move vertically.
let y = 0

// Set everything up before we start drawing.
function setup() {
  // Create a canvas at the size of the current browser window.
  createCanvas(windowWidth, windowHeight)

  // Set the background to light grey.
  // This is the same as background(51, 51, 51)
  background(51)

  // Set the stroke color, i.e. the color of the lines.
  // This is the same as background(200, 200, 200)
  stroke(200) 

  // We don't want to fill any shapes.
  noFill()
}

// Let's start drawing!
function draw() {
  // If we've already drawn the whole line, we want to start over on the next line.
  if (x >= width) {
    // Reset the x position to the far left.
    x = 0
    // Increase the y position to go down by cellSize.
    y += cellSize
  }

  // If we've already drawn the complete window, we start over.
  if (y >= height) {
    // Set the x position to the far left.
    x = 0
    // Set the y position to the top of the window.
    y = 0

    // Fill the window with the light grey color again to clear the canvas.
    background(51)
  }

  // Generate a random number between 0 and 1.
  let randomNumber = floor(random(0, 2))

  // If the number is 1, draw a line from (x, y) to (x+cellSize, y+cellSize). (Back slash)
  if (randomNumber == 1) { // \
    line(x, y, x+cellSize, y+cellSize)
  }
  // Else, draw a line from (x+cellSize, y) to (x, y+cellSize). (Forward slash)
  else { // /
    line(x+cellSize, y, x, y+cellSize)
  }

  // Now that we're done with the actual drawing, let's increase the x position before drawing the next line.
  x += cellSize

  // At this point, the draw() function is called again, in an infinite loop.
}

// Let's be able to restart the drawing with a new cell size.
// This function can be called like this: 
// restart(), which will use the cell size of 10, or
// restart(20), which will use the cell size of 20
function restart(newCellSize = 10) {
  // Set the new cell size to the one passed into the function.
  cellSize = newCellSize

  // Clear the canvas by filling it with the light grey color.
  background(51)

  // Reset the x position to the far left.
  x = 0

  // Reset the y position to the top of the window.
  y = 0
}