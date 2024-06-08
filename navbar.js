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