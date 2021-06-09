// Trucks hover effect
let trucks_card = document.querySelectorAll(".trucks .card");
let trucks_card_h1 = document.querySelectorAll(".trucks .card h1");
let trucks_card_img = document.querySelectorAll(".trucks .card  img");

for(let i = 0; i < trucks_card.length; i++){
    trucks_card[i].addEventListener('mouseenter',function(){
        trucks_card[i].classList.add('hover');
        trucks_card_h1[i].classList.add('hover');
        trucks_card_img[i].classList.add('hover');
    })
};
for(let i = 0; i < trucks_card.length; i++){
    trucks_card[i].addEventListener('mouseleave',function(){
        trucks_card[i].classList.remove('hover');
        trucks_card_h1[i].classList.remove('hover');
        trucks_card_img[i].classList.remove('hover');
    })
};