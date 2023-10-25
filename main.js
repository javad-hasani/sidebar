document.addEventListener("DOMContentLoaded", function() {
  var sidebar = document.getElementById("sidebar");
  var sidebarWidth = sidebar.offsetWidth;
  var toggleBtn = document.getElementById("toggle-btn");
  var menuItems = document.querySelectorAll(".sidebar-list li");
  var submenuItems = document.querySelectorAll(".submenu-toggle");

  toggleBtn.addEventListener("click", function() {
      sidebar.classList.toggle("show");
      sidebarWidth = sidebar.offsetWidth; // بروزرسانی عرض سایدبار
  });

  menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
          menuItems.forEach(function(item) {
              item.classList.remove("active");
          });
          this.classList.add("active");
      });
  });

  submenuItems.forEach(function(item) {
      item.addEventListener("click", function() {
          this.classList.toggle("active");
          var submenu = this.nextElementSibling;
          submenu.classList.toggle("show");
      });
  });

  document.addEventListener("mousemove", function(event) {
      var mouseX = event.clientX;

      if (mouseX <= sidebarWidth && !sidebar.classList.contains("show")) {
          sidebar.classList.add("show");
          sidebarWidth = sidebar.offsetWidth; // بروزرسانی عرض سایدبار
      } else if (mouseX > sidebarWidth && sidebar.classList.contains("show")) {
          sidebar.classList.remove("show");
      }
  });
});
