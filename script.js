document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const closeButton = document.getElementById('close-sidebar');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('visible');
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('visible');
    });
    
});
