document.addEventListener("DOMContentLoaded", function() {
    var heartImage = document.getElementById("heartImage");
    var logoImage = document.getElementById("logoImage");

    // Show the heart image immediately
    heartImage.style.opacity = "1";

    // After a short delay, hide the heart image and show the logo image
    setTimeout(function() {
        heartImage.style.opacity = "0";
        logoImage.style.opacity = "1";
        logoImage.style.transform = "translate(-50%, 0%)"; // Move logo to top middle
    }, 1500); // Adjust delay as needed
});
