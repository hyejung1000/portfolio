document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("transparent");
        } else {
            header.classList.remove("transparent");
        }
    });
});


$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$( '.c p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$( '.d p' ).toggleClass( 'ab' );
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});


// Q&A

// $(function(){

	
// 	$(".right> li> .font0").click(function(){
// 		$(this).next().slideToggle();
// 		$( '.c p' ).toggleClass( 'ab' );
// 	});
	
// 		$(".right> li> .font1").click(function(){
// 		$(this).next().slideToggle();
// 		$( '.d p' ).toggleClass( 'ab' );
// 	});
	

//   $(".right> li> .font2").click(function(){
// 		$(this).next().slideToggle();
// 		$( '.e p' ).toggleClass( 'ab' );
// 	});
	
// 		$(".right> li> .font3").click(function(){
// 		$(this).next().slideToggle();
// 		$( '.f p' ).toggleClass( 'ab' );
// 	});




// });

// $(function(){
// 	$(".right> li> ul").click(function(){
// 		$(this).children().children("img").toggleClass("turn");
// 	});
// });

