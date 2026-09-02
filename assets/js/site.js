/* Progressive enhancement: theme toggle + mobile nav. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* --- Theme ------------------------------------------------------------- */

  function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function resolvedTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* private mode */ }
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " theme");
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", function () {
      applyTheme(resolvedTheme() === "dark" ? "light" : "dark");
    });
    if (storedTheme()) applyTheme(storedTheme());
  }

  /* --- Mobile navigation -------------------------------------------------- */

  var navBtn = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-links");

  if (navBtn && navList) {
    var mobile = window.matchMedia("(max-width: 720px)");

    function sync() {
      if (mobile.matches) {
        navList.hidden = true;
        navBtn.setAttribute("aria-expanded", "false");
      } else {
        navList.hidden = false;
      }
    }

    navBtn.addEventListener("click", function () {
      var open = navBtn.getAttribute("aria-expanded") === "true";
      navBtn.setAttribute("aria-expanded", String(!open));
      navList.hidden = open;
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navBtn.getAttribute("aria-expanded") === "true") {
        navBtn.setAttribute("aria-expanded", "false");
        navList.hidden = true;
        navBtn.focus();
      }
    });

    sync();
    if (mobile.addEventListener) mobile.addEventListener("change", sync);
    else mobile.addListener(sync);
  }

  /* --- Footer year -------------------------------------------------------- */

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
