document.addEventListener("DOMContentLoaded", () => {
    // KPI Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to fast
            const inc = target / speed;

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    // Simple smooth scroll / nav active states
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active from all
            navLinks.forEach(item => item.classList.remove('active'));
            // Add active to clicked
            link.classList.add('active');

            // Scroll to section
            const targetId = link.getAttribute('data-target');
            if(targetId === 'dashboard') {
                document.querySelector('.content').scrollTo({top: 0, behavior: 'smooth'});
            } else {
                const targetElement = document.getElementById(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            }
        });
    });

    // Image Lightbox 
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.style.display = 'flex';
            // slight delay for transition
            setTimeout(() => { modal.classList.add('active'); }, 10);
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => { modal.style.display = 'none'; }, 300);
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => { modal.style.display = 'none'; }, 300);
        }
    });

});
