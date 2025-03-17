let modal = document.getElementById("main-modal");
let modalImage = document.getElementById("main-modal-image")

const collection = document.getElementsByClassName("gallery-media")

console.log(collection.length)

/*
for (let i = 0; i < collection.length; i++){
    collection[i].onclick= function (){
        SetModal(collection[i].src)
    }
}
 */

let directQuery = document.querySelectorAll('[direct]');

for (let i = 0; i < directQuery.length; i++) {
    directQuery[i].onclick = function () {
        window.open(directQuery[i].getAttribute('direct'));
    }
}

let galleryButtons = document.getElementsByClassName('gallery-button')

for (let i = 0; i < galleryButtons.length; i++) {
    console.log("ZAA")
    galleryButtons[i].onclick = function (){window.open('ProjectGallery.html')}
}

/*modal*/
function SetModal(imgsrc, modaltype = 'img'){
    modal.style.display = "flex";
    
    let newModal = document.createElement(modaltype);
    newModal.className = modalImage.className;
    newModal.src = imgsrc;
    modalImage.parentElement.insertBefore(newModal,modalImage.parentElement.firstElementChild);
    
    modalImage.remove();
    modalImage = newModal;
}

modal.onclick = closeModal;
modalImage.onclick = closeModal;

const collection2 = document.getElementsByClassName("close")

for (let i = 0; i < collection2.length; i++){
    collection2[i].onclick = closeModal();
}

function closeModal(){
    modal.style.display = "none";
}

/*

onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

function GetMouseDistance(objectPosition,mousePosition)
{
    objectPosition.x
}

 */

//particles

// Create an array to store our particles
var particles = [];

// The amount of particles to render
var particleCount = 30;

// The maximum velocity in each direction
var maxVelocity = 0.3;

// The target frames per second (how often do we want to update / redraw the scene)
var targetFPS = 30;

// Set the dimensions of the canvas as variables so they can be used.
var canvasWidth = 400;
var canvasHeight = 250;

// Create an image object (only need one instance)
var imageObj = new Image();

// Once the image has been downloaded then set the image on all of the particles
imageObj.onload = function() {
    particles.forEach(function(particle) {
        particle.setImage(imageObj);
    });
};


// Once the callback is arranged then set the source of the image
imageObj.src = "https://clipart-library.com/img/1887240.png";

// A function to create a particle object.
function Particle(context) {

    // Set the initial x and y positions
    this.x = 0;
    this.y = 0;

    // Set the initial velocity
    this.xVelocity = 5;
    this.yVelocity = 5;

    // Set the radius
    this.radius = 5;

    // Store the context which will be used to draw the particle
    this.context = context;

    // The function to draw the particle on the canvas.
    this.draw = function() {

        // If an image is set draw it
        if(this.image){
          
            let newAlpha = (this.y - 200) * 0.05;
            this.context.beginPath()
            //this.context.fillStyle = "red";
            //this.context.fillRect(this.x-128,this.y-128,128,128);
            this.context.globalAlpha = Math.max(0,Math.min(newAlpha,0.5));
            if(newAlpha <= 0){
                this.y = canvasHeight;
            }
            this.context.drawImage(this.image, this.x-128, this.y-128,128,128);
            
            this.context.globalAlpha = 0.5;
            
            
            this.context.closePath()
            // If the image is being rendered do not draw the circle so break out of the draw function           
 
            return;
        }
        // Draw the circle as before, with the addition of using the position and the radius from this object.
        
    };

    // Update the particle.
    this.update = function() {
        // Update the position of the particle with the addition of the velocity.
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        // Check if has crossed the right edge
        if (this.x >= canvasWidth) {
            this.xVelocity = -this.xVelocity;
            this.x = canvasWidth;
        }
        // Check if has crossed the left edge
        else if (this.x <= 0) {
            this.xVelocity = -this.xVelocity;
            this.x = 0;
        }

        // Check if has crossed the bottom edge
        if (this.y >= canvasHeight) {
            this.yVelocity = -this.yVelocity;
            this.y = canvasHeight;
        }

        // Check if has crossed the top edge
        else if (this.y <= 0) {
            this.yVelocity = maxVelocity;
            this.y = canvasHeight;
        }
    };

    // A function to set the position of the particle.
    this.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
    };

    // Function to set the velocity.
    this.setVelocity = function(x, y) {
        this.xVelocity = x;
        this.yVelocity = y;
    };

    this.setImage = function(image){
        this.image = image;
    }
}

// A function to generate a random number between 2 values
function generateRandom(min, max){
    return Math.random() * (max - min) + min;
}

// The canvas context if it is defined.
var context;

// Initialise the scene and set the context if possible
function init() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {

        // Set the context variable so it can be re-used
        context = canvas.getContext('2d');

        // Create the particles and set their initial positions and velocities
        for(var i=0; i < particleCount; ++i){
            var particle = new Particle(context);

            // Set the position to be inside the canvas bounds
            particle.setPosition(generateRandom(0, canvasWidth), generateRandom(canvasHeight, canvasHeight));

            // Set the initial velocity to be either random and either negative or positive
            particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
            particles.push(particle);
        }
    }
    else {
        alert("Please use a modern browser");
    }
}

// The function to draw the scene
function draw() {
    // Clear the drawing surface and fill it with a black background
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    // Go through all of the particles and draw them.
    particles.forEach(function(particle) {
        particle.draw();
    });
}

// Update the scene
function update() {
    particles.forEach(function(particle) {
        particle.update();
    });
}

// Initialize the scene
init();

// If the context is set then we can draw the scene (if not then the browser does not support canvas)
if (context) {
    setInterval(function() {
        // Update the scene befoe drawing
        update();

        // Draw the scene
        draw();
    }, 1000 / targetFPS);
}