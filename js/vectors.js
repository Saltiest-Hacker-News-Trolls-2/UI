p5.disableFriendlyErrors = true;

let canvasDiv, w, h, cnv, lastWidth;

function setup() {
  canvasDiv = document.getElementById("p5-container");
  w = canvasDiv.offsetWidth;
  h = canvasDiv.offsetHeight;
  cnv = createCanvas(w, h);
  cnv.parent("p5-container");
  pixelDensity(1);
}

function draw() {
  fill(0, 20);
  rect(0, 0, width, height);
  runBoids();

  lastWidth = width;
}

function windowResized() {
  w = canvasDiv.offsetWidth;
  h = canvasDiv.offsetHeight;
  resizeCanvas(w, h);
  background(0);
}

// BOIDS

let flock = [];
let num_boids = 100;

function runBoids() {
  if (flock.length < num_boids && frameCount % 2 === 0) {
    flock.push(new Boid());
  }

  for (let boid of flock) {
    boid.update();
    boid.edges();
    boid.lines(flock);
  }
}

class Boid {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.radius = random(3, 6);
    this.brightness = random(0, 255);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.01, 5));
    this.acceleration = createVector();
    this.maxSpeed = 10;
    this.perception = width > 1000 ? random(25, width / 8) : random(25, width/4);
    this.thickness = random(this.radius * 0.15, this.radius * 0.5);
    this.getsBrighter = true;
    this.getsBigger = true;
    this.maxRadius = random(6, 12);
    this.minRadius = random(1, 3);
  }

  edges() {
    if (this.position.x > width + this.radius) {
      this.position.x = 0;
    } else if (this.position.x < -this.radius) {
      this.position.x = width;
    }

    if (this.position.y > height + this.radius) {
      this.position.y = 0;
    } else if (this.position.y < -this.radius) {
      this.position.y = height;
    }
  }

  lines(boids) {
    stroke(osc(this.brightness, 255), osc(this.brightness, 255));
    strokeWeight(this.thickness);
    let perceptionRadius = this.perception;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      // check if surrounding boids are within "perceivable" range and that "other" is not "me"/"this"
      if (d < perceptionRadius && other != this) {
        rotate(radians(osc(this.brightness), 360));
        line(
          this.position.x,
          this.position.y,
          other.position.x,
          other.position.y
        );
      }
    }
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    if (width < 900 && width !== lastWidth) this.perception = random(25, width/4);
    this.acceleration.set(0, 0); // reset acceleration after each update
    this.radius = osc(this.brightness, 2);
    this.thickness = this.radius * 0.5;
  }
}

function osc(angle, scalar) {
  return abs(sin(radians(angle)) * scalar);
}
