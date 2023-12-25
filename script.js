
document.addEventListener('DOMContentLoaded', function () {
    // Array of image filenames in the Extra Images folder
    const imageFilenames = [
        'S2QAP1.png',
        'QAP1.png',
        'LOTRFansite.png',
        'LOTRFansite2.png',
        'Midterm1.png',
        'Midterm2.png',
        'Midterm3.png',
        'QAP3.png',

        // Add more image filenames as needed
    ];

    const projectBox = document.getElementById('image-scroll-box');

    // Dynamically add images to the project box
    imageFilenames.forEach((filename, index) => {
        const img = document.createElement('img');
        img.src = `Extra Images/${filename}`;
        img.classList.add('scroll-image');
        if (index === 0) {
            img.classList.add('active');
        }
        imagebox.appendChild(img);
    });

    const images = projectBox.querySelectorAll('.scroll-image');
    let currentImageIndex = 0;

    // Function to scroll to the next image
    function scrollNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    // Set an interval to automatically scroll to the next image every 3 seconds
    setInterval(scrollNextImage, 3000);
});
