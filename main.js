import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

// 取得網址參數
  const urlParams = new URLSearchParams(window.location.search);
  const isLoggedInParam = urlParams.get('isLoggedIn'); // 取得 isLoggedIn 的值，會是字串或 null

  const userAvatar = document.getElementById('user-avatar');
  const guestMessage = document.getElementById('guest-message');

  // 判斷是否登入，參數是 "true" 字串才算登入
  const isLoggedIn = isLoggedInParam === 'true';

  if (isLoggedIn) {
    userAvatar.classList.remove('d-none');
    guestMessage.classList.add('d-none');
  } else {
    userAvatar.classList.add('d-none');
    guestMessage.classList.remove('d-none');
  }

   var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      slidesPerView: 1.1,
      spaceBetween: 16,
      breakpoints: {
    
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
    },
     
  }
    });