document.getElementById("menu_icon").addEventListener("click", toggleMenu);
    
  function toggleMenu() {

    const popoutMenu = document.getElementById("popout_menu");
    const menuIcon = document.getElementById("menu_icon");
    const footer = document.querySelector("footer");
    const body = document.body;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1250) {

      if (popoutMenu.style.left === "100%") {
        
        popoutMenu.style.left = "0%";
        menuIcon.classList.add("fa-times");
        menuIcon.classList.remove("fa-bars");
        footer.classList.add("sticky_footer");
        body.classList.add("noscroll");
        popoutMenu.scrollTop(0);


      }
      
      else {

        popoutMenu.style.left = "100%";
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
        footer.classList.remove("sticky_footer");
        body.classList.remove("noscroll");

      }
    }
  }