$(function () {
  AOS.init();
  
  $(".show-VAT").on("click", function(){
    $(".load-VAT").toggleClass("show-form-VAT");
  });

  $(".click-round-trip").on("click", function(){
    $("#round-trip").toggleClass("show-round-trip");
  });

  //scroll menu
  $(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		 windowTop  ? $('header').addClass('header-sticky') : $('header').removeClass('header-sticky');
     windowTop > 500 ? $('.scroll-up').addClass('show') : $('.scroll-up').removeClass('show');
		// windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});

  //get ngôn ngữ
  $("#get-lang").on("click", "a", function () {
      var atr = $(this).text();
      var img = $(this).find("img").attr("src");
      $("#inner-lang").html(atr);
      $("#inner-img").attr('src',img);
  });
});
 
$(".click-edit").on("click", function(){
  $(".edit").removeAttr("disabled");
});
// $(window).scroll(function() {    
//   var scroll = $(window).scrollTop();

//   if (scroll >= 50) {
//       $("header").addClass("header-sticky");
//   } else {
//       $("header").removeClass("header-sticky");
//   }
// });

function phoneCountryJs(){
  var input = document.querySelector("#phoneList");
  window.intlTelInput(input, {
    initialCountry: "vn",
    utilsScript: "js/utils.js", 
  });
}

function changeItemOrder(){
  $("#orderQuantity").on("change",
  function (e) {
      var quantity = $(this).val();
      var price = $("#priceTicket").val();
      var total = quantity * price;
      $("#total").text(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total));
  });
}

function bannerJs() {
  $(".banner-owl").owlCarousel({
      loop: true,
      nav: true,
      // animateOut: "fadeOut",
      smartSpeed: 800,
      navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
      autoplay: true,
      autoplayTimeout: 8000,
      items: 1
  });
}

function slideHomeJs(){
  $(".order-room").owlCarousel({
    margin: 20,
    autoplay: false,
    //lazyLoad: true,
    responsiveClass: true,
    responsive: {
        0: {
            margin: 10,
            items: 2
        },
        600: {
            margin: 15,
            items: 3
        },
        1000: {
            items: 4
        }
    }
  });
}

function bannerServiceJs() {
  $(".banner-detail-owl").owlCarousel({
      loop: true,
      nav: true,
      // animateOut: "fadeOut",
      smartSpeed: 600,
      navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
      autoplay: true,
      autoplayTimeout: 8000,
      items: 1
  });
}

function swiperJs(){
  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });
}