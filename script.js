fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const carouselInner = document.getElementById("carousel-inner");
    const itensPorLinha = 4;
    for (let i = 0; i < data.length; i += itensPorLinha) {
      let carouselItem = document.createElement("div");
      carouselItem.className = `carousel-item ${i === 0 ? "active" : ""}`;

      const container = document.createElement("div");
      container.className = "d-flex";

      for (let j = i; j < i + itensPorLinha; j++) {
        if (data[j]) {
          const product = data[j];
          const card = document.createElement("div");
          card.className = "card";
          card.classList.add('mb-4', 'mt-4')
          card.innerHTML = `
                    <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.description}</p>
                      <p class="card-text">Preço: $${product.price}</p>
                      <button type="button" class="btn btn-primary">Adicionar ao carrinho</button>
                    </div>
                  </div>
                    `;
          container.appendChild(card);
        }
      }
      carouselItem.appendChild(container);
      carouselInner.appendChild(carouselItem);
    }
  });
