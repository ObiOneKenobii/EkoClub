function changeBackground() {
    const body = document.getElementById('body1');
    body.classList.add('transition-background');
    setTimeout(() => {
      body.style.backgroundImage = 'url(3288289.jpg)';
      body.classList.remove('transition-background');
    }, 500);
  }
  
  setInterval(changeBackground, 5000);




  function changeBackground() {
    const body = document.querySelector('body');
    body.classList.add('transition-background');
    setTimeout(() => {
      body.style.backgroundImage = 'url(49tkmq.jpg)';
      body.classList.remove('transition-background');
    }, 500);
  }
  
  setInterval(changeBackground, 5000);
  
  
  