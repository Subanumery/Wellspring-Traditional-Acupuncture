fetch("header.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("header").innerHTML = data;
        document.getElementById("menu_icon").addEventListener("click", toggleMenu);

    })

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      
        document.getElementById("footer").innerHTML = data;

    })

fetch("head.html")
    .then(response => response.text())
    .then(data => {
      
        document.getElementById("head").innerHTML = data;

    })
    
function toggleMenu() {

    const popoutMenu = document.getElementById("popout_menu");
    const popoutMenuContent = document.getElementById("popout_menu_content");
    const menuIcon = document.getElementById("menu_icon");
    const footer = document.querySelector("footer");
    const contactButton = document.getElementById("footer_contact_button")
    const body = document.body;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1300) {

        if (popoutMenu.style.left === "100%") {

            popoutMenu.style.left = "0%";
            menuIcon.classList.add("fa-times");
            menuIcon.classList.remove("fa-bars");
            footer.classList.add("sticky_footer");
            contactButton.classList.add("noshow");
            body.classList.add("noscroll");

            popoutMenuContent.scrollTop = 0;

        }
        
        else {

            popoutMenu.style.left = "100%";
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-times");
            footer.classList.remove("sticky_footer");
            body.classList.remove("noscroll");
            contactButton.classList.remove("noshow");

        }
    }
}

function clipboardCopy(elm_id) {

    navigator.clipboard.writeText(elm_id.textContent.trim());

    const originalText = elm_id.textContent;
    elm_id.textContent = "copied";

    setTimeout(() => {
        elm_id.textContent = originalText;
    }, 1000);
}