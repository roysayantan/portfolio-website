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

// Show more projects functionality
document.getElementById('showMoreBtn').addEventListener('click', function () {
    const hiddenProjects = document.querySelector('.project-list.hidden');
    // Check if there are hidden projects
    if (hiddenProjects) {
        // Show the hidden projects
        hiddenProjects.classList.remove('hidden');
        // Hide the "Show More" button
        this.classList.add('hidden');
    }
});

// Show more courses functionality
document.getElementById('showMoreBtnCourses').addEventListener('click', function () {
    const hiddenCourses = document.querySelector('.course-list.hidden');
    // Check if there are hidden courses
    if (hiddenCourses) {
        // Show the hidden courses
        hiddenCourses.classList.remove('hidden');
        // Hide the "Show More" button
        this.classList.add('hidden');
    }
});
