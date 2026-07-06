document.addEventListener("DOMContentLoaded", () => {

    fetch("../update_header.html?v=" + Date.now())
        .then(response => response.text())
        .then(data => {

            document.getElementById("header").innerHTML = data;

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
        });

});