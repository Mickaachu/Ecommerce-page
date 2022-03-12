//SLIDE ANIMATION
let slidePosition = 1;
Slideshow(slidePosition);

//forward/backward controls
function plusSlides(n) {
  Slideshow(slidePosition += n);
}

//image controls
function currentSlide(n) {
    Slideshow(slidePosition = n);
}

function Slideshow(n) {
    let i;
    let slides = document.getElementsByClassName("product-img");

    if (n > slides.length) {
        slidePosition = 1;
    }
    if (n < 1) {
        slidePosition  = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slidePosition-1].style.display = "block";
}
//adding items to cart
//quantity
let currentquantity = 0;
const addquantity = document.getElementById("addquantity");
const minusquantity = document.getElementById("minusquantity");
let itemquantity = document.getElementById("item-quantity");
const cartempty = document.getElementById("cart-empty");
const cartitems = document.getElementById("cart-with-items");

addquantity.onclick = function(){
    currentquantity++;
    itemquantity.innerHTML = currentquantity;
}
minusquantity.onclick = function(){
    if(currentquantity > 0){
        currentquantity--;
        itemquantity.innerHTML = currentquantity;
    }
    else {
        currentquantity = 0;
        itemquantity.innerHTML = currentquantity;
        

    }
}


//SIDENAV

const openmenu = document.getElementById("openmenu");
const closemenu = document.getElementById("closemenu");
const menunav = document.getElementById("mySidenav");
const grayed = document.getElementById("grayed");





openmenu.onclick = function() {
    openmenu.classList.toggle('active');
    menunav.classList.toggle('active');
    grayed.classList.toggle('active');
    if (currentquantity === 0){
        
    }
    
}
closemenu.onclick = function() {
    openmenu.classList.remove('active');
    menunav.classList.remove('active');
    grayed.classList.remove('active');
    
}

//SHOPPING CART
   
const cart = document.getElementById("cart");
const cartnav = document.querySelector(".cart-nav");

cart.onclick = function(){
    cart.classList.toggle('active');
    cartnav.classList.toggle('active');
}


//add to cart
const addtocart = document.getElementById('atc-btn');
let addnumber = 0
const cartwithitems = document.getElementById("cart-with-items");
const emptycart = document.getElementById("cart-empty");
let totalprice = document.getElementById("total-order-price");
let totalpricevalue = 0;

addtocart.onclick = function(){	
   
    let qntnumber = document.getElementById('qnt-number');
    
    if(currentquantity === 0){
        alert("Please add quantity");
        emptycart.style.display = "block";
        cartwithitems.style.display = "none";
    }
    else{
        emptycart.style.display = "none";
        cartwithitems.style.display = "block";
        addnumber+=currentquantity;
        
    }
    totalpricevalue = 125 * addnumber;
    qntnumber.innerHTML = addnumber;
    
    totalprice.innerHTML ='$' + totalpricevalue;
    
}
//total price

//delete item 
const deleteitem = document.getElementById('order-delete');
deleteitem.onclick = function(){
    emptycart.style.display = "block";
    cartwithitems.style.display = "none";
    addnumber = 0;
}
//images 
const img1 = document.getElementById('dsk-prod1');
const img2 = document.getElementById('dsk-prod2');
const img3 = document.getElementById('dsk-prod3');
const img4 = document.getElementById('dsk-prod4');
const thmb1 = document.getElementById('thmb-prd1');
const thmb2 = document.getElementById('thmb-prd2');
const thmb3 = document.getElementById('thmb-prd3');
const thmb4 = document.getElementById('thmb-prd4');

thmb1.onclick = function(){
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    thmb1.style.opacity = "0.5";
    thmb2.style.opacity = "1";
    thmb3.style.opacity = "1";
    thmb4.style.opacity = "1";
}
thmb2.onclick = function(){	
    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
    img4.style.display = "none";
    thmb2.style.opacity = "0.5";
    thmb1.style.opacity = "1";
    thmb3.style.opacity = "1";
    thmb4.style.opacity = "1";

}
thmb3.onclick = function(){
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
    img4.style.display = "none";
    thmb3.style.opacity = "0.5";
    thmb1.style.opacity = "1";
    thmb2.style.opacity = "1";
    thmb4.style.opacity = "1";


}
thmb4.onclick = function(){
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "block";
    thmb4.style.opacity = "0.5";
    thmb1.style.opacity = "1";
    thmb2.style.opacity = "1";
    thmb3.style.opacity = "1";
}
