document.addEventListener("DOMContentLoaded", () => {
  // ✅ header.html ko fetch karke inject karna
  fetch("/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // ✅ header load hone ke baad scripts initialize karna
      initHeaderScripts();
    })
    .catch((err) => console.error("Header load error:", err));
});

function initHeaderScripts() {
  // Desktop Services Toggle
  const servicesToggle = document.getElementById("servicesToggle");
  const servicesSubNav = document.getElementById("servicesSubNav");
  const resaleToggle = document.getElementById("resaleToggle");
  const resaleSubNav = document.getElementById("resaleSubNav");

  if (servicesToggle && servicesSubNav) {
    servicesToggle.addEventListener("click", (e) => {
      e.preventDefault();
      servicesSubNav.classList.toggle("d-none");
      if (!resaleSubNav.classList.contains("d-none")) {
        resaleSubNav.classList.add("d-none");
      }
    });
  }

  if (resaleToggle && resaleSubNav) {
    resaleToggle.addEventListener("click", (e) => {
      e.preventDefault();
      resaleSubNav.classList.toggle("d-none");
      if (!servicesSubNav.classList.contains("d-none")) {
        servicesSubNav.classList.add("d-none");
      }
    });
  }

  // ✅ Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("d-none");
    });
  }

  // ✅ Mobile Services Toggle
  const servicesToggleMobile = document.getElementById("servicesToggleMobile");
  const servicesSubNavMobile = document.getElementById("servicesSubNavMobile");
  const resaleToggleMobile = document.getElementById("resaleToggleMobile");
  const resaleSubNavMobile = document.getElementById("resaleSubNavMobile");

  if (servicesToggleMobile && servicesSubNavMobile) {
    servicesToggleMobile.addEventListener("click", (e) => {
      e.preventDefault();
      servicesSubNavMobile.classList.toggle("d-none");
      if (!resaleSubNavMobile.classList.contains("d-none")) {
        resaleSubNavMobile.classList.add("d-none");
      }
    });
  }

  if (resaleToggleMobile && resaleSubNavMobile) {
    resaleToggleMobile.addEventListener("click", (e) => {
      e.preventDefault();
      resaleSubNavMobile.classList.toggle("d-none");
      if (!servicesSubNavMobile.classList.contains("d-none")) {
        servicesSubNavMobile.classList.add("d-none");
      }
    });
  }
}
