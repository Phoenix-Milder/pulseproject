// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         adaptiveHeight: false,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="arrow"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="arrow"></button>',
//         responsive: [
//             {
//               breakpoint: 992,
//               settings: {
//                 dots: true, 
//                 arrows: false
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//     });
//   });

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  autoHeight: false,
  controls: false,
  nav: false,
  responsive: {
    320: {
      edgePadding: 20,
      gutter: 20,
      items: 1,
      nav: true
    },
    768: {
      items: 1,
      nav: false
    }
  }
});

document.querySelector('.prev').addEventListener('click',function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click',function () {
  slider.goTo('next');
});