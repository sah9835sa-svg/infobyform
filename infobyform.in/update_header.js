document.addEventListener("DOMContentLoaded", () => {

    fetch("../update_header.html?v=" + Date.now())
        .then(response => response.text())
        .then(data => {

            document.getElementById("header").innerHTML = data;

            // Header load होने के बाद body दिखाओ
            ddocument.body.style.visibility = "visible";

            // Menu toggle
            const menuIcon = document.querySelector(".menu-icon");
            const navMenu = document.getElementById("navMenu");

            if (menuIcon && navMenu) {
                menuIcon.addEventListener("click", () => {
                    navMenu.classList.toggle("show");
                });
            }

        })
        .catch(error => {
            console.log("Update Header Load Error:", error);

            // Error आए तब भी page दिखे
            document.body.style.visibility = "visible";
        });

});