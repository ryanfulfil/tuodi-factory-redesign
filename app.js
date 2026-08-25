// Scroll Reveal Animation Logic
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // observer.unobserve(entry.target); // Uncomment to only reveal once
      }
    });
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Initialize Canvas
  initEngineeringCanvas();
  
  // Initialize Scroll Jacking for Products
  initProductScroll();
});

// Minimalist Engineering Canvas (Radar/Sensor simulation)
function initEngineeringCanvas() {
  const canvas = document.getElementById('engineering-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = canvas.offsetWidth;
  let height = canvas.offsetHeight;
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  window.addEventListener('resize', () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  });

  let time = 0;
  const dots = [];
  for(let i=0; i<50; i++) {
    dots.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for(let x=0; x<width; x+=gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for(let y=0; y<height; y+=gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Update & Draw Dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    dots.forEach(dot => {
      dot.x += dot.vx;
      dot.y += dot.vy;
      if(dot.x < 0 || dot.x > width) dot.vx *= -1;
      if(dot.y < 0 || dot.y > height) dot.vy *= -1;
      
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI*2);
      ctx.fill();
    });

    // Connecting lines if close
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    for(let i=0; i<dots.length; i++) {
      for(let j=i+1; j<dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = dx*dx + dy*dy;
        if(dist < 10000) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }

    // Radar scan wave
    const centerX = width/2;
    const centerY = height/2;
    const radius = Math.min(width, height) * 0.4;
    
    time += 0.02;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, (time * 50) % radius, 0, Math.PI*2);
    ctx.stroke();

    requestAnimationFrame(render);
  }
  render();
}

// Product Scroll Logic
function initProductScroll() {
  const container = document.querySelector('.sticky-container');
  const sections = document.querySelectorAll('.product-scroll-section');
  const imageElement = document.getElementById('product-showcase-img');
  
  if (!container || !imageElement || sections.length === 0) return;

  const images = [
    "https://www.tuodi.com/static/upload/image/20240608/1717815887230502.jpg", // Cabinet light
    "https://www.tuodi.com/static/upload/image/20240608/1717817190641560.jpg", // Radar switch
    "https://www.tuodi.com/static/upload/image/20240608/1717815907758085.jpg", // Tap sensor
    "https://www.tuodi.com/static/upload/image/20240608/1717815915639912.jpg"  // Hotel switch
  ];

  window.addEventListener('scroll', () => {
    const rect = container.getBoundingClientRect();
    const scrollProgress = -rect.top / (rect.height - window.innerHeight);
    
    if (scrollProgress >= 0 && scrollProgress <= 1) {
      // Calculate which index we are at
      const index = Math.min(
        images.length - 1,
        Math.floor(scrollProgress * images.length)
      );
      
      // Update Image if changed
      if (imageElement.dataset.currentIndex != index) {
        imageElement.style.opacity = 0.2;
        setTimeout(() => {
          imageElement.src = images[index];
          imageElement.style.opacity = 1;
        }, 300);
        imageElement.dataset.currentIndex = index;
      }

      // Update text opacity
      sections.forEach((sec, i) => {
        const secProgress = (scrollProgress * images.length) - i;
        if (secProgress > -0.5 && secProgress < 1.5) {
          // It's in view
          const opacity = 1 - Math.abs(secProgress - 0.5) * 2;
          sec.style.opacity = Math.max(0, opacity);
          sec.style.transform = \`translateY(\${(1 - opacity) * 40}px)\`;
        } else {
          sec.style.opacity = 0;
        }
      });
    }
  });
}

// Modal handling
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.getElementById(id).classList.add('flex');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.getElementById(id).classList.remove('flex');
}
