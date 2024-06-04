// Menu toggle functionality
document.getElementById('openmenu').addEventListener('click', function () {
    document.getElementById('sidemenu').style.right = "0";
});

document.getElementById('closemenu').addEventListener('click', function () {
    document.getElementById('sidemenu').style.right = "-200px";
});

// Tab functionality for About section
document.querySelectorAll('.tab-links').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.tab-links').forEach(tab => tab.classList.remove('active-link'));
        document.querySelectorAll('.tab-contents').forEach(content => content.classList.remove('active-tab'));
        this.classList.add('active-link');
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
    const hiddenServices = document.querySelector('.project-list.hidden');
    if (hiddenServices) {
        hiddenServices.classList.remove('hidden');
        this.classList.add('hidden');
    }
});
document.getElementById('showMoreBtnCourses').addEventListener('click', function () {
    const hiddenServices = document.querySelector('.course-list.hidden');
    if (hiddenServices) {
        hiddenServices.classList.remove('hidden');
        this.classList.add('hidden');
    }
});
