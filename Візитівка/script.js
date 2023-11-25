function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    document.getElementById('leafContainer').appendChild(leaf);
  
    const randomX = Math.random() * window.innerWidth;
    leaf.style.left = `${randomX}px`;
  
    setTimeout(() => {
      leaf.style.opacity = '0';
      leaf.style.transform = 'translateY(100vh) rotate(720deg)';
    }, 100);
  
    setTimeout(() => {
      leaf.remove();
    }, 8000); // Час зникає листка (6000 мс = 6 секунд)
  }
  
  setInterval(createLeaf, 100); // Додавання нових листочків кожні 0.5 секунди
  