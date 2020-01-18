document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location);
  const theme = url.searchParams.get("theme");
  document.body.classList.add(theme);

  document.body.addEventListener("click", () => {
    const theme = event.target.dataset.theme;
    if (theme) {
      window.location = `${window.location.origin}?theme=${theme}`;
    }
  });
});
