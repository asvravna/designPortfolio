function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function expandDetail(element) {
    // Close any open details
    var activeDetails = document.querySelectorAll(".detail.active");
    activeDetails.forEach(function(detail) {
        detail.classList.remove("active");
    });

    // Toggle the current detail
    var detail = element.querySelector(".detail");
    detail.classList.toggle("active");
}

