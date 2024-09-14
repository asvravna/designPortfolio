function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Function to expand the event box
function expandBox(element) {
    // Remove 'expanded' class from all other events
    document.querySelectorAll('.timeline-event.expanded').forEach(event => {
        event.classList.remove('expanded');
    });
    // Add 'expanded' class to the clicked element
    element.classList.add('expanded');
}



function expandDetail(element) {
    // Toggle the 'active' class on the clicked timeline-point
    element.querySelector('.detail').classList.toggle('active');
}

function closeBox(event, element) {
    // Prevent click from propagating to `timeline-point`
    event.stopPropagation();
    
    // Remove 'active' class from the parent `detail` element
    element.parentElement.classList.remove('active');
}


