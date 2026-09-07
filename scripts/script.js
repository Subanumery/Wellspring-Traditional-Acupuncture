fetch("head.html")
    .then(response => response.text())
    .then(data => {
      
        document.getElementById("head").innerHTML = data;

    })

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

        }
        
        else {

            popoutMenu.style.left = "100%";
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-times");
            footer.classList.remove("sticky_footer");
            contactButton.classList.remove("noshow");
            body.classList.remove("noscroll");

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

function changeDocumentPage(documentTitle) {

    const documentPageContent = document.getElementById(documentTitle.dataset.target);

    document.querySelectorAll(".document_selection").forEach(el => {

        el.classList.remove("document_selection");

    });

    documentTitle.classList.add("document_selection");

    document.querySelectorAll(".show").forEach(el => {

        el.classList.remove("show");

    });

    documentPageContent.classList.add("show");

}