// let myButton = document.querySelector('#myBtn');

// window.onscroll = function () {
//    scrollFunction();
// }

// function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       myButton.style.display = 'block';
//    }else{
//       myButton.style.display = 'none';
//    }
// }

// function topFunction() {
//    document.body.scrollTop = 0
//    document.documentElement.scrollTop = 0
// }

// let modal = document.getElementById('myModal');
// let btn = document.getElementById('myBtn');
// let close = document.getElementById('.close');


// btn.onclick = function() {
//    modal.style.display = 'block';
// }

// close.onclick = function() {
//    modal.style.display = 'none';
// }

// window.onclick = function (e) {
//    if (e === modal) {
//       modal.style.display = 'none';
//    }
// }

// let slideIndex = 1;

// showSlides(slideIndex);

// function plusSlides(n) {
//    showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//    showSlides(slideIndex = n);
// }

// function showSlides(n) {
//    let i;
//    let slides = document.getElementsByClassName('mySlides');
//    let dots = document.getElementsByClassName('dot');

//    if (n > slides.length) {
//       slideIndex = 1;
//    }

//    if (n < 1) {
//       slideIndex = slides.length;
//    }

//    for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = 'none';
//   }
  
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace('active', '');
//   }
  
//   slides[slideIndex -1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
  
  
// }