// Run automatically when page loads
window.addEventListener('DOMContentLoaded', function() {
  const subtitle = document.querySelector('.cover-subtitle');
  const authors = document.querySelector('.authors');
  const button = document.querySelector('.start-button');
  const cover = document.getElementById('cover-module');
  
  // Step 1: Wait 3 seconds showing the welcome
  setTimeout(function() {
    // Step 2: Show Pickle family credits
    subtitle.textContent = 'Made with ❤️ by';
    authors.style.display = 'block';
    button.style.display = 'none';
    
    // Step 3: Wait another 3 seconds, then smooth scroll to introduction
    setTimeout(function() {
      const targetElement = document.getElementById('introduction-module');
      
      if (targetElement) {
        // Use same logic as your existing scroll.js
        const headerHeight = document.querySelector('header')?.offsetHeight || 60;
        
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth'
        });
        
        // Optional visual feedback (matches your existing code)
        targetElement.style.transition = 'background-color 0.5s ease';
        targetElement.style.backgroundColor = '#f0f9ff';
        setTimeout(() => {
          targetElement.style.backgroundColor = '';
        }, 1500);
      } else {
        console.error('introduction-module not found!');
      }
    }, 3000);
  }, 3000);
});










// js/scroll.js
// Smooth scrolling for roadmap navigation

// document.addEventListener('DOMContentLoaded', function() {
//   const scrollLinks = document.querySelectorAll('.scroll-link');
  
//   scrollLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault();
      
//       const targetId = this.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);
      
//       if (targetElement) {
//         // Calculate header offset
//         const headerHeight = document.querySelector('header')?.offsetHeight || 60;
        
//         // Smooth scroll to element
//         window.scrollTo({
//           top: targetElement.offsetTop - headerHeight,
//           behavior: 'smooth'
//         });
        
//         // Optional visual feedback
//         targetElement.style.transition = 'background-color 0.5s ease';
//         targetElement.style.backgroundColor = '#f0f9ff';
//         setTimeout(() => {
//           targetElement.style.backgroundColor = '';
//         }, 1500);
//       }
//     });
//   });
// });