document.addEventListener('DOMContentLoaded', () => {
    // Sayfa Yükleme Animasyonu (Loader)
    const loader = document.querySelector('.loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500); // Opaklık geçişi sonrası gizle
            }, 800); // 0.8 saniye sonra başla
        });
    }

    // 1. AOS Kütüphanesini Başlatma (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        mirror: false
    });

    // 2. Typed.js ile Dinamik Metin Yazma Efekti
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        new Typed(typedTextElement, {
            strings: [
                'Kaan Berkay Bilgen',
                'Yazılım Geliştirme ',
                'Dijital Pazarlama ',
                'Meraklısıyım',
                
            ],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '',
        });
    }

    // 3. Yumuşak Kaydırma (Smooth Scrolling)
    document.querySelectorAll('.nav-links a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Mobil menü açıksa, tıklandığında kapansın
                const navLinks = document.querySelector('.nav-links');
                const hamburger = document.querySelector('.hamburger');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // 4. Mobil Navigasyon Menüsü (Hamburger Menü) İşlevselliği
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 5. Vanta.js - SADECE GENİŞ EKRANLARDA ÇALIŞTIRMA
    if (window.innerWidth > 768) {
        const vantaBackgroundElement = document.getElementById('vanta-background');
        if (vantaBackgroundElement) {
            VANTA.NET({
                el: vantaBackgroundElement,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x00e5ff,
                backgroundColor: 0x121212,
                points: 12.00, // Performans için biraz azaltıldı
                maxDistance: 20.00,
                spacing: 20.00,
                showLines: true
            });
        }
    }
});


// MOBİL İÇİN OLAN KISMI DÜZELT