window.addEventListener('DOMContentLoaded', function() {
  const subtitle = document.querySelector('.cover-subtitle');
  const authors = document.querySelector('.authors');
  const button = document.querySelector('.start-button');
  
  // Step 1: Wait 3 seconds showing the welcome
  setTimeout(function() {
    // Step 2: Show "The Pickl3 Family" credits
    subtitle.textContent = 'Made with ❤️ by';
    authors.style.display = 'block';
    button.style.display = 'none';
    
    // Step 3: Wait 2 seconds, then navigate (NO FADE)
    setTimeout(function() {
      // Just navigate - no fade effect
      window.location.hash = 'introduction-module';
      
      // Scroll to top to prevent jumping
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 10);
    }, 2000);
  }, 3000);
});


// Run automatically when page loads
// window.addEventListener('DOMContentLoaded', function() {
//   const subtitle = document.querySelector('.cover-subtitle');
//   const authors = document.querySelector('.authors');
//   const button = document.querySelector('.start-button');
//   const cover = document.getElementById('cover-module');
  
//   // Step 1: Wait 3 seconds showing the welcome
//   setTimeout(function() {
//     // Step 2: Show Pickle family credits
//     subtitle.textContent = 'Made with ❤️ by';
//     authors.style.display = 'block';
//     button.style.display = 'none';
    
//     // Step 3: Wait another 3 seconds, then go to introduction module
//     setTimeout(function() {
//       // Smooth scroll instead of jump
//       const introModule = document.getElementById('introduction-module');
//       if (introModule) {
//         introModule.scrollIntoView({ 
//           behavior: 'smooth',
//           block: 'start'
//         });
//       } else {
//         console.error('introduction-module not found!');
//       }
//     }, 3000);
//   }, 3000);
// });


// Run automatically when page loads
// window.addEventListener('DOMContentLoaded', function() {
//   const subtitle = document.querySelector('.cover-subtitle');
//   const authors = document.querySelector('.authors');
//   const button = document.querySelector('.start-button');
//   const cover = document.getElementById('cover-module');
  
//   // Step 1: Wait 3 seconds showing the welcome
//   setTimeout(function() {
//     // Step 2: Show Pickle family credits
//     subtitle.textContent = 'Made with ❤️ by';
//     authors.style.display = 'block';
//     button.style.display = 'none';
    
//     // Step 3: Wait another 3 seconds, then go to introduction module
//     setTimeout(function() {
//       window.location.hash = 'introduction-module';
//     }, 3000);
//   }, 3000);
// });


// Run automatically when page loads
// window.addEventListener('DOMContentLoaded', function() {
//   const subtitle = document.querySelector('.cover-subtitle');
//   const authors = document.querySelector('.authors');
//   const button = document.querySelector('.start-button');
//   const cover = document.getElementById('cover-module');
  
//   // Step 1: Wait 3 seconds showing the welcome
//   setTimeout(function() {
//     // Step 2: Show Pickle family credits
//     subtitle.textContent = 'Made with ❤️ by';
//     authors.style.display = 'block';
//     button.style.display = 'none';
    
//     // Step 3: Wait another 3 seconds, then go to course
//     setTimeout(function() {
//       window.location.hash = 'main-content';
//     }, 3000);
//   }, 3000);
// });



// function showCredits() {
//   // Get elements
//   const subtitle = document.querySelector('.cover-subtitle');
//   const authors = document.querySelector('.authors');
//   const button = document.querySelector('.start-button');
//   const cover = document.getElementById('cover-module');
  
//   // Show Pickle family credits with fade
//   subtitle.textContent = 'Made with ❤️ by';
//   authors.style.display = 'block';
  
//   // Hide the button
//   button.style.display = 'none';
  
//   // Wait 3 seconds, then fade out and go to course
//   setTimeout(function() {
//     cover.style.transition = 'opacity 1s';
//     cover.style.opacity = '0';
    
//     // Wait for fade, then navigate
//     setTimeout(function() {
//       window.location.hash = 'main-content';
//     }, 1000);
//   }, 3000);
// }


// function showCredits() {
//   console.log('1. Function showCredits() started');
  
//   const cover = document.getElementById('cover-module');
//   const subtitle = document.querySelector('.cover-subtitle');
//   const authors = document.querySelector('.authors');
//   const button = document.querySelector('.start-button');
  
//   console.log('2. Elements found:', {cover, subtitle, authors, button});
  
//   // Change subtitle to credits
//   subtitle.textContent = 'Made with ❤️ by';
//   console.log('3. Subtitle changed');
  
//   // Show authors
//   authors.style.display = 'block';
//   console.log('4. Authors shown');
  
//   // Change button text and link
//   button.textContent = 'Continue to Course';
//   console.log('5. Button text changed');
  
//   button.onclick = function() {
//     console.log('6. Continue button clicked');
//     window.location.href = '#main-content';
//   };
  
//   console.log('7. Function completed');
// }


// function showCredits() {
//   const cover = document.getElementById('cover-module');
//   const subtitle = document.querySelector('.cover-subtitle');
//   const authors = document.querySelector('.authors');
  
//   // Change subtitle to credits
//   subtitle.textContent = 'Made with ❤️ by';
  
//   // Show authors
//   authors.style.display = 'block';
  
//   // Change button text and link
//   const button = document.querySelector('.start-button');
//   button.textContent = 'Continue to Course';
//   button.onclick = function() {
//     window.location.href = '#main-content';
//   };
  
//   // Optional: Add fade effect
//   cover.style.transition = 'opacity 0.5s';
//   cover.style.opacity = '0.9';
// }

