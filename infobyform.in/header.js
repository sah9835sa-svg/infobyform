document.addEventListener("DOMContentLoaded", () => {

    const scriptTag = document.querySelector('script[src*="header.js"]');
    const base = scriptTag?.getAttribute("data-base") || "";

    fetch(base + "header.html?v=" + Date.now())
        .then(res => res.text())
        .then(data => {

            document.getElementById("header").innerHTML = data;

            // Header load होने के बाद page दिखाओ
            document.body.style.visibility = "visible";

            // menu fix
            const menuIcon = document.querySelector(".menu-icon");
            const navMenu = document.getElementById("navMenu");

            if (menuIcon && navMenu) {
                menuIcon.addEventListener("click", () => {
                    navMenu.classList.toggle("show");
                });
            }

        })
        .catch(err => console.log("Header load error:", err));

});