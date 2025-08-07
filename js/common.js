document.addEventListener('DOMContentLoaded', async () => {
    // Localization
    const translations = {
        en: {
            // Header
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-products": "Products",
            "nav-contact": "Contact",
            "mobile-nav-home": "Home",
            "mobile-nav-about": "About Us",
            "mobile-nav-products": "Products",
            "mobile-nav-contact": "Contact",
            "e-katalog-button": "E-Catalog",
            "mobile-e-katalog-button": "E-Catalog",
            "header-product-title-1": "Nail Making Machine",
            "header-product-title-2": "Threadrolling Machine",
            "header-product-title-3": "Nail Collating Machine",
            "header-product-title-4": "Wire Drawing Machine",

            // Home Page
            "hero-heading": "All the solutions you need for nail production",
            "hero-subheading": "Your trusted partner for high-quality machinery.",
            "welcome-heading": "Welcome to ÇELİKİŞ",
            "welcome-text": "ÇELİKİŞ is a leading manufacturer and supplier of advanced industrial machinery, dedicated to providing high-quality, reliable, and innovative solutions for various sectors. Explore our range of products and discover how we can empower your business.",
            "learn-more-button": "Learn More About Us",
            "video1-title": "6cm Common Nail Production Machine",
            "video2-title": "8cm Common Nail Production Machine",
            "video3-title": "10cm Common Nail Production Machine",

            // About Us Page
            "about-us-heading": "About ÇELİKİŞ",
            "about-us-p1": `Our company, an expert in its field, was founded in 2001 to meet domestic and international needs for steel wire, 
                        wire products, and machinery equipment. We have embarked on our industrial journey, drawing on years of knowledge, 
                        experience, and expertise, and continue to rapidly monitor sectoral changes and develop solutions.`,
            "about-us-p2": `Initially, we began selling steel wire and its products with an annual capacity of 5,000 tons. 
                        Later, in line with evolving market conditions, we added spring wire machines, forming machines, 
                        spring grinding machines, and heat treatment furnaces to our product range, as well as wire-strip 
                        and forming machines capable of simultaneously bending, crushing, shaping, drilling, welding, and joining. 
                        To provide high-quality service, we select our suppliers from among the world's leading industrialized countries, 
                        producing quality-certified materials in accordance with international standards. 
                        This enables our customers to achieve more efficient results in the R&D, planning, and production stages.`,
            "about-us-p3": `Since its founding, our company has been constantly evolving and growing alongside our group companies. 
                        With its young, research-oriented and innovative team, today we provide flexible solutions to our customers 
                        in every field of the steel wire industry through our domestic and international dealerships and representatives.`,
            "about-us-p4": `Our team, embracing the win-win policy of the new century, rather than the ever-easy approach of old-school business 
                        approaches and systems, regularly visits our customers face-to-face in Turkey and 
                        conducts factory visits abroad, establishing a solid business partnership between the manufacturer and 
                        the end customer in terms of price, quality, delivery time, and technological advancements. 
                        Our greatest trust and asset in this regard is our customers' expectations of us and the continuity of our partnership. 
                        To maintain this continuity, we carefully screen our suppliers and do not even offer machinery we cannot stand behind.`,

            // Products Page
            "products-heading": "Our Products",
            "product-title-1": "Nail Making Machine",
            "product-desc-1": "Powerful and efficient excavators for all your construction needs. Designed for durability and performance.",
            "product-title-2": "Threadrolling Machine",
            "product-desc-2": "Robust tractors for modern farming, enhancing productivity and yield with advanced features.",
            "product-title-3": "Nail Collating Machine",
            "product-desc-3": "High-performance drilling rigs for efficient and safe mining operations in challenging environments.",
            "product-title-4": "Wire Drawing Machine",
            "product-desc-4": "Versatile forklifts for warehousing and logistics, offering superior maneuverability and lifting capacity.",
            "product-learn-more-1": "Learn More",
            "product-learn-more-2": "Learn More",
            "product-learn-more-3": "Learn More",
            "product-learn-more-4": "Learn More",

            // Products Sub Page
            "nail-making-heading": "Nail Making Machines",
            "X90-desc": "Powerful and efficient excavators for all your construction needs. Designed for durability and performance.",
            "X100A-desc": "Powerful and efficient excavators for all your construction needs. Designed for durability and performance.",
            "X130B-desc": "Powerful and efficient excavators for all your construction needs. Designed for durability and performance.",
            "threadrolling-heading": "Threadrolling Machines",
            "YH-GSJ-GS2600-desc": "Powerful and efficient excavators for all your construction needs. Designed for durability and performance.",
            "nail-collating-heading": "Nail Collating Machine",
            "YH-JDJ-QZD2500-desc": "Powerful and efficient excavators for all your construction needs. Designed for durability and performance.",
            "wire-drawing-heading": "Wire Drawing Machines",
            "YH-LSJ-WSZJ9-desc": "Powerful and efficient excavators for all your construction needs. Designed for durability and performance.",

            // Contact Page
            "contact-heading": "Contact Us",
            "get-in-touch-heading": "Get in Touch",
            "follow-us-heading": "Follow Us",

            // Footer
            "footer-company-name": "ÇELİKİŞ",
            "footer-about-text": "Dedicated to providing high-quality industrial machinery and exceptional customer service. Innovation and reliability are at the core of what we do.",
            "footer-quick-links-heading": "Quick Links",
            "footer-link-home": "Home",
            "footer-link-about": "About Us",
            "footer-link-products": "Products",
            "footer-link-contact": "Contact",
            "footer-contact-info-heading": "Contact Info",
            "footer-copyright": "&copy; 2025 ÇELİKİŞ. All rights reserved.",
        },
        tr: {
            // Header
            "nav-home": "Anasayfa",
            "nav-about": "Hakkımızda",
            "nav-products": "Ürünler",
            "nav-contact": "İletişim",
            "mobile-nav-home": "Anasayfa",
            "mobile-nav-about": "Hakkımızda",
            "mobile-nav-products": "Ürünler",
            "mobile-nav-contact": "İletişim",
            "e-katalog-button": "E-Katalog",
            "mobile-e-katalog-button": "E-Katalog",
            "header-product-title-1": "Çivi İmalat Makinesi",
            "header-product-title-2": "Ovalama Makinesi",
            "header-product-title-3": "Tele Dizme Makinesi",
            "header-product-title-4": "Tel Çekme Makinesi",

            // Home Page
            "hero-heading": "Çivi üretimi için ihtiyacınız olan tüm çözümler",
            "hero-subheading": "Yüksek kaliteli makineler için güvenilir ortağınız.",
            "welcome-heading": "ÇELİKİŞ'e Hoş Geldiniz",
            "welcome-text": "ÇELİKİŞ, çeşitli sektörler için yüksek kaliteli, güvenilir ve yenilikçi çözümler sunmaya adanmış, lider bir gelişmiş endüstriyel makine üreticisi ve tedarikçisidir. Ürün yelpazemizi keşfedin ve işinizi nasıl güçlendirebileceğimizi öğrenin.",
            "learn-more-button": "Hakkımızda Daha Fazla Bilgi",
            "video1-title": "6'lık İnşaat Çivisi Üretim Makinesi",
            "video2-title": "8'lik İnşaat Çivisi Üretim Makinesi",
            "video3-title": "10'luk İnşaat Çivisi Üretim Makinesi ",

            // About Us Page
            "about-us-heading": "ÇELİKİŞ Hakkında",
            "about-us-p1": `Konusunda uzman bir kuruluş olan firmamız 2001 yılında yurtiçi ve yurtdışı çelik tel, çelik tel, tel 
            ürünleri ve makine ekipmanları konusunda ihtiyaçların karşılanması amacı ile kurulmuştur.
                        Daha önceki yıllara dayanan bilgi, birikim ve deneyimlerin ışığı altında başlayan sanayi
                        yolculuğumuza sektörel değişimleri anında takip ederek ve çözümler üreterek hızlı adımlarla
                        devam etmekteyiz.`,
            "about-us-p2": `Başlangıçta, yılda 5000 ton kapasite ile çelik tel ve ürünleri ile satışa başlamış olup daha
                        sonra gelişen pazar şartlarına uygun olarak ürün yelpazemize yaylık tel makinaları, form
                        makinaları, yay taşlama makinaları ve ısıl işlem fırınlarının yanı sıra en son olarak bükme,
                        ezme, şekillendirme, delme, kaynak ve birleştirmeyi aynı anda yapabilen tel-şerit ve form
                        makinalarınıda eklemiş bulunmaktayız. Yüksek kalitede hizmet verebilmek için tedarikçilerimizi
                        uluslararası standartlara uygun olarak kalite sertifikalı malzeme üreten ve dünyanın sayılı
                        endüstrileşmiş ülkelerindeki kuruluşlardan seçmekteyiz. Bu da müşterilerimizin ar-ge, planlama
                        ve üretim aşamalarında daha verimli sonuçlar almasını sağlamaktadır.`,
            "about-us-p3": `Grup firmamız ile birlikte kurulduğundan bu yana sürekli gelişerek, yenilenerek büyüyen firmamız
                        konusunda araştırmacı, yenilikçi genç kadrosuyla bugün yurtdışı ve yurtiçi bayilik ve
                        temsilcilikleri ile çelik tel sanayinin her alanında müşterilerine uygun esnek çözümler
                        sağlamaktadır.`,
            "about-us-p4": `Eski tip ticaret anlayış ve sistemlerinin hep bana kolaycılığının dışında yeni yüzyılın
                        kazan-kazan politikasının benimseyen kadromuz, yurtiçinde müşterilerimizi sürekli yüz yüze
                        ziyaret ederek, yurtdışında da fabrika ziyaretlerinde bulunarak üretici ve son müşteri arasında
                        fiyat, kalite, termin ve teknolojik gelişimler yönünde sağlam bir iş ortaklığı
                        gerçekleştirmektedir. Bizim bu konudaki en büyük güvenimiz ve sermayemiz, müşterilerimizin bizim
                        için düşündükleri ve çalışma ortaklığımızın sürekliliğidir. Bu sürekliliği korumak için ise
                        tedarikçilerimizi ince eleyip sık dokuyoruz ve arkasında duramayacağımız makinenin
                        teklifini dahi etmiyoruz.`,


            // Products Page
            "products-heading": "Ürünlerimiz",
            "product-title-1": "Çivi İmalat Makinesi",
            "product-desc-1": "Tüm inşaat ihtiyaçlarınız için güçlü ve verimli ekskavatörler. Dayanıklılık ve performans için tasarlanmıştır.",
            "product-title-2": "Ovalama Makinesi",
            "product-desc-2": "Modern tarım için sağlam traktörler, gelişmiş özelliklerle üretkenliği ve verimi artırır.",
            "product-title-3": "Tele Dizme Makinesi",
            "product-desc-3": "Zorlu ortamlarda verimli ve güvenli madencilik operasyonları için yüksek performanslı sondaj makineleri.",
            "product-title-4": "Tel Çekme Makinesi",
            "product-desc-4": "Depolama ve lojistik için çok yönlü forkliftler, üstün manevra kabiliyeti ve kaldırma kapasitesi sunar.",
            "product-learn-more-1": "Daha Fazla Bilgi",
            "product-learn-more-2": "Daha Fazla Bilgi",
            "product-learn-more-3": "Daha Fazla Bilgi",
            "product-learn-more-4": "Daha Fazla Bilgi",

            // Products Sub Page
            "nail-making-heading": "Çivi İmalat Makinelerimiz",
            "X90-desc": "Tüm inşaat ihtiyaçlarınız için güçlü ve verimli ekskavatörler. Dayanıklılık ve performans için tasarlanmıştır.",
            "X100A-desc": "Tüm inşaat ihtiyaçlarınız için güçlü ve verimli ekskavatörler. Dayanıklılık ve performans için tasarlanmıştır.",
            "X130B-desc": "Tüm inşaat ihtiyaçlarınız için güçlü ve verimli ekskavatörler. Dayanıklılık ve performans için tasarlanmıştır.",
            "threadrolling-heading": "Ovalama Makinelerimiz",
            "YH-GSJ-GS2600-desc": "Tüm inşaat ihtiyaçlarınız için güçlü ve verimli ekskavatörler. Dayanıklılık ve performans için tasarlanmıştır.",
            "nail-collating-heading": "Tele Dizme Makinelerimiz",
            "YH-JDJ-QZD2500-desc": "Tüm inşaat ihtiyaçlarınız için güçlü ve verimli ekskavatörler. Dayanıklılık ve performans için tasarlanmıştır.",
            "wire-drawing-heading": "Tel Çekme Makinelerimiz",
            "YH-LSJ-WSZJ9-desc": "Tüm inşaat ihtiyaçlarınız için güçlü ve verimli ekskavatörler. Dayanıklılık ve performans için tasarlanmıştır.",

            // Contact Page
            "contact-heading": "İletişim",
            "get-in-touch-heading": "Bize Ulaşın",
            "follow-us-heading": "Bizi Takip Edin",

            // Footer
            "footer-company-name": "ÇELİKİŞ",
            "footer-about-text": "Yüksek kaliteli endüstriyel makineler ve olağanüstü müşteri hizmetleri sunmaya adanmıştır. Yenilik ve güvenilirlik, yaptıklarımızın temelini oluşturur.",
            "footer-quick-links-heading": "Hızlı Bağlantılar",
            "footer-link-home": "Anasayfa",
            "footer-link-about": "Hakkımızda",
            "footer-link-products": "Ürünler",
            "footer-link-contact": "İletişim",
            "footer-contact-info-heading": "İletişim Bilgileri",
            "footer-copyright": "&copy; 2025 ÇELİKİŞ. Tüm hakları saklıdır.",
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        const langEnButton = document.getElementById('lang-en');
        const langTrButton = document.getElementById('lang-tr');

        if (langEnButton && langTrButton) {
            langEnButton.classList.remove('active-flag-button');
            langTrButton.classList.remove('active-flag-button');

            document.getElementById(`lang-${lang}`).classList.add('active-flag-button');
        }

        for (const id in translations[lang]) {
            const element = document.getElementById(id);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][id];
                } else if (element.tagName === 'A' && element.id.startsWith('product') && element.id.endsWith('learn-more')) {
                    element.textContent = translations[lang][id];
                } else {
                    element.innerHTML = translations[lang][id];
                }
            }
        }
    }

    window.setLanguage = setLanguage;

    async function loadSection(section) {
        const sectionPlaceholder = document.getElementById(section + '-placeholder');
        if (sectionPlaceholder) {
            try {
                const response = await fetch('commons/' + section + '.html');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const sectionHtml = await response.text();
                sectionPlaceholder.innerHTML = sectionHtml;

                // If the header is loaded then attach language button listeners
                if (section === 'header') {
                    attachHeaderListeners();
                }

                setLanguage(currentLang);
            } catch (error) {
                console.error('Error loading ' + section + ':', error);
                sectionPlaceholder.innerHTML = '<p class="text-center text-red-500 p-4">Error loading ' + section + ' content.</p>';
            }
        }
    }

    function attachHeaderListeners() {
        // Language Buttons
        document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
        document.getElementById('lang-tr').addEventListener('click', () => setLanguage('tr'));
        document.getElementById('mobile-lang-en').addEventListener('click', () => setLanguage('en'));
        document.getElementById('mobile-lang-tr').addEventListener('click', () => setLanguage('tr'));

        // Mobile menu
        const loadedMobileMenuButton = document.getElementById('mobile-menu-button');
        const loadedMobileMenu = document.getElementById('mobile-menu');
        loadedMobileMenuButton?.addEventListener('click', () => {
            loadedMobileMenu.classList.toggle('hidden');
        });

        // Products Dropdown Logic
        const dropdownContainer = document.getElementById('products-dropdown-container');
        const dropdownMenu = document.getElementById('products-dropdown-menu');
        const dropdownIcon = document.getElementById('products-dropdown-icon');

        if (dropdownContainer && dropdownMenu && dropdownIcon) {
            let timeout;

            dropdownContainer.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                dropdownMenu.classList.remove('opacity-0', 'invisible');
                dropdownMenu.classList.add('opacity-100', 'visible');
                dropdownIcon.classList.add('rotate-180');
            });

            dropdownContainer.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    dropdownMenu.classList.remove('opacity-100', 'visible');
                    dropdownMenu.classList.add('opacity-0', 'invisible');
                    dropdownIcon.classList.remove('rotate-180');
                }, 200);
            });
        }
    }

    // Load commons
    loadSection('footer').then(() => {
        loadSection('header').then(() => {
            loadSection('whatsapp-button').then(() => {
                // If we are on the product detail page, call its function
                const pageId = document.body.id;
                if (pageId === 'product-detail') {
                    if (typeof loadProductDetail === 'function') {
                        loadProductDetail();
                    }
                }
            });
        });
    }).catch(error => console.error("Error loading footer:", error));
});