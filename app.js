document.addEventListener('DOMContentLoaded', () => {
    let currentSection = 0;
    const sections = document.querySelectorAll('.section');
  
    function scrollToSection(index) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  
    window.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        // Scroll down
        if (currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        }
      } else {
        // Scroll up
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    });
  
    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        // Scroll down
        if (currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        }
      } else if (event.key === 'ArrowUp') {
        // Scroll up
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    });
  });
  