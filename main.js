document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('section').forEach(section => {
        const id = section.getAttribute('id');
        if (id !== 'banner' && id !== 'productCarousel' && id !== 'footer') {
            section.style.display = 'none';
        }
    });

    document.getElementById('banner').style.display = 'block';
    document.getElementById('productCarousel').style.display = 'block';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            
            document.getElementById('banner').style.display = 'block';
            document.getElementById('productCarousel').style.display = 'block';
            
            const target = this.getAttribute('href').substring(1); 
            document.getElementById(target).style.display = 'block';
            
            if (target === 'formulario') {
                document.getElementById('localizacao').style.display = 'block';
                document.getElementById('productCarousel').style.display = 'none';
                document.getElementById('banner').style.display = 'none';
            }
            if (target === 'localizacao') {
                document.getElementById('formulario').style.display = 'block';
                document.getElementById('localizacao').scrollIntoView();
                document.getElementById('productCarousel').style.display = 'none';
                document.getElementById('banner').style.display = 'none';
            }
        });
    });
});
