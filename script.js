// start
// selectors
const userBasketCart = document.getElementById("userBasketCart");
const preloadSite = document.getElementById("preloadSite");
const userBasketBadge = document.getElementById("userBasketBadge");
const productLength = document.getElementById("productLength");
const productPurchaseBtn = document.getElementById("productPurchaseBtn");
const userProductsBox = document.getElementById("userProductsBox");
const productsContainer = document.querySelector(".products-container");
const userProductsContainer = document.querySelector("#productsContainer");
const searchHeaderBtn = document.querySelector("#searchHeaderBtn");
const headerSearch__Input = document.querySelector("#header-search__Input");
// const slider = document.querySelector(".slider");
// all products shop array
const allLaptopProduct = [
  {
    id: 1,
    name: "Surface Laptop GO-F",
    brand: "Microsoft",
    cover: "images/لپ تاپ 12.4 اینچی مایکروسافت مدل Surface Laptop GO-F.jpg",
    price: 1000,
    point: 5,
    length: 0,
  },
  {
    id: 2,
    name: "MacBook Air MGN63 2020",
    brand: "Apple",
    cover: "images/لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020.jpg",
    price: 1100,
    point: 5,
    length: 0,
  },
  {
    id: 3,
    name: "MacBook Air MGND3 2020",
    brand: "Apple",
    cover: "images/لپ تاپ 13 اینچی اپل مدل MacBook Air MGND3 2020.jpg",
    price: 1300,
    point: 4.5,
    length: 0,
  },
  {
    id: 4,
    name: "Victus 15-FA0031DX-A",
    brand: "Hp",
    cover:
      "images/لپ تاپ 15.6 اینچی اچ‌پی مدل Victus 15-FA0031DX-A - کاستوم شده.jpg",
    price: 800,
    point: 5,
    length: 0,
  },
  {
    id: 5,
    name: "GF63 Thin 10SC",
    brand: "Msi",
    cover: "images/لپ تاپ 15.6 اینچی ام اس آی مدل GF63 Thin 10SC.jpg",
    price: 1150,
    point: 4,
    length: 0,
  },
  {
    id: 6,
    name: "ROG Strix G513IE-HN060",
    brand: "Asus",
    cover: "images/لپ تاپ 15.6 اینچی ایسوس مدل ROG Strix G513IE-HN060.jpg",
    price: 1500,
    point: 5,
    length: 0,
  },
  {
    id: 7,
    name: "Raider GE66 12UGS",
    brand: "Asus",
    cover: "images/لپ تاپ 15.6 اینچی ام اس آی مدل Raider GE66 12UGS.jpg",
    price: 1350,
    point: 5,
    length: 0,
  },
  {
    id: 8,
    name: "X543MA-GQ1012",
    brand: "Asus",
    cover: "images/لپ تاپ 15.6 اینچی ایسوس مدل X543MA-GQ1012.jpg",
    price: 600,
    point: 4,
    length: 0,
  },
  {
    id: 9,
    name: "Hp noteBook",
    brand: "Hp",
    cover:
      "images/لپ تاپ 15.6 اینچی اچ‌پی مدل Victus 15-FA0031DX-A - کاستوم شده.jpg",
    price: 820,
    point: 4.5,
    length: 0,
  },
];
// user basket array
let userBasket = [];
// create all products to website
function createProductBox(array) {
  productsContainer.innerHTML = "";
  let allProductsFragment = document.createDocumentFragment();
  // let allProductsFragment = new documentFragment();


  let productContent,
    product,
    productCover,
    productCoverImg,
    productDetails,
    productDescription,
    productPrice,
    productPriceNumber,
    productPriceSpan,
    productPoint,
    product_name,
    productName,
    addUserProductBtn;
  array.forEach(function (productItem) {
    // productsContainer.insertAdjacentHTML(
    //   "beforeend",
    //   '<div class="product-content"><div id="product"><div class="product-cover"><img src="' +
    //     productItem.cover +
    //     '" alt="product img"/></div><div class="product-details"><div class="product-description"><div class="productPrice"><h3 id="productPriceNumber">' +
    //     productItem.price +
    //     '</h3><span><i class="fa fa-dollar"></i></span></div><div class="productPoint">' +
    //     productsPointStars(productItem.point) +
    //     '</div></div><div class="product-name"><h2 id="productName">' +
    //     productItem.name +
    //     '</h2></div><button class="btn btn-primary" id="addUserProductBtn" onclick="addProductToBasket(' +
    //     productItem.id +
    //     ')">Add to cart</button></div></div></div>'
    // );
    productContent = document.createElement("div");
    productContent.classList.add("product-content");
    product = document.createElement("div");
    product.setAttribute("id", "product");
    productCover = document.createElement("div");
    productCover.classList.add("product-cover");
    productCoverImg = document.createElement("img");
    productCoverImg.setAttribute("src", productItem.cover);
    productCoverImg.setAttribute("alt", "product img");
    productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    productDescription = document.createElement("div");
    productDescription.classList.add("product-description");
    productPrice = document.createElement("div");
    productPrice.classList.add("productPrice");
    productPriceNumber = document.createElement("h3");
    productPriceNumber.setAttribute("id", "productPriceNumber");
    productPriceNumber.innerHTML = productItem.price;
    productPriceSpan = document.createElement("span");
    productPriceSpan.innerHTML = '<i class="fa fa-dollar"></i>';
    productPoint = document.createElement("div");
    productPoint.classList.add("productPoint");
    productPoint.innerHTML = productsPointStars(productItem.point);
    product_name = document.createElement("div");
    product_name.classList.add("product-name");
    productName = document.createElement("h2");
    productName.setAttribute("id", "productName");
    productName.innerText = productItem.name;
    addUserProductBtn = document.createElement("button");
    addUserProductBtn.className = "btn btn-primary";
    addUserProductBtn.setAttribute("id", "addUserProductBtn");
    // addUserProductBtn.setAttribute("onclick", );
    addUserProductBtn.addEventListener("click", function () {
      addProductToBasket(productItem.id);
    });
    addUserProductBtn.innerText = "Add to cart";
    // add elements to html
    productCover.appendChild(productCoverImg);
    product_name.appendChild(productName);
    productPrice.append(productPriceNumber, productPriceSpan);
    productDescription.append(productPrice, productPoint);
    productDetails.append(productDescription, product_name, addUserProductBtn);
    product.append(productCover, productDetails);
    productContent.appendChild(product);
    // productsContainer.appendChild(productContent);
    allProductsFragment.appendChild(productContent);
  });
  productsContainer.appendChild(allProductsFragment);
}
// product points function
let star = '<i class="fa fa-star"></i>';
let halfStar = '<i class="fa fa-star-half"></i>';
function productsPointStars(point) {
  let stars = "";
  for (let index = 0; index < 5; index++) {
    if (point > 0.5) {
      stars += star;
    } else if (point === 0.5) {
      stars += halfStar;
    }
    point--;
  }
  return stars;
}
// add user basket to local storage function
function setUserBasketToLocalStorage(array) {
  localStorage.setItem("userBasket", JSON.stringify(array));
}
// to take user basket array from local storage
function getUserBasketToLocalStorage() {
  let userBasketLocal = JSON.parse(localStorage.getItem("userBasket"));
  if (userBasketLocal) {
    userBasket = userBasketLocal;
  } else {
    userBasket = [];
  }
}
// add product to user basket
function addProductToBasket(id) {
  // console.log(id);
  let product = allLaptopProduct.find(function (item) {
    return item.id === id;
  });
  // changeUserBasketItem(id);
  let userBasketProduct = userBasket.find(function (userProductItem) {
    return userProductItem.id === id;
  });
  if (userBasketProduct !== undefined) {
    // userBasketProduct.length++;
    userProductNumberPlusLength(id);
  } else {
    // userProductNumberPlusLength(id);
    product.length++
    userBasket.push(product);
  }
  setUserBasketToLocalStorage(userBasket);
  userProductLength();
  userProductGeneratorBasket(userBasket);
  calculatorUserProductsPrice();
}
// user container products
function userProductGeneratorBasket(array) {
  let allUserProductsFragment = document.createDocumentFragment();
  userProductsContainer.innerHTML = "";
  let userProduct,
    userProduct__img,
    userImg,
    userProductDescription,
    userProductName,
    userProductBrand,
    userRemoveProductBasketBtn,
    userProductTotal,
    userProductPrice,
    userProductPriceNumber,
    userProductNumberLength,
    userProductNumberMinus,
    userProductNumberPlus,
    userProductNumberINput;
  array.forEach(function (userProductItem) {
    userProduct = document.createElement("div");
    userProduct.setAttribute("id", "userProduct");
    userProduct__img = document.createElement("div");
    userProduct__img.classList.add("product__img");
    userImg = document.createElement("img");
    userImg.setAttribute("src", userProductItem.cover);
    userImg.setAttribute("alt", "product image");
    userProductDescription = document.createElement("div");
    userProductDescription.classList.add("user-product-description");
    userProductName = document.createElement("p");
    userProductName.setAttribute("id", "userProductName");
    userProductName.innerHTML = userProductItem.name;
    userProductBrand = document.createElement("p");
    userProductBrand.setAttribute("id", "productBrand");
    userProductBrand.innerHTML = userProductItem.brand;
    userRemoveProductBasketBtn = document.createElement("button");
    userRemoveProductBasketBtn.setAttribute("id", "removeProductBasket");
    userRemoveProductBasketBtn.classList.add("btn");
    userRemoveProductBasketBtn.innerHTML = "Remove";
    userRemoveProductBasketBtn.addEventListener("click", function () {
      removeProductFromUserBasket(userProductItem.id);
    });
    userProductTotal = document.createElement("div");
    userProductTotal.classList.add("product-total");
    userProductPrice = document.createElement("div");
    userProductPrice.classList.add("product-price");
    userProductPriceNumber = document.createElement("p");
    userProductPriceNumber.setAttribute("id", "productPrice");
    userProductPriceNumber.innerHTML = userProductItem.price;
    userProductNumberLength = document.createElement("div");
    userProductNumberLength.classList.add("product-number");
    userProductNumberMinus = document.createElement("span");
    userProductNumberMinus.setAttribute("id", "productNumberMinus");
    userProductNumberMinus.innerHTML = '<i class="fa fa-minus"></i>';
    userProductNumberMinus.addEventListener("click", function () {
      userProductNumberMinusLength(userProductItem.id, userProductNumberMinus);
    });
    userProductNumberPlus = document.createElement("span");
    userProductNumberPlus.setAttribute("id", "productNumberPlus");
    userProductNumberPlus.innerHTML = '<i class="fa fa-plus"></i>';
    userProductNumberPlus.addEventListener("click", function () {
      userProductNumberPlusLength(userProductItem.id);
    });
    userProductNumberINput = document.createElement("input");
    userProductNumberINput.setAttribute("type", "text");
    userProductNumberINput.setAttribute("maxlength", "1");
    userProductNumberINput.setAttribute("min", "0");
    userProductNumberINput.setAttribute("max", "5");
    userProductNumberINput.setAttribute("value", userProductItem.length);
    userProductNumberINput.setAttribute("id", "productNumberINput");
    userProductNumberINput.setAttribute("readonly", "");
    userProductNumberINput.classList.add("form-control");
    userProductNumberLength.append(
      userProductNumberMinus,
      userProductNumberINput,
      userProductNumberPlus
    );
    userProductPrice.append(userProductPriceNumber);
    userProductPrice.innerHTML += '<i class="fa fa-dollar"></i>';
    userProductTotal.append(userProductPrice, userProductNumberLength);
    userProductDescription.append(
      userProductName,
      userProductBrand,
      userRemoveProductBasketBtn
    );
    userProduct__img.appendChild(userImg);
    userProduct.append(
      userProduct__img,
      userProductDescription,
      userProductTotal
    );
    allUserProductsFragment.appendChild(userProduct);
  });
  userProductsContainer.appendChild(allUserProductsFragment);
}

