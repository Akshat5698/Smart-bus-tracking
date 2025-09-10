document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }

  // Toggle theme
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      themeBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});
