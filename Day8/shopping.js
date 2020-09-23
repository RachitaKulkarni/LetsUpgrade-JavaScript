let products = [
  {
    id: 1,
    name: "Short Dress",
    size: "L",
    color: "black",
    price: 1200,
    image: "product1.jpg",
    description: "Body fit dress",
  },
  {
    id: 2,
    name: "Long Dress",
    size: "M",
    color: "Red",
    price: 1500,
    image: "product2.jpg",
    description: "Decent look",
  },

  {
    id: 3,
    name: "Salwar",
    size: "S",
    color: "Yellow",
    price: 900,
    image: "product3.jpg",
    description: "Ethnic Look",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "XS",
    color: "Blue",
    price: 1300,
    image: "product5.jpeg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 999,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },
  {
      id: 7,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product7.jpeg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 8,
      name: "Casual Tshirt",
      size: "L",
      color: "Back",
      price: 1500,
      image: "product8.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 9,
      name: "Semi Formals",
      size: "M",
      color: "Grey",
      price: 1500,
      image: "product9.jpg",
      description: "Good looking Dress",
    },
    {
      id: 10,
      name: "Indian Dress",
      size: "XL",
      color: "HeBluenna",
      price: 3500,
      image: "product10.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 11,
      name: "Palazzo",
      size: "M",
      color: "Black & White",
      price: 1800,
      image: "product11.jpg",
      description: "Western look",
    },
    {
      id: 12,
      name: "Blue Jeans",
      size: "M",
      color: "blue",
      price: 2500,
      image: "product12.jpg",
      description: "Good looking",
    },
];

cart = [];
let count = 0;

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}


function addToCart(id) {
  let pro = getProductByID(products, id);
  cart.push(pro);
   ++count;
  document.getElementsByClassName("counter")[0].innerHTML= `Cart (${count})`;
 console.log(cart);
 console.log(count);
 displayProducts(cart, "cart");
}  
function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  --count;
  document.getElementsByClassName("counter")[0].innerHTML= `Cart (${count})`;
  console.log(count);

  displayProducts(cart, "cart");
}