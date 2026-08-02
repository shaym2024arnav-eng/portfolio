// Highlight the active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
});

// Terminal-style typing animation for the hero role text (Home page only)
function startTypingAnimation() {
  const el = document.getElementById("hero-role-text");
  if (!el) return;

  const roles = [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Information Science Student",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 30 : 60;

    if (!deleting && charIndex < currentRole.length) {
      el.textContent = currentRole.slice(0, charIndex + 1);
      charIndex++;
      setTimeout(tick, speed);
    } else if (!deleting && charIndex === currentRole.length) {
      setTimeout(() => {
        deleting = true;
        tick();
      }, 1500);
    } else if (deleting && charIndex > 0) {
      charIndex--;
      el.textContent = currentRole.slice(0, charIndex);
      setTimeout(tick, speed);
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(tick, 300);
    }
  }

  tick();
}

document.addEventListener("DOMContentLoaded", startTypingAnimation);

// Project filter logic (Projects page only)
function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectRows = document.querySelectorAll(".project-row");
  if (filterButtons.length === 0) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const tag = btn.dataset.tag;

      projectRows.forEach((row) => {
        const tags = row.dataset.tags.split(",");
        if (tag === "All" || tags.includes(tag)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initProjectFilter);

// Contact form: mailto fallback (no backend needed)
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

    window.location.href = `mailto:shaym2024arnav@gmail.com?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded", initContactForm);