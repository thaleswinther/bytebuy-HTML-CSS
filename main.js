document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('localizacao').style.display = 'none';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById('banner').style.display = 'none';
            const target = this.getAttribute('href').substring(1); 
            document.getElementById(target).style.display = 'block';
            if (target === 'formulario') {
                document.getElementById('localizacao').style.display = 'block';
            }
            if (target === 'localizacao') {
                document.getElementById('formulario').style.display = 'block';
                document.getElementById('localizacao').scrollIntoView();
            }
            if (target === 'produtos') {
                document.getElementById('banner').style.display = 'block';
            }
        });
    });
});