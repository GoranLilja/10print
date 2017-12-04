function setup() {
  createCanvas(windowWidth, windowHeight)
  background(51)
  stroke(200)
  noFill()
}

let cellSize = 20
let x = 0
let y = 0

function draw() {
  if (x >= width) {
    x = 0
    y += cellSize
  }
  if (y >= height) {
    x = 0
    y = 0
    background(51)
  }

  if (floor(random(0, 2)) == 1) { // \
    line(x, y, x+cellSize, y+cellSize)
  } else { // /
    line(x+cellSize, y, x, y+cellSize)
  }

  x += cellSize
}

function restart(newCellSize = 10) {
  cellSize = newCellSize
  background(51)
  x = 0
  y = 0
}