function userProductNumberMinusLength(id, btn) {
  let product = userBasket.find(function (userProductItem) {
    return userProductItem.id === id;
  });
  if (product.length > 1) {
    product.length--;
  } else {
    removeProductFromUserBasket(id);
  }
  userProductGeneratorBasket(userBasket);
  calculatorUserProductsPrice();
  setUserBasketToLocalStorage(userBasket);
  userProductLength();
}
function userProductNumberPlusLength(id) {
  let product = userBasket.find(function (userProductItem) {
    return userProductItem.id === id;
  });
  if (product.length < 5) {
    product.length++;
  }
  userProductGeneratorBasket(userBasket);
  calculatorUserProductsPrice();
  setUserBasketToLocalStorage(userBasket);
  userProductLength();
}
// remove product from user basket function
function removeProductFromUserBasket(id) {
  let productIndex = userBasket.findIndex(function (userProductItem) {
    return userProductItem.id === id;
  });
  userBasket[productIndex].length = 0;
  userBasket.splice(productIndex, 1);
  userProductGeneratorBasket(userBasket);
  setUserBasketToLocalStorage(userBasket);
  userProductLength();
  calculatorUserProductsPrice();
  // console.log(product);
}
// user product length
function userProductLength() {
  let userBasketLength = 0;
  userBasket.forEach(function (item) {
    userBasketLength += item.length;
  });
  userBasketBadge.innerHTML = userBasketLength;
  productLength.innerHTML = userBasketLength;
  // console.log(userBasketLength);
  if (userBasket.length === 0) {
    productPurchaseBtn.className = "btn btn-secondary";
  } else {
    productPurchaseBtn.className = "btn btn-success";
  }
}
function calculatorUserProductsPrice() {
  let mainPricesAllProducts = 0;
  let totalPrice = document.getElementById("totalPrice");
  mainPricesAllProducts = 0;
  userBasket.forEach(function (product) {
    mainPricesAllProducts += product.price * product.length;
  });
  totalPrice.innerHTML = mainPricesAllProducts;
  // console.log(mainPricesAllProducts);
}

