
let opera = "red"
let opa = "#FFEB3B"
let grape = "#FF9800"
let size = 1
let sizeA = 2
let sizeB = 3

function setup() {
  createCanvas(600, 600);
  noStroke()
}

function draw() {
  background("white");


  myShape(mouseX,mouseY,size)
  size += 1
  myShape(mouseX,mouseY,sizeA)
 sizeA += 2
  myShape(mouseX,mouseY,sizeB)
  sizeB += 3
 myShape(random(width), random(height), size, sizeA,sizeB)
               
}
function myShape(x,y,r) {
  fill(opera)
  circle(x,y,r)
  fill(opa)


  square(x-r/sqrt(2)/2, y-r/sqrt(2)/2,r/sqrt(2))
  fill(grape)
  ellipse(mouseX,mouseY,size)
 
}

