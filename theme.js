/* AimCalc theme toggle. Dark is the default; light is remembered per browser.
   A one-line script in each page's <head> applies the saved choice before
   first paint, this file wires the button and swaps the screenshots. */
(function () {
  var KEY = "aimcalc-theme";
  var root = document.documentElement;

  function swapPath(path, light) {
    if (!path) return path;
    return light
      ? path.replace(/(^|\/)img\/(?!light\/)/, "$1img/light/")
      : path.replace(/(^|\/)img\/light\//, "$1img/");
  }

  function apply(light, persist) {
    if (light) root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");

    document.querySelectorAll("img[data-swap]").forEach(function (img) {
      var next = swapPath(img.getAttribute("src"), light);
      if (next !== img.getAttribute("src")) img.setAttribute("src", next);
    });
    document.querySelectorAll(".shot-link").forEach(function (link) {
      link.setAttribute("href", swapPath(link.getAttribute("href"), light));
    });
    document.querySelectorAll(".theme-toggle").forEach(function (button) {
      button.setAttribute("aria-pressed", light ? "true" : "false");
      button.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
      button.title = light ? "Dark mode" : "Light mode";
    });
    if (persist) {
      try { localStorage.setItem(KEY, light ? "light" : "dark"); } catch (e) {}
    }
  }

  apply(root.getAttribute("data-theme") === "light", false);

  document.querySelectorAll(".theme-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      apply(root.getAttribute("data-theme") !== "light", true);
    });
  });
})();
