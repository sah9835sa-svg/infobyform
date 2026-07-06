document.addEventListener("DOMContentLoaded", () => {

    const scriptTag = document.querySelector('script[src*="footer.js"]');
    const base = scriptTag?.getAttribute("data-base") || "";

    fetch(base + "footer.html?v=" + Date.now())
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.log("Footer load error:", err));

});