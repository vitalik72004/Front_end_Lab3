const objects = document.querySelectorAll('.item, .item-2, .item-3, .item-4, .item-5');

objects.forEach((object) => {
    object.addEventListener('mousemove', (e) => {
    // Отримання позиції миші
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Розрахунок відстані від центру елемента до позиції миші
    const rect = object.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Розрахунок кута для наклону елемента
    const angleX = -(deltaY / 4); // Кут наклона по X
    const angleY = deltaX / 4; // Кут наклона по Y
    const scaleFactor = 1.1; // Змініть це значення, якщо потрібно інше збільшення

    // Застосування трансформації в CSS
    object.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scaleFactor})`;
    });

    object.addEventListener('mouseleave', (e) => {
        // При виході миші з елементу повертати трансформацію до початкового стану
        object.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});

