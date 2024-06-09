document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-component");
  const sidemenu = document.getElementById("global-sidemenu");
  const closeBtn = document.querySelector(".sidebar__close");

  hamburger.addEventListener("click", function () {
    sidemenu.classList.toggle("open");
  });

  closeBtn.addEventListener("click", function () {
    sidemenu.classList.remove("open");
  });

  document.addEventListener("click", function (event) {
    if (!sidemenu.contains(event.target) && !hamburger.contains(event.target)) {
      sidemenu.classList.remove("open");
    }
  });
});

function getSideMenu() {
  return document.querySelector("body > div.sidemenu");
}

function sideMenuHide(instant) {
  var sideMenu = getSideMenu();
  if (!sideMenu || !sideMenu.classList.contains("visible")) {
    return;
  }
  sideMenu.classList.remove("visible");
  sideMenu.dispatchEvent(
    new CustomEvent("lpui-hide", {
      detail: {
        instant: !!instant,
      },
    })
  );
  window.dispatchEvent(
    new CustomEvent("lpui-sidemenu-hide", {
      detail: {
        instant: !!instant,
      },
    })
  );
}

function sideMenuShow() {
  var sideMenu = getSideMenu();
  if (!sideMenu || sideMenu.classList.contains("visible")) {
    return;
  }
  sideMenu.classList.add("visible");
  sideMenu.dispatchEvent(new Event("lpui-show"));
  window.dispatchEvent(new Event("lpui-sidemenu-show"));
}

function sideMenuToggle() {
  var sideMenu = getSideMenu();
  if (!sideMenu) {
    return;
  }
  var isSideMenuVisible = sideMenu.classList.contains("visible");
  if (isSideMenuVisible) {
    sideMenuHide();
  } else {
    sideMenuShow();
  }
}

// services animation
const square = document.querySelector(".animation");
square.classList.remove("animation-transition");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square.classList.add("animation-transition");
      return;
    }

    square.classList.remove("animation-transition");
  });
});

observer.observe(document.querySelector(".animation-wrapper"));

// cred animation
const cred = document.querySelector(".animation-cred");
cred.classList.remove("animation-transition-cred");

const observerCred = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cred.classList.add("animation-transition-cred");
      return;
    }

    cred.classList.remove("animation-transition-cred");
  });
});

observerCred.observe(document.querySelector(".animation-wrapper-cred"));

// market animation
const market = document.querySelector(".animation-market");
market.classList.remove("animation-transition-market");

const observerMarket = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      market.classList.add("animation-transition-market");
      return;
    }

    market.classList.remove("animation-transition-market");
  });
});

observerMarket.observe(document.querySelector(".animation-wrapper-market"));
