const applyButton = document.querySelector("#applyButton");
const themeButton = document.querySelector("#themeButton");

applyButton.addEventListener("click", () => {
  applyButton.textContent = "Applied";
  applyButton.classList.add("applied");
  applyButton.disabled = true;
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const darkModeIsActive = document.body.classList.contains("dark-mode");

  if (darkModeIsActive) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});
