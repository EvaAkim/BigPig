let randomBgImage = Math.floor((Math.random()*3));

document.body.style.backgroundImage = "url(img/"+randomBgImage+".svg)";
document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.overflow = "hidden";
document.body.style.webkitTransition = "0.6s";


setInterval(function(){
    animate();
}, 3000);

function animate(){
    let randomBgImage = Math.floor((Math.random()*3));

document.body.style.backgroundImage = "url(img/"+randomBgImage+".svg)";
document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.overflow = "hidden";
}

$(document).ready(function() {

    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu-link, .header-menu-link1, .header-burger-span').toggleClass('active');
    });

});
