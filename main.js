document.addEventListener('DOMContentLoaded', function() {
      const yesButton = document.getElementById('yesButton');
      const noButton = document.getElementById('noButton');
      const response = document.getElementById('response');
      const heartsContainer = document.getElementById('hearts');
      const customAlert = document.getElementById('customAlert');
      const closeAlert = document.getElementById('closeAlert');
      const alertHearts = document.getElementById('alertHearts');

      let yesSize = 1;
      let noClickCount = 0;

      // Create floating hearts
      function createHearts() {
        for (let i = 0; i < 15; i++) {
          const heart = document.createElement('div');
          heart.classList.add('heart');
          heart.style.left = Math.random() * 100 + 'vw';
          heart.style.animation = `float ${6 + Math.random() * 4}s linear forwards`;
          heart.style.animationDelay = Math.random() * 5 + 's';
          heartsContainer.appendChild(heart);
        }
      }

      // Create hearts for alert box
      function createAlertHearts() {
        for (let i = 0; i < 12; i++) {
          const heart = document.createElement('div');
          heart.classList.add('alert-heart-anim');
          heart.innerHTML = '<i class="fas fa-heart"></i>';
          heart.style.left = Math.random() * 100 + '%';
          heart.style.top = Math.random() * 100 + '%';
          heart.style.animation = `alert-float ${3 + Math.random() * 2}s linear forwards`;
          heart.style.animationDelay = Math.random() * 2 + 's';
          heart.style.fontSize = (Math.random() * 0.8 + 1) + 'rem';
          alertHearts.appendChild(heart);
        }
      }
      
  createHearts();

  // Random position for No button
  function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
  }

  // Handle Yes button click
  yesButton.addEventListener('click', function() {
    response.textContent = 'Yayyy! ❤️';
    response.classList.add('show');

    // Create additional floating hearts
    createHearts();
    
    customAlert.style.display ='flex';
    createAlertHearts();
    
    // Disable buttons after selection
    yesButton.disabled = true;
    noButton.disabled = true;

    // Enlarge the yes button even more
    yesSize += 0.5;
    yesButton.style.transform = `scale(${yesSize})`;
    
  });


  // Handle No button click
  noButton.addEventListener('click', function() {
    noClickCount++;

    // Move the No button to a random position
    moveNoButton();

    // Increase the size of the Yes button
    yesSize += 0.2;
    yesButton.style.transform = `scale(${yesSize})`;

    // Make No button smaller with each click
    const noScale = Math.max(0.5, 1 - (noClickCount * 0.1));
    noButton.style.transform = `scale(${noScale})`;

    // After several clicks, disable the No button
    if (noClickCount >= 8) {
      noButton.style.display = 'none';
      response.textContent = "Mahalin mo na ako! ❤️";
      response.classList.add('show');
    }
  });

  // Make the No button harder to click by moving when hovered (optional)
  noButton.addEventListener('mouseover', function() {
    if (noClickCount > 3) { // Only start moving on hover after a few clicks
      moveNoButton();
    }
  });
  closeAlert.addEventListener('click',function(){
    customAlert.style.display='none';
    
  });
});
