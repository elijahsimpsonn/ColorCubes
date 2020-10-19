let cubes = []; //Declaring a new variable called cubes that holds a empty array

function setup() { //p5.js function that sets up the program
    createCanvas(windowWidth, windowHeight); //p5.js function that creates the canavs and sets it to be === to the width and height of the browser window;
}

function mousePressed() { //p5.js event function that works when the mouse is pressed
    let cubeSides = random(10, 75); //varible using the p5.js function random to set the cube sides to a random number bewtween 10 and 75
    let r = random(255); //varible using the p5.js function random to set the cube red color value to a random number bewtween 0 and 255
    let g = random(255); //varible using the p5.js function random to set the cube green color value to a random number bewtween 0 and 255
    let b = random(255); //varible using the p5.js function random to set the cube blue color value to a random number bewtween 0 and 255
    let strw = random(1, 6); //varible using the p5.js function random to set the cube line width value to a random number bewtween 1 and 6
    let newCube = new Cube(mouseX, mouseY, cubeSides, r, g, b, strw); //varibile that calls on the class Cube to create a new instance of cube with an x and y 
    //coordinate of the mouse click location and a side of the newCube variable value as well as the colors of the cube and the pixel width of the cube lines
    cubes.push(newCube); //pushes this new instance to the cubes array
}

function draw() { //p5.js loop function draw that lets the program draw things on the canvas
    background(0); //p5.js function that is setting the background color (rgb)
    for (let i = 0; i < cubes.length; i++) { //for loop that is going over the cubes array 
    cubes[i].move(); //calling the move function from the Cube class for the current indexed element in the cubes array
    cubes[i].display(); //calling the display function from the Cube class for the current indexed element in the cubes array
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); //p5.js function that always resizes the canvas to === the browser window
}

class Cube { //Cube class which defines what a cube is
    constructor(x, y, s, r, g, b, strw) { //required class function constructor which takes in three parameters
        this.x = x; //setting the this.x to whatever the x parameter arguement is
        this.y = y; //setting the this.y to whatever the y parameter arguement is
        this.s = s; //setting the this.s to whatever the s parameter arguement is
        this.r = r; //setting the this.s to whatever the r parameter arguement is
        this.g = g; //setting the this.s to whatever the g parameter arguement is
        this.b = b; //setting the this.s to whatever the b parameter arguement is
        this.strw = strw; //setting the this.strw to whatever the strw parameter arguement is
    }
    move() { //function that determines how each cube will move
        this.x += random(-1, 1); //this sets the value of this.x to itself plus a random number between -1 and 1
        this.y += random(-1, 1); //this sets the value of this.y to itself plus a random number between -1 and 1
    }
    display() { //function that determines how each cube will be look
        stroke(this.r,this.g,this.b); //p5.js function that sets the color of the outline of each cube (rgb) depending on the arguements passed to the constructor function
        strokeWeight(this.strw); //p5.js function that sets the pixel width of the outline of each cube depending on the arguements passed to the constructor function
        noFill(); //p5.js function that sets the inside color of the cube to be empty
        square(this.x, this.y, this.s); //p5.js function that draws a square (x coordinate, y coordinate, side size) depending on the arguements passed to the constructor function
    }
}
