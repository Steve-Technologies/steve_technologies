tsParticles.load({
    id: "tsparticles",
    options: {
      autoPlay: true,
      background: {
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1
      },
      backgroundMask: {
        composite: "destination-out",
        cover: { color: { value: "#fff" }, opacity: 1 },
        enable: false
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: true,
      duration: 0,
      fpsLimit: 30,
      interactivity: {
        detectsOn: "window",
        events: {
          onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 2, smooth: 10 }
          },
          resize: { delay: 0.5, enable: true }
        },
        modes: {
          trail: { delay: 1, pauseOnStop: false, quantity: 1 },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1
          },
          bounce: { distance: 200 },
          bubble: {
            distance: 400,
            duration: 2,
            mix: false,
            opacity: 0.8,
            size: 40,
            divs: { distance: 200, duration: 0.4, mix: false, selectors: [] }
          },
          connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
          grab: {
            distance: 100,
            links: { blink: false, consent: false, opacity: 1 }
          },
          push: { default: true, groups: [], quantity: 4 },
          remove: { quantity: 2 },
          repulse: {
            distance: 150,
            duration: 0.4,
            factor: 100,
            speed: 0.5,
            maxSpeed: 50,
            easing: "ease-out-quad"
          },
          slow: { factor: 3, radius: 200 },
          light: {
            area: {
              gradient: {
                start: { value: "#ffffff" },
                stop: { value: "#000000" }
              },
              radius: 1000
            },
            shadow: { color: { value: "#000000" }, length: 2000 }
          }
        }
      },
      manualParticles: [],
      particles: {
        bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
        collisions: {
          absorb: { speed: 2 },
          bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: { enable: true, retries: 0 }
        },
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            }
          }
        },
        effect: { close: true, fill: true, options: {}, type: [] },
        groups: {},
        move: {
          angle: { offset: 0, value: 90 },
          attract: { distance: 200, enable: false, rotate: { x: 3000, y: 3000 } },
          center: { x: 50, y: 50, mode: "percent", radius: 0 },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50
          },
          path: { clamp: true, delay: { value: 0 }, enable: false, options: {} },
          outModes: { default: "out" },
          random: false,
          size: false,
          speed: 2,
          spin: { acceleration: 0, enable: false },
          straight: false,
          trail: { enable: false, length: 10, fill: {} },
          vibrate: false,
          warp: false
        },
        number: {
          density: { enable: true, width: 1920, height: 1080 },
          limit: { mode: "delete", value: 0 },
          value: 30
        },
        opacity: {
          value: 1,
          animation: {
            count: 0,
            enable: false,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none"
          }
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: { value: "#000" },
          enable: false,
          offset: { x: 0, y: 0 }
        },
        shape: {
          close: true,
          fill: true,
          options: {
            image: [
              { name: "aws" },
              { name: "cloudflare" },
              { name: "cpp" },
              { name: "css" },
              { name: "dotnet" },
              { name: "facebook" },
              { name: "flask" },
              { name: "flutter" },
              { name: "github" },
              { name: "google_cloud" },
              { name: "html5" },
              { name: "ionic" },
              { name: "java" },
              { name: "javascript" },
              { name: "jquery" },
              { name: "laravel" },
              { name: "linkedin" },
              { name: "linux" },
              { name: "mongodb" },
              { name: "mysql" },
              { name: "nodejs" },
              { name: "opencv" },
              { name: "php" },
              { name: "python" },
              { name: "react" },
              { name: "rust" },
              { name: "selenium" },
              { name: "vscode" },
              { name: "webassembly" },
              { name: "Woocommerce" },
              { name: "Wordpress" },
              { name: "Xcode" },
            ]
          },
          type: "image"
        },
        size: {
          value: 30,
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none"
          }
        },
        stroke: { width: 0 },
        zIndex: { value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: { value: 3 },
            rate: { value: { min: 4, max: 9 } },
            sizeOffset: true
          }
        },
        roll: {
          darken: { enable: false, value: 0 },
          enable: false,
          enlighten: { enable: false, value: 0 },
          mode: "vertical",
          speed: 25
        },
        tilt: {
          value: 0,
          animation: { enable: false, speed: 0, decay: 0, sync: false },
          direction: "clockwise",
          enable: false
        },
        twinkle: {
          lines: { enable: false, frequency: 0.05, opacity: 1 },
          particles: { enable: false, frequency: 0.05, opacity: 1 }
        },
        wobble: { distance: 5, enable: false, speed: { angle: 50, move: 10 } },
        life: {
          count: 0,
          delay: { value: 0, sync: false },
          duration: { value: 0, sync: false }
        },
        rotate: {
          value: { min: 0, max: 360 },
          animation: { enable: true, speed: 5, decay: 0, sync: false },
          direction: "random",
          path: false
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false
          },
          enable: false,
          opacity: 1,
          rotation: { value: 45 },
          width: 1
        },
        links: {
          blink: false,
          color: { value: "#fff" },
          consent: false,
          distance: 100,
          enable: false,
          frequency: 1,
          opacity: 1,
          shadow: { blur: 5, color: { value: "#000" }, enable: false },
          triangles: { enable: false, frequency: 1 },
          width: 1,
          warp: false
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      name: "Images",
      preload: [
        {
          src: "./assets/tech-logos/AWS.svg",
          gif: false,
          height: 32,
          name: "aws",
          width: 32
        },
        {
          src: "./assets/tech-logos/Cloudflare.svg",
          gif: false,
          height: 32,
          name: "cloudflare",
          width: 32
        },
        {
          src: "./assets/tech-logos/CPP.svg",
          gif: false,
          height: 32,
          name: "cpp",
          width: 32
        },
        {
          src: "./assets/tech-logos/CSS3.svg",
          gif: false,
          height: 32,
          name: "css",
          width: 32
        },
        {
          src: "./assets/tech-logos/dotnet.svg",
          gif: false,
          height: 32,
          name: "dotnet",
          width: 32
        },
        {
          src: "./assets/tech-logos/Facebook.svg",
          gif: false,
          height: 32,
          name: "facebook",
          width: 32
        },
        {
          src: "./assets/tech-logos/Flask.svg",
          gif: false,
          height: 32,
          name: "lemon",
          width: 32
        },
        {
          src: "./assets/tech-logos/Flutter.svg",
          gif: false,
          height: 32,
          name: "flutter",
          width: 32
        },
        {
          src: "./assets/tech-logos/GitHub.svg",
          gif: false,
          height: 32,
          name: "github",
          width: 32
        },
        {
          src: "./assets/tech-logos/google_cloud.svg",
          gif: false,
          height: 32,
          name: "google_cloud",
          width: 32
        },
        {
          src: "./assets/tech-logos/HTML5.svg",
          gif: false,
          height: 32,
          name: "html",
          width: 32
        },
        {
          src: "./assets/tech-logos/Ionic.svg",
          gif: false,
          height: 32,
          name: "ionic",
          width: 32
        },
        {
          src: "./assets/tech-logos/Java.svg",
          gif: false,
          height: 32,
          name: "java",
          width: 32
        },
        {
          src: "./assets/tech-logos/JavaScript.svg",
          gif: false,
          height: 32,
          name: "javascript",
          width: 32
        },
        {
          src: "./assets/tech-logos/jQuery.svg",
          gif: false,
          height: 32,
          name: "jquery",
          width: 32
        },
        {
          src: "./assets/tech-logos/Laravel.svg",
          gif: false,
          height: 32,
          name: "laravel",
          width: 32
        },
        {
          src: "./assets/tech-logos/LinkedIn.svg",
          gif: false,
          height: 32,
          name: "linkedin",
          width: 32
        },
        {
          src: "./assets/tech-logos/Linux.svg",
          gif: false,
          height: 32,
          name: "linux",
          width: 32
        },
        {
          src: "./assets/tech-logos/MongoDB.svg",
          gif: false,
          height: 32,
          name: "mongodb",
          width: 32
        },
        {
          src: "./assets/tech-logos/MySQL.svg",
          gif: false,
          height: 32,
          name: "mysql",
          width: 32
        },
        {
          src: "./assets/tech-logos/Node.js.svg",
          gif: false,
          height: 32,
          name: "nodejs",
          width: 32
        },
        {
          src: "./assets/tech-logos/OpenCV.svg",
          gif: false,
          height: 32,
          name: "opencv",
          width: 32
        },
        {
          src: "./assets/tech-logos/PHP.svg",
          gif: false,
          height: 32,
          name: "php",
          width: 32
        },
        {
          src: "./assets/tech-logos/Python.svg",
          gif: false,
          height: 32,
          name: "python",
          width: 32
        },
        {
          src: "./assets/tech-logos/React.svg",
          gif: false,
          height: 32,
          name: "react",
          width: 32
        },
        {
          src: "./assets/tech-logos/Rust.svg",
          gif: false,
          height: 32,
          name: "rust",
          width: 32
        },
        {
          src: "./assets/tech-logos/Selenium.svg",
          gif: false,
          height: 32,
          name: "selenium",
          width: 32
        },
        {
          src: "./assets/tech-logos/VScode.svg",
          gif: false,
          height: 32,
          name: "vscode",
          width: 32
        },
        {
          src: "./assets/tech-logos/WebAssembly.svg",
          gif: false,
          height: 32,
          name: "webassembly",
          width: 32
        },
        {
          src: "./assets/tech-logos/WooCommerce.svg",
          gif: false,
          height: 32,
          name: "woocommerce",
          width: 32
        },
        {
          src: "./assets/tech-logos/WordPress.svg",
          gif: false,
          height: 32,
          name: "wordpress",
          width: 32
        },
        {
          src: "./assets/tech-logos/Xcode.svg",
          gif: false,
          height: 32,
          name: "xcode",
          width: 32
        },        
      ],
      motion: { disable: false, reduce: { factor: 4, value: true } }
    }
  });
  