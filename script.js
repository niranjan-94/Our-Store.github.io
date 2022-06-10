let products = {
    data: [
        {
            productName: "Sweet Item",
            category: "Sweets",
            price: "10",
            image: "sweet-items-6.jpg"
        },
        {
            productName: "Cupcake Item",
            category: "Cupcake",
            price: "5",
            image: "cupcake-item-2.jpg"
        },
        {
            productName: "Sweet Item",
            category: "Sweets",
            price: "10",
            image: "sweet-items-1.jpg"
        },
        {
            productName: "Doughnut Item",
            category: "Doughnut",
            price: "10",
            image: "doughnut-item-3.jpg"
        },
        
        {
            productName: "Sweet Item",
            category: "Sweets",
            price: "10",
            image: "sweet-items-2.jpg"
        },
        {
            productName: "Cake Item",
            category: "Cake",
            price: "15",
            image: "cake-item-1.jpg"
        },
        {
            productName: "Sweet Item",
            category: "Sweets",
            price: "10",
            image: "sweet-items-3.jpg"
        },
        {
            productName: "Sweet Item",
            category: "Sweets",
            price: "10",
            image: "sweet-items-4.jpg"
        },        {
            productName: "Sweet Item",
            category: "Sweets",
            price: "10",
            image: "sweet-items-5.jpg"
        },
        {
            productName: "Cake Item",
            category: "Cake",
            price: "15",
            image: "cake-item-2.jpg"
        },
        {
            productName: "Cake Item",
            category: "Cake",
            price: "15",
            image: "cake-item-3.jpg"
        },
        {
            productName: "Cupcake Item",
            category: "Cupcake",
            price: "5",
            image: "cupcake-item-1.jpg"
        },
        {
            productName: "Cupcake Item",
            category: "Cupcake",
            price: "5",
            image: "cupcake-item-3.jpg"
        },
        {
            productName: "Doughnut Item",
            category: "Doughnut",
            price: "10",
            image: "doughnut-item-2.jpg"
        },
        {
            productName: "Doughnut Item",
            category: "Doughnut",
            price: "10",
            image: "doughnut-item-1.jpg"
        }
    ],
};

for(let i of products.data) {
  //Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  //image 
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName;
  container.appendChild(name);

  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);  
}

//filter Items by Category
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");

  //To active the button
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
     }
  });

  //To filter cards as per the button clicked
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
    
}

//Filter Items by Search
search = () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  
  //To display the cards which match the inputs
  elements.forEach((element, index) => {
    if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
};
  
//Displaying all items initially
window.onload = () => {
    filterProduct("all");
};
  