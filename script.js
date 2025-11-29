//Menu Salgado
const menuSalgado = [
  {
    name: "Frango &#127831 ",
    description:
      "Frango desfiado, mussarela, tomate, cebola, catupiry e orégano.",
  },
  {
    name: "Calabresa &#129363 ",
    description:
      "Calabresa fatiada, mussarela, cebola, tomate, catupiry e orégano.",
  },
  {
    name: "Carne Seca &#129385",
    description: "Carne seca, mussarela, bacon, cebola, tomate e catupiry.",
  },
  {
    name: "Vegetariana &#129382 ",
    description: "Mussarela, ricota, tomate, cebola, catupiry e rúcula.",
  },
  {
    name: "Pizza &#127829",
    description: "Mussarela, presunto, tomate, cebola, orégano e catupiry.",
  },
];

//Menu Doce
const menuDoce = [
  {
    name: "Banana &#127820",
    description: "Banana, leite condensado e canela.",
  },
  {
    name: "Banofee &#127856;",
    description: "Doce de leite, banana, canela, leite condensado.",
  },
  {
    name: "Chocolate &#127851 ",
    description: "Brigadeiro, leite condensado, morango e ganache.",
  },
  {
    name: "Romeu e Julieta &#128107",
    description: "Goiabada e Mussarela.",
  },
];

//Menu Bebidas
const menuBebidas = [
  {
    name: "Refrigerante 1L",
    description: "Coca-cola.",
    price: 9.0,
  },
  {
    name: "Energético Monster 473ml",
    description: "Ultra (branco) e Original (preto).",
    price: 12.0,
  },
  {
    name: "Água Mineral 500ml",
    description: "Mantenha-se Hidratado! &#128522",
    price: 3.0,
  },
  {
    name: "Coca-cola Lata",
    description: "Normal e Zero.",
    price: 5.0,
  },
];

//Tudo dentro dp loadMenu serve para carregar o menu dinamicamente na página
function loadMenu() {
  //Carregar o Menu Salgado
  menuSalgado.forEach((item) => {
    const container = document.getElementById("menu-salgado");
    const card = document.createElement("div");
    card.className = "menu-card";

    card.innerHTML = `
            <h3 id="centro">${item.name}</h3>
            <p class="description">${item.description}</p>
        `;

    container.appendChild(card);
  });
  //Carregar o Menu Doce
  menuDoce.forEach((item) => {
    const container = document.getElementById("menu-doces");
    const card = document.createElement("div");
    card.className = "menu-card";

    card.innerHTML = `
            <h3 id="centro">${item.name}</h3>
            <p class="description">${item.description}</p>
        `;

    container.appendChild(card);
  });
  //Carregar o Menu Bebidas
  menuBebidas.forEach((item) => {
    const container = document.getElementById("menu-bebidas");
    const card = document.createElement("div");
    card.className = "menu-card";

    card.innerHTML = `
            <h3 id="centro">${item.name}</h3>
            <p class="description" id="centro">${item.description}</p>
            <div class="price" id="centro">R$ ${item.price
              .toFixed(2)
              .replace(".", ",")}</div>
        `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadMenu);

//Carrossel de imagens
const track = document.querySelector(".carrossel-track");
const images = document.querySelectorAll(".carrossel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function atualizarCarrossel() {
  track.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  atualizarCarrossel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  atualizarCarrossel();
});
