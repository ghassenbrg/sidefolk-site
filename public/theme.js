// Follows the browser's light or dark until the visitor chooses. A choice is kept in this browser, and choosing
// what the browser already prefers goes back to following it.
(function () {
  var root = document.documentElement;
  var browser = window.matchMedia("(prefers-color-scheme: dark)");
  var stored = function (value) {
    try {
      if (value === undefined) return localStorage.getItem("theme");
      if (value) localStorage.setItem("theme", value); else localStorage.removeItem("theme");
    } catch (e) { return null; }
  };
  var preferred = function () { return browser.matches ? "dark" : "light"; };
  var current = function () { return root.dataset.theme || preferred(); };
  var apply = function (theme) {
    if (theme) root.dataset.theme = theme; else delete root.dataset.theme;
    stored(theme === undefined ? null : theme);
    show();
  };
  var ICONS = {
    dark: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
    light: '<path d="M20 14.2A8.3 8.3 0 0 1 9.8 4a8.3 8.3 0 1 0 10.2 10.2Z"/>'
  };
  function show() {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;
    var now = current();
    button.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[now] + "</svg>";
    button.setAttribute("aria-label", now === "dark" ? "Switch to light" : "Switch to dark");
    button.title = button.getAttribute("aria-label");
  }
  var saved = stored();
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  browser.addEventListener("change", show);
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;
    button.hidden = false;
    show();
    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      if (next === preferred()) { delete root.dataset.theme; stored(null); show(); } else { root.dataset.theme = next; stored(next); show(); }
    });
  });
})();
