document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var sidebarWidth = sidebar.offsetWidth;
    var toggleBtn = document.getElementById("toggle-btn");
    var menuItems = document.querySelectorAll(".sidebar-list li");
    var submenuItems = document.querySelectorAll(".submenu-toggle");

    // Toggle the sidebar when the toggle button is clicked
    toggleBtn.addEventListener("click", function() {
      sidebar.classList.toggle("show");
    });

    // Add active state to the clicked menu item
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        menuItems.forEach(function(item) {
          item.classList.remove("active");
        });
        this.classList.add("active");
      });
    });

    // Toggle submenus
    submenuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        this.classList.toggle("active");
        var submenu = this.nextElementSibling;
        submenu.classList.toggle("show");
      });
    });

    // Show/hide sidebar based on mouse position
    document.addEventListener("mousemove", function(event) {
      var mouseX = event.clientX;

      if (mouseX <= sidebarWidth && !sidebar.classList.contains("show")) {
        sidebar.classList.add("show");
      } else if (mouseX > sidebarWidth && sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
      }
    });
  });