document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');
    
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            var dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });

    document.addEventListener('click', function(event) {
        dropdownToggles.forEach(function(toggle) {
            var dropdownMenu = toggle.nextElementSibling;
            if (!toggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
});
