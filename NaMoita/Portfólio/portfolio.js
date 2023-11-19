function abrirMenu() {
    document.getElementById("menuOculto").style.width = "250px";
}

function fecharMenu() {
    document.getElementById("menuOculto").style.width = "0";
}

/***************************************************/

let currentImageIndex = 0;
const images = ['fotos/A.jpg', 'fotos/arthur.png', 'fotos/karneroprisao.png', 'fotos/LOCURA---bitrus-watermark.jpg',
'fotos/minekarnero.jpg', 'fotos/o.jpg', 'fotos/PABLO-TARTAS.jpg', 'fotos/REVOLVE.jpg']; 

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');

    currentImageIndex = images.indexOf(imageSrc);
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

function changeImage(offset) {
    currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'Escape') {
        closeModal();
    }
});