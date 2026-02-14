document.addEventListener("DOMContentLoaded", function () {
  // year in footer
  const year = new Date().getFullYear();
  ["year", "yearService", "yearPortfolio", "yearAbout", "yearContact"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = year;
    },
  );

  // mobile nav
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => siteNav.classList.toggle("open"));
  }

  // highlight active nav link and set aria-current
  (function markActiveNav() {
    const links = document.querySelectorAll(".site-nav a");
    if (!links || links.length === 0) return;
    // Resolve current page file name (treat root / as index.html)
    const raw = location.pathname.split("/").pop();
    const current = raw === "" || raw === undefined ? "index.html" : raw;
    links.forEach((a) => {
      const href = a.getAttribute("href") || "";
      const hrefName = href.split("/").pop();
      if (
        hrefName === current ||
        (current === "index.html" && (href === "./" || href === "/"))
      ) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      } else {
        a.classList.remove("active");
        a.removeAttribute("aria-current");
      }
    });
  })();

  // progressive enhancement: add simple AJAX submit if Formspree is used
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      // if action points to formspree and Fetch is available, use ajax to avoid page reload
      const action = form.getAttribute("action") || "";
      if (action.includes("formspree.io") && window.fetch) {
        e.preventDefault();
        const data = new FormData(form);
        fetch(action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        })
          .then((res) => res.json())
          .then((json) => {
            alert("Thanks — I received your message.");
            form.reset();
          })
          .catch((err) => {
            alert(
              "Submission failed — please try again or email you@example.com",
            );
          });
      }
    });
  }

  const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", () => {

reveals.forEach((el) => {

const top = el.getBoundingClientRect().top

if (top < window.innerHeight - 100)

el.classList.add("active")

})

})

});
