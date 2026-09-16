// LAUNCH DAY: paste the Mac App Store URL here; every Download button picks it up.
var APP_STORE_URL = "";

(function () {
  if (APP_STORE_URL) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-store]"), function (a) {
      a.href = APP_STORE_URL;
    });
  }

  // theme toggle, remembered for the visit only
  var root = document.documentElement, btn = document.getElementById("theme");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") === "dark" ||
                 (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
      root.setAttribute("data-theme", dark ? "light" : "dark");
      btn.textContent = dark ? "Dark" : "Light";
    });
  }

  var demo = document.getElementById("demo");
  if (demo) setTimeout(function () { demo.classList.add("lit"); }, 500);

  var targets = document.querySelectorAll("[data-reveal], .costs");
  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(targets, function (t) { t.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -10% 0px", threshold: .12 });
  Array.prototype.forEach.call(targets, function (t) { io.observe(t); });
})();
