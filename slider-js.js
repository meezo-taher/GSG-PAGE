var slideIndex = 1;
var time1 = 2000;
var time2 = 4000;
var time3 = 6000;
showSlide(slideIndex);


function plusSlides(n){

showSlide(slideIndex += n);

}


function currentSlide(n) {

showSlide(slideIndex = n);

}


function showSlide(n){

var i;

var slides = document.getElementsByClassName("myslides");

var dots = document.getElementsByClassName("dots");

if (n > slides.length) { slideIndex = 1};

if (n < 1) { slideIndex = slides.length};

for (i=0;i<slides.length;i++) {

slides[i].style.display = "none";


};

for (i=0;i<dots.length;i++) {

dots[i].className = dots[i].className.replace(" active","");

};

slides[slideIndex-1].style.display = "block";

dots[slideIndex-1].className += " active";

}
setTimeout("plusSlides(1)",time1);
setTimeout("plusSlides(2)",time2);
setTimeout("plusSlides(3)",time3);

/* event listener */
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '39') {
        plusSlides(1);
    }
    else if (e.keyCode == '37') {plusSlides(-1)}}
