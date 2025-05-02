    // Wait until the page is fully loaded
    window.addEventListener("load", function () {
    // Hide the preloader
    document.getElementById("preloader").style.display = "none";

    // Show the main content
    document.getElementById("content").style.display = "block";
});
        



document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar');
    
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
        navbarContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
    });


    document.addEventListener('DOMContentLoaded', function() {
        const navbarContainer = document.getElementById('footer');
        
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
            navbarContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
        });