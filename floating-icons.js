class FloatingIcons {
  constructor(containerSelector, icons) {
    this.container = document.querySelector(containerSelector);
    this.icons = [...new Set(icons)]; // Ensure unique icons in the array
    this.particlesArray = [];
    this.fixedSize = 40; // Fixed size for all icons
    this.minSpeed = 0.5; // Minimum speed for particles

    if (!this.container) {
      console.error(`Container ${containerSelector} not found.`);
      return;
    }

    this.createCanvas();
    this.initParticles();
    this.animate();
    window.addEventListener("resize", this.resizeCanvas.bind(this));

    // Use will-change for optimization on container
    this.container.style.willChange = "transform, opacity";
  }

  // Create a canvas element
  createCanvas() {
    this.canvas = document.createElement("canvas");
    this.canvas.className = "canvas-container";
    this.ctx = this.canvas.getContext("2d");
    this.container.appendChild(this.canvas);

    // Set canvas size
    this.resizeCanvas();
  }

  // Resize canvas to match container
  resizeCanvas() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;

    // Adjust particles to canvas size but do not reinitialize
    this.particlesArray.forEach((particle) => {
      particle.x = Math.random() * (this.canvas.width - this.fixedSize);
      particle.y = Math.random() * (this.canvas.height - this.fixedSize);
    });
  }

  // Initialize particles
  initParticles() {
    this.particlesArray = [];
    const shuffledIcons = this.shuffle([...this.icons]); // Shuffle icons for randomness

    shuffledIcons.forEach((imageSrc) => {
      const x = Math.random() * (this.canvas.width - this.fixedSize);
      const y = Math.random() * (this.canvas.height - this.fixedSize);
      const dx = this.randomSpeed(); // Get random speed for horizontal velocity
      const dy = this.randomSpeed(); // Get random speed for vertical velocity
      const dAngle = (Math.random() - 0.5) * 0.05; // Random angular velocity

      const particle = new this.Particle(
        x,
        y,
        dx,
        dy,
        imageSrc,
        this.fixedSize,
        dAngle
      );
      particle.image.onload = () => {
        this.particlesArray.push(particle);
      };
    });
  }

  // Helper: Generate random speed with a minimum value
  randomSpeed() {
    const speed = (Math.random() - 0.5) * 2; // Random value between -1 and 1
    return Math.abs(speed) < this.minSpeed
      ? speed < 0
        ? -this.minSpeed
        : this.minSpeed
      : speed;
  }

  // Shuffle array to ensure randomness
  shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  // Particle class (inner class)
  Particle = class {
    constructor(x, y, dx, dy, imageSrc, size, dAngle) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.dAngle = dAngle; // Angular velocity
      this.angle = Math.random() * Math.PI * 2; // Initial rotation angle
      this.size = size;
      this.image = new Image();
      this.image.src = imageSrc;
    }

    draw(ctx) {
      if (this.image.complete && this.image.naturalWidth > 0) {
        ctx.save(); // Save the canvas state
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2); // Move origin to particle center
        ctx.rotate(this.angle); // Apply rotation
        ctx.drawImage(
          this.image,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        ); // Draw rotated image
        ctx.restore(); // Restore canvas state
      }
    }

    update(canvasWidth, canvasHeight) {
      this.x += this.dx;
      this.y += this.dy;
      this.angle += this.dAngle; // Update rotation angle

      // Bounce off walls
      if (this.x < 0 || this.x + this.size > canvasWidth) this.dx *= -1;
      if (this.y < 0 || this.y + this.size > canvasHeight) this.dy *= -1;
    }
  };

  // Animate particles with requestAnimationFrame
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particlesArray.forEach((particle) => {
      particle.update(this.canvas.width, this.canvas.height);
      particle.draw(this.ctx);
    });
    requestAnimationFrame(this.animate.bind(this)); // Keep it running smoothly
  }
}
