function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productType = urlParams.get('type');

    if (window.location.pathname.includes('products-detail') && productId) {
        fetch(`data/${productType}/${productId}.json`)
            .then(response => response.json())
            .then(products => {
                const product = products.find(p => p.id === productId);

                if (product) {
                    document.title = `ÇELİKİŞ - ${product.title}`;

                    document.getElementById('product-title').textContent = product.title;
                    document.getElementById('product-description').innerHTML = product.description_html;

                    const mainImage = document.getElementById('main-product-image');
                    const thumbnailGallery = document.getElementById('thumbnail-gallery');
                    const zoomContainer = document.getElementById('zoom-container');
                    const magnifyingGlass = document.createElement('div');

                    mainImage.src = product.images[0];

                    thumbnailGallery.innerHTML = '';
                    product.images.forEach((imageSrc, index) => {
                        const thumbnail = document.createElement('img');
                        thumbnail.src = imageSrc;
                        thumbnail.alt = `Product Thumbnail ${index + 1}`;
                        thumbnail.classList.add('w-16', 'h-16', 'object-cover', 'rounded-lg', 'cursor-pointer', 'thumbnail');
                        thumbnail.loading = 'lazy';
                        if (index === 0) {
                            thumbnail.classList.add('active');
                        }

                        thumbnail.addEventListener('click', () => {
                            mainImage.src = imageSrc;
                            document.querySelectorAll('#thumbnail-gallery .thumbnail').forEach(thumb => {
                                thumb.classList.remove('active');
                            });
                            thumbnail.classList.add('active');
                        });

                        thumbnailGallery.appendChild(thumbnail);
                    });


                    magnifyingGlass.id = 'magnifying-glass';
                    magnifyingGlass.style.width = '200px';
                    magnifyingGlass.style.height = '200px';
                    magnifyingGlass.style.borderRadius = '50%';
                    zoomContainer.appendChild(magnifyingGlass);

                    const handleMouseMove = (moveEvent) => {
                        const rect = zoomContainer.getBoundingClientRect();
                        const mainImage = document.getElementById('main-product-image');

                        magnifyingGlass.style.backgroundImage = `url('${mainImage.src}')`;
                        magnifyingGlass.style.backgroundSize = `${mainImage.clientWidth * 2}px ${mainImage.clientHeight * 2}px`;

                        const x = moveEvent.clientX - rect.left;
                        const y = moveEvent.clientY - rect.top;

                        magnifyingGlass.style.left = `${x - magnifyingGlass.clientWidth / 2}px`;
                        magnifyingGlass.style.top = `${y - magnifyingGlass.clientHeight / 2}px`;

                        const bgX = (x / mainImage.clientWidth) * 100;
                        const bgY = (y / mainImage.clientHeight) * 100;
                        magnifyingGlass.style.backgroundPosition = `${bgX}% ${bgY}%`;
                    }

                    zoomContainer.addEventListener('mouseenter', () => {
                        magnifyingGlass.style.opacity = 1;
                        zoomContainer.addEventListener('mousemove', handleMouseMove);
                    });

                    zoomContainer.addEventListener('mouseleave', () => {
                        magnifyingGlass.style.opacity = 0;
                        zoomContainer.removeEventListener('mousemove', handleMouseMove);
                    });

                } else {
                    document.getElementById('product-title').textContent = "Product Not Found";
                }
            })
            .catch(error => console.error('Error fetching product data:', error));
    }
}