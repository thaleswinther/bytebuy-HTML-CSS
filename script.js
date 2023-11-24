document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById('product-list');
        let row;
  
        products.forEach((product, index) => {
          if (index % 3 === 0) {
            row = document.createElement('div');
            row.classList.add('row');
            productList.appendChild(row);
          }
  
          const productCard = document.createElement('div');
          productCard.classList.add('col-md-4', 'mb-4', 'product-card');
          productCard.innerHTML = `
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Price: $${product.price}</p>
              </div>
            </div>
          `;
          row.appendChild(productCard);
        });
      });
  
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Formulário enviado com sucesso!');
      contactForm.reset();
    });
  });
  