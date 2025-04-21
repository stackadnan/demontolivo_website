function optimization(){


    // $(".post__image").each(function (){
    //     console.log(1)
    //     console.log(this)
    //     $(this).css("display","none")
    // })
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        }
    }
}
// window.onload = init;
// [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
//     img.setAttribute('src', img.getAttribute('data-src'));
//     img.onload = function() {
//         img.removeAttribute('data-src');
//     };
// });


window.addEventListener("load", optimization());

