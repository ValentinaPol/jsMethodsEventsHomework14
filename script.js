
///// Task 5

var infoPrice = document.querySelector('#task5');
var btnCalculatePrice = document.querySelector('#calculate-price');
var currentCountProduct = 0;
var totalPrice = document.querySelector('#current-total');
var changeCountProduct = document.querySelectorAll('#task5 a');
var countProduct = changeCountProduct[0].nextElementSibling;

function decrementUnitProduct(){
    if (currentCountProduct > 0){
         --currentCountProduct;
        countProduct.value = currentCountProduct;
    }     
}

changeCountProduct[0].addEventListener('click', decrementUnitProduct);


function incrementUnitProduct(){
    ++currentCountProduct;
    countProduct.value = currentCountProduct;
}

changeCountProduct[1].addEventListener('click', incrementUnitProduct);

function calculateTotalPrice(){
    var priceUnitProduct = infoPrice.children[1];
    totalPrice.innerHTML = countProduct.value * priceUnitProduct.textContent;
}

btnCalculatePrice.addEventListener('click', calculateTotalPrice);


////// Task 6

var products = document.querySelectorAll('#current-cart-items .card');
//var price = document.querySelector('#current-cart-items .price');
//var btnChangeCount = document.querySelectorAll('#current-cart-items a');
//var valueCurrentCount = document.querySelector('#current-cart-items .total');
var btnGetTotalPrices = document.querySelector('#calculate-all-prices');
var resultPrice = document.querySelector('#current-total-items');


for(let product of products){
    product.children[2].children[3].addEventListener('click', function(){
        if(product.children[2].children[4].value > 0){
            --product.children[2].children[4].value;
        }
    });
}

for(let product of products){
    product.children[2].children[5].addEventListener('click',  function(){
        ++product.children[2].children[4].value;
    });
}

function calculateTotalPrices(){
    let sum = 0;
    for(let product of products){
        sum += +product.children[2].children[4].value * product.children[2].children[1].textContent;
    }
    resultPrice.innerHTML = sum;
}

btnGetTotalPrices.addEventListener('click', calculateTotalPrices);


///// Task 7

var inputNewText = document.getElementsByName('input-info');

inputNewText[0].addEventListener('keydown', function(event){
    if(event.key === 'Enter' && inputNewText[0].value.trim() !== ''){
        var newText = document.createElement('p');
        newText.setAttribute('class', 'new_text');
        newText.innerText = inputNewText[0].value;
        inputNewText[0].after(newText);
        inputNewText[0].value = '';
    }
})