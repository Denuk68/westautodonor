// Trucks hover effect
let trucks_card = document.querySelectorAll(".trucks .card");
let trucks_card_h1 = document.querySelectorAll(".trucks .card h1");
let trucks_card_img = document.querySelectorAll(".trucks .card  img");

for (let i = 0; i < trucks_card.length; i++) {
    trucks_card[i].addEventListener('mouseenter', function () {
        trucks_card[i].classList.add('hover');
        trucks_card_h1[i].classList.add('hover');
        trucks_card_img[i].classList.add('hover');
    })
};
for (let i = 0; i < trucks_card.length; i++) {
    trucks_card[i].addEventListener('mouseleave', function () {
        trucks_card[i].classList.remove('hover');
        trucks_card_h1[i].classList.remove('hover');
        trucks_card_img[i].classList.remove('hover');
    })
};

// Category hover effect
let category = document.querySelectorAll(".item__category");
let category_h1 = document.querySelectorAll(".item__category h1");
let category_img = document.querySelectorAll(".item__category .wrapper__img img");

for (let i = 0; i < category.length; i++) {
    category[i].addEventListener('mouseenter', function () {
        category[i].classList.add('hover');
        category_h1[i].classList.add('hover');
        category_img[i].classList.add('hover');
    })
};
for (let i = 0; i < category.length; i++) {
    category[i].addEventListener('mouseleave', function () {
        category[i].classList.remove('hover');
        category_h1[i].classList.remove('hover');
        category_img[i].classList.remove('hover');
    })
};

// Products hover effect
let products = document.querySelectorAll(".item__products");
let products_img = document.querySelectorAll(".item__products .wrapper__img img");

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('mouseenter', function () {
        products[i].classList.add('hover');
        products_img[i].classList.add('hover');
    })
};
for (let i = 0; i <  products.length; i++) {
    products[i].addEventListener('mouseleave', function () {
        products[i].classList.remove('hover');
        products_img[i].classList.remove('hover');
    })
};

// Scroll 
$(function(){
    $.fn.scrollToTop=function(){
      $(this).hide().removeAttr("href");
      if($(window).scrollTop()!="0"){
          $(this).fadeIn("slow")
    }
    var scrollDiv=$(this);
    $(window).scroll(function(){
      if($(window).scrollTop()=="0"){
      $(scrollDiv).fadeOut("slow")
      }else{
      $(scrollDiv).fadeIn("slow")
    }
    });
      $(this).click(function(){
        $("html, body").animate({scrollTop:0},"slow")
      })
    }
  });
  $(function() {$("#arrow__up").scrollToTop();});