// search product
const filters = {
  searchItem: "",
};
const showMessageNotProduct = document.getElementById("showMessageNotProduct");
searchHeaderBtn.addEventListener("click", function () {
  filters.searchItem = headerSearch__Input.value;
  searchProducts(allLaptopProduct, filters);
});
headerSearch__Input.addEventListener("input", function (e) {
  // if (e.key === "Enter" || ) {
    filters.searchItem = e.target.value;
    searchProducts(allLaptopProduct, filters);
  // }
});

function searchProducts(_allLaptopProduct, _filters) {
  const filteredProduct = _allLaptopProduct.filter(function (item) {
    return item.name.toLowerCase().includes(_filters.searchItem.toLowerCase());
  });
  // slider.style.display = "none";
  createProductBox(filteredProduct);
  // console.log(filteredProduct);
  // slider.style.display = "none";
  // showMessageNotProduct.style.display = "none";
  // allLaptopProduct.forEach(function (product) {
  //   productNameArray = product.name.split(" ");
  //   // console.log(productNameArray);
  //   for (let i = 0; i < productNameArray.length; i++) {
  //     productNameSlice = productNameArray[i].slice(
  //       0,
  //       headerSearch__Input.value.length
  //     );
  //     // headerSearch__Input.value[0].toLowerCase();
  //     newSearchInputValue = headerSearch__Input.value.split(" ");
  //     // newSearchInputValue[0][0] = newSearchInputValue[0][0].toUpperCase();
  //     if (productNameSlice.toLowerCase() === newSearchInputValue[i]) {
  //       if (!allProductToSearchArray.includes(product)) {
  //         allProductToSearchArray.push(product);
  //       }
  //       // console.log(allUsers);
  //     }
  //   }
  // });
  // if (allProductToSearchArray.length === 0) {
  //   showMessageNotProduct.style.display = "block";
  // }
  // // console.log(allProductToSearchArray);
  // productsContainer.innerHTML = "";
  // createProductBox(allProductToSearchArray);
  // allProductToSearchArray = [];
}
// headerSearch__Input;
// slider
// const prevImageSliderBtn = document.getElementById("prevImageSliderBtn");
// const nextImageSliderBtn = document.getElementById("nextImageSliderBtn");
// const sliderContainerImg = document.querySelector(".sliderContainerImg");
// const sliderContainer = document.querySelector(".slider-container");
// const allImgSrc = [
//   "images/slider-1.jpg",
//   "images/slider-2.jpg",
//   "images/slider-3.jpg",
//   "images/slider-4.jpg",
//   "images/slider-5.jpg",
//   "images/slider-6.jpg",
// ];
// let timingChangeImg = 4000;
// let circleDivElement;
// const paginationSlider__btn = document.querySelector(".pagination-slider__btn");
// for (let i = 0; i < allImgSrc.length; i++) {
//   circleDivElement = document.createElement("div");
//   circleDivElement.classList.add("circle");
//   circleDivElement.dataset.index = i;
//   paginationSlider__btn.appendChild(circleDivElement);
// }
// const circles = document.querySelectorAll(".circle");
// circles[0].classList.add("circleActive");
// let sliderImgIndex = 0;
// function nextImgSlider() {
//   sliderImgIndex++;
//   if (sliderImgIndex > allImgSrc.length - 1) {
//     sliderImgIndex = 0;
//   }
//   sliderContainerImg.setAttribute("src", allImgSrc[sliderImgIndex]);
//   circles.forEach(function (item) {
//     item.classList.remove("circleActive");
//   });
//   circles[sliderImgIndex].classList.add("circleActive");
//   timingChangeImg = 4000;
// }
// prevImageSliderBtn.addEventListener("click", function () {
//   sliderImgIndex--;
//   if (sliderImgIndex < 0) {
//     sliderImgIndex = allImgSrc.length - 1;
//   }
//   sliderContainerImg.setAttribute("src", allImgSrc[sliderImgIndex]);
//   circles.forEach(function (item) {
//     item.classList.remove("circleActive");
//   });
//   circles[sliderImgIndex].classList.add("circleActive");
//   timingChangeImg = 4000;
// });
// nextImageSliderBtn.addEventListener("click", nextImgSlider);
// circles.forEach(function (circle) {
//   circle.addEventListener("click", function (event) {
//     circles.forEach(function (item) {
//       item.classList.remove("circleActive");
//     });
//     event.target.classList.add("circleActive");
//     sliderImgIndex = event.target.dataset.index;
//     sliderContainerImg.setAttribute("src", allImgSrc[sliderImgIndex]);
//     timingChangeImg = 4000;
//   });
// });
// let sliderNextImgTime = setInterval(function () {
//   nextImgSlider();
// }, timingChangeImg);
// end slider js code
// set event for elements
userBasketCart.addEventListener("click", function () {
  userProductsBox.classList.toggle("userProductsBoxActive");
  // window.addEventListener("click", function () {
  //   userProductsBox.classList.remove("userProductsBoxActive");
  // });
});
// set load event for window
window.addEventListener("load", function () {
  createProductBox(allLaptopProduct);
  getUserBasketToLocalStorage();
  userProductLength();
  userProductGeneratorBasket(userBasket);
  calculatorUserProductsPrice();
  preloadSite.style.display = "none";
});
