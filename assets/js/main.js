$(document).ready(
    function(){
      // loading-screen
      $(".loader-screen").fadeOut(250)
      $("body").css("overflow","auto")
      // banner swiper
        var banner_swiper = new Swiper('.banner-swiper', {
            spaceBetween: 30,
            loop:true,
            autoplay:true,
            speed:500,
            effect: 'fade',
            simulateTouch:false,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
          // banner animation
        banner_swiper.on('slideChange', function () {
          bannerWow=new WOW(
            {
              animateClass:'animatedSlide'
            }
          );
        });
          
          
         $(".banner-swiper .swiper-button-prev,.banner-swiper .swiper-button-next").on("click",function(){
          bannerWow=new WOW(
            {
              animateClass:'animatedSlide'
            }
          );
         })

         new WOW().init()
        //  client swiper
        var swiper = new Swiper('.swiper-container.client-swiper', {
          slidesPerView: 3,
          centeredSlides: true,
          loop: true,
          spaceBetween: 0,
          slideToClickedSlide:true,
          567: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        });
        $(".swiper-slide").on("click",function(){
          var client=$(this).data("show")
          $(".opnion").fadeOut(0)
          $(`#${client}`).fadeIn(500)
        })

        // fixed-nav
        $(window).bind("scroll",function(){
          if($(window).scrollTop()>500){
            $("header nav").addClass("fixed-nav")
            $(".navbar-brand img").attr("src","assets/images/logo-red.png")
          }
          else{
            $("header nav").removeClass("fixed-nav")
            $(".navbar-brand img").attr("src","assets/images/logo-white.png")
          }
        })

        // down button
        $(".down").on("click",function(){
          $("body,html").animate({scrollTop:500},{duration:500},'linear')
        })
        // top button
        $(".up").on("click",function(){
          $("body,html").animate({scrollTop:0},{duration:2000},'linear')
        })
        // settings
        $(".gear").on("click",function(){
          $(".colors").toggle(250)
        })
        // set the background
        $(".color").on("click",function(){
          var color=$(this).css("background-color")
          $("html").get(0).style.setProperty('--main-color', color)
          localStorage.setItem("color",color)
        })
        // set stored color
        var storedColor=localStorage.getItem("color")

        $("html").get(0).style.setProperty('--main-color', storedColor)

    }
)
