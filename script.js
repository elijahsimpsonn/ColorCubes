let cubes = []; 

function setup() { 
    createCanvas(windowWidth, windowHeight); ;
}

function mousePressed() { 
    let cubeSides = random(10, 75); 
    let r = random(255); 
    let g = random(255); 
    let b = random(255); 
    let strw = random(1, 6);
    let newCube = new Cube(mouseX, mouseY, cubeSides, r, g, b, strw);
    cubes.push(newCube); 
}

function draw() { 
    background(0); 
    for (let i = 0; i < cubes.length; i++) { 
    cubes[i].move(); 
    cubes[i].display(); 
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); 
}

class Cube { 
    constructor(x, y, s, r, g, b, strw) { 
        this.x = x; 
        this.y = y; 
        this.s = s; 
        this.r = r; 
        this.g = g; 
        this.b = b; 
        this.strw = strw; 
    }
    move() { 
        this.x += random(-1, 1); 
        this.y += random(-1, 1); 
    }
    display() { 
        stroke(this.r,this.g,this.b);
        strokeWeight(this.strw); 
        noFill(); 
        square(this.x, this.y, this.s); 
    }
}
