// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
      }
    );
  });

// Add some interactive hover effects
document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

const subtitleEl = document.getElementById("subtitle");
const subtitles = ["I am a Web Developer", "I am a UI/UX Designer"];
let index = 0;

const roles = ["Web Developer", "UI/UX Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleSpan = document.getElementById("animated-role");

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
    roleSpan.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex++;
    roleSpan.textContent = currentRole.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1500); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed settings
}

typeEffect();

//Modal

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-modal");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;
  let currentImages = [];

  // Example images arrays for two projects
  const projectImages = [
    [
      "images/nearmed1.png",
      "images/nearmed2.png",
      "images/nearmed3.png",
      "images/nearmed4.png",
      "images/nearmed5.png",
    ],
    [
      "images/vetcinity1.png",
      "images/vetcinity2.png",
      "images/vetcinity3.png",
      "images/vetcinity4.png",
      "images/vetcinity5.png",
      "images/vetcinity6.png",
      "images/vetcinity7.png",
      "images/vetcinity8.png",
    ],
  ];

  // Attach click event on each project-image div inside .project-card
  console.log("Page loaded, modal display:", modal.style.display);

  document
    .querySelectorAll(".project-card .project-image")
    .forEach((imgDiv, index) => {
      imgDiv.style.cursor = "pointer";
      imgDiv.addEventListener("click", () => {
        console.log("Clicked project image", index);
        currentImages = projectImages[index] || [];
        if (currentImages.length === 0) return;

        currentIndex = 0;
        modal.style.display = "flex";
        modalImg.src = currentImages[currentIndex];
      });
    });

  // Close modal on close button click
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal if click outside the modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Previous image
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!currentImages.length) return;
    currentIndex =
      (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
  });

  // Next image
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!currentImages.length) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
  });
});

// Parallax effect for hero section
//window.addEventListener('scroll', function() {
//    const scrolled = window.pageYOffset;
//    const hero = document.querySelector('.hero');
//    if (hero) {
//        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//    }
//});
