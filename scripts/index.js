document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
  
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('text-blue-500');
        link.classList.remove('text-gray-300')
      }
    });
  });
  