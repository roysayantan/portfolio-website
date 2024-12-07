// Menu toggle functionality
document.getElementById('openmenu').addEventListener('click', function () {
    // Open the side menu
    document.getElementById('sidemenu').style.right = "0";
});

document.getElementById('closemenu').addEventListener('click', function () {
    // Close the side menu
    document.getElementById('sidemenu').style.right = "-200px";
});

// Tab functionality for About section
document.querySelectorAll('.tab-links').forEach(tab => {
    tab.addEventListener('click', function () {
        // Remove 'active-link' class from all tabs
        document.querySelectorAll('.tab-links').forEach(tab => tab.classList.remove('active-link'));
        // Remove 'active-tab' class from all content sections
        document.querySelectorAll('.tab-contents').forEach(content => content.classList.remove('active-tab'));
        // Add 'active-link' class to the clicked tab
        this.classList.add('active-link');
        // Add 'active-tab' class to the corresponding content section
        document.getElementById(this.getAttribute('data-tab')).classList.add('active-tab');
    });
});

// Tab functionality for Services section
document.querySelectorAll('.service-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active classes from all tabs and content sections
        document.querySelectorAll('.service-tab').forEach(tab => tab.classList.remove('active-link'));
        document.querySelectorAll('.service-content').forEach(content => content.classList.remove('active-service'));
        // Add active classes to the clicked tab and its corresponding content
        this.classList.add('active-link');
        const targetContentId = this.getAttribute('data-tab');
        // Ensure target content exists before adding the active class
        if (targetContentId && document.getElementById(targetContentId)) {
            document.getElementById(targetContentId).classList.add('active-service');
        } else {
            console.warn(`Warning: No content found for target ID: ${targetContentId}`);
        }
    });
});

// Show more Projects functionality
function showMore() {
    const hiddenProjects = document.querySelector('.project-list.hidden');
    const showMoreButton = document.getElementById('showMoreBtn');
    
    // Toggle the hidden class
    if (hiddenProjects.style.display === "none" || hiddenProjects.style.display === "") {
        hiddenProjects.style.display = "block";
        showMoreButton.textContent = "Show Less"; // Change button text to "Show Less"
    } else {
        hiddenProjects.style.display = "none";
        showMoreButton.textContent = "Show More"; // Change button text back to "Show More"
    }
}

  

// Show more courses functionality
function showMoreCourses() {
    const hiddenCourses = document.querySelector('.course-list.hidden');
    const showMoreButton = document.getElementById('showMoreBtnCourses');
    
    // Toggle the hidden class
    if (hiddenCourses.style.display === "none" || hiddenCourses.style.display === "") {
        hiddenCourses.style.display = "block";
        showMoreButton.textContent = "Show Less"; // Change button text to "Show Less"
    } else {
        hiddenCourses.style.display = "none";
        showMoreButton.textContent = "Show More"; // Change button text back to "Show More"
    }
}
