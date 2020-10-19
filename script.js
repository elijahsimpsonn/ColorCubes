let dancingSquare = {  //This is my variable that is holding all of the values and functionality of the dancing square on the screen.
    x: 300, //Set the x var to a value of 300
    y: 200, //Set the y var to a vaule of 200
    display: function() { //declare a function for how the square displays
        stroke(255); //p5.js function for the color of the outline of the square (rgb)
        strokeWeight(4); //p5.js function for the pixel width of the outline of the square
        noFill(); //p5.js function that leaves the inside color of the square empty
        square(this.x, this.y, 50) //p5.js function that creates a square with (x-axis position, y-axis position, side size). Using 'this'.
    },
    move: function() { //declare a function for how the square moves
        this.x = this.x + random(-1, 1); //this states that this.x is now equal to itself plus a random position between -1 and 1
        this.y = this.y + random(-1, 1); //this states that this.y is now equal to itself plus a random position between -1 and 1
    }
}

function setup() { //p5.js function to set up the program
    createCanvas(600, 400); //p5.js function to define a canvas width and height
}

function draw() { //p5.js loop function to show things on canvas 
    background(0); //p5.js function that sets the background color for the canvas (rgb)
    dancingSquare.move(); //calling the move function in the dancingSquare variable
    dancingSquare.display(); //calling the display function in the dancingSquare variable
}