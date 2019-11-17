const modalBtn = document.querySelectorAll('#open-modal');
const close = document.getElementById('close');

modalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        
        const modal = document.getElementById('modal');

        modal.classList.add('showModal');
    });
});


close.addEventListener('click', () => {
    const modal = document.getElementById('modal');

    modal.classList.remove('showModal');
});
