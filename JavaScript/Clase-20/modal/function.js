const modal = document.getElementById('modal');
const imgModal = document.getElementById('img-modal');
const imagenes = document.querySelectorAll('.imagen');

const closeModal = document.getElementById('close-modal');
const prevImage = document.getElementById('prev-image');
const nextImage = document.getElementById('next-image');

let max, current = 0;

imagenes.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = "flex";
        imgModal.src = image.getAttribute('src');

        max = imagenes.length;
        current = index;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

prevImage.addEventListener('click', () => {
    if(current == 0){ current = max; }
    else { current--; }

    imgModal.src = imagenes[current].getAttribute('src');
});

nextImage.addEventListener('click', () => {
    if(current == max) { current = 0; }
    else { current++; }

    imgModal.src = imagenes[current].getAttribute('src');

});