// Light/Dark Mode Toggle
const toggleBtn = document.getElementById('modeToggle');
const navbar = document.getElementById('mainNavbar');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Update button icon and navbar
    if (document.body.classList.contains('light-mode')) {
        // Light mode
        toggleBtn.textContent = '🌙';
        toggleBtn.classList.remove('btn-outline-light');
        toggleBtn.classList.add('btn-outline-dark');

        // Change navbar to light
        navbar.classList.remove('bg-dark', 'navbar-dark');
        navbar.classList.add('bg-light', 'navbar-light');
    } else {
        // Dark mode
        toggleBtn.textContent = '☀️';
        toggleBtn.classList.remove('btn-outline-dark');
        toggleBtn.classList.add('btn-outline-light');

        // Change navbar to dark
        navbar.classList.remove('bg-light', 'navbar-light');
        navbar.classList.add('bg-dark', 'navbar-dark');
    }
});

// Set initial state
toggleBtn.textContent = '☀️';