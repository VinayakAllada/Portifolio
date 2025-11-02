document.documentElement.setAttribute("data-theme", "light");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  if (currentScroll > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 4px 20px var(--shadow)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.85)";
    navbar.style.boxShadow = "0 2px 10px var(--shadow)";
  }

  // Scroll button visibility
  if (currentScroll > 400) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }

  if (currentScroll < totalHeight - 400) {
    scrollBottomBtn.classList.add("visible");
  } else {
    scrollBottomBtn.classList.remove("visible");
  }

  lastScroll = currentScroll;
});

// The 'portfolioData' object is now loaded from 'data.js'
// We just assign it directly.
const data = portfolioData;

if (data && data.skills) {
  const skillsGrid = document.getElementById("skillsGrid");
  data.skills.forEach((skill, index) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card", "card");
    skillCard.setAttribute(
      "data-aos",
      index % 2 === 0 ? "fade-right" : "fade-left"
    );
    skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.5rem;">${skill.context}</p>
            <div class="skill-level">
                <div class="skill-progress" data-progress="${skill.level}"></div>
            </div>
        `;
    skillsGrid.appendChild(skillCard);
  });
}

if (data && data.projects) {
  const projectsGrid = document.getElementById("projectsGrid");
  data.projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card", "card");
    projectCard.setAttribute("data-aos", "fade-up");
    projectCard.innerHTML = `
            <div class="project-image">${project.icon}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    ${
                      project.liveLink !== "#"
                        ? `<a href="${project.liveLink}" target="_blank" class="project-link">Live Demo</a>`
                        : ""
                    }
                    <a href="${
                      project.sourceCode
                    }" target="_blank" class="project-link">Source Code</a>
                </div>
            </div>
        `;
    projectsGrid.appendChild(projectCard);
  });
}

if (data && data.education) {
  const timeline = document.getElementById("educationTimeline");
  data.education.forEach((edu) => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");
    timelineItem.innerHTML = `
            <div class="timeline-content card"> 
                <div class="timeline-date">${edu.date}</div>
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <p>${edu.description}</p>
            </div>
        `;
    timeline.appendChild(timelineItem);
  });
}

if (data && data.awards) {
  const awardsGrid = document.getElementById("awardsGrid");
  data.awards.forEach((award, index) => {
    const awardCard = document.createElement("div");
    awardCard.classList.add("award-card", "card");
    awardCard.setAttribute("data-aos", "zoom-in");
    awardCard.innerHTML = `
            <div class="award-icon">${award.icon}</div>
            <h3>${award.title}</h3>
            <div class="award-org">${award.organization}</div>
            <div class="award-date">${award.date}</div>
            <p>${award.description}</p>
        `;
    awardsGrid.appendChild(awardCard);
  });
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    timestamp: new Date().toISOString(),
  };
  const serializedFormData = JSON.stringify(formData);
  const existingMessages = localStorage.getItem("contactMessages");
  const messages = existingMessages ? JSON.parse(existingMessages) : [];
  messages.push(formData);
  localStorage.setItem("contactMessages", JSON.stringify(messages));
  console.log("Form submitted:", formData);
  console.log("Serialized data:", serializedFormData);
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

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

// --------- Part 2: Animations ---------
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
    }
  });
}, observerOptions);

function observeDynamicElements() {
  document.querySelectorAll("[data-aos]").forEach((element) => {
    observer.observe(element);
  });
}

function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target;
      }
    };
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statObserver.observe(stat);
  });
}

function animateSkillProgress() {
  const progressBars = document.querySelectorAll(".skill-progress");
  progressBars.forEach((bar) => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = bar.getAttribute("data-progress");
            bar.style.width = width + "%";
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    skillObserver.observe(bar);
  });
}

setTimeout(() => {
  animateStats();
  animateSkillProgress();
  observeDynamicElements();
}, 100);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  const moveX = (mouseX - window.innerWidth / 2) / 50;
  const moveY = (mouseY - window.innerHeight / 2) / 50;
  const rotatingCircle = document.querySelector(".rotating-circle");
  if (rotatingCircle) {
    rotatingCircle.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

function addCardHovers() {
  const cards = document.querySelectorAll(
    ".skill-card, .project-card, .award-card, .stat-item, .timeline-content, .hobby-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });
}

setTimeout(addCardHovers, 200);