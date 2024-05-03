async function fetchImages() {
    const response = await fetch('https://api.netlify.com/api/v1/sites/YOUR_SITE_ID/images');
    const images = await response.json();
    const galleryContainer = document.querySelector('.gallery');

    images.forEach(image => {
        const imageUrl = `https://YOUR_SITE_ID.netlify.app/${image.path}?nf_resize=fit&w=300`;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = image.name;
        galleryContainer.appendChild(imgElement);
    });
}

fetchImages();
