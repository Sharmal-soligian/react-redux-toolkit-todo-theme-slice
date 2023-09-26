export const applyTheme = (theme) => {
  const body = document.body;

  if (theme === "dark") {
    body.classList.add("dark_theme");
    body.classList.remove("light_theme");
  } else {
    body.classList.add("light_theme");
    body.classList.remove("dark_theme");
  }
};
