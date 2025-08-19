import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

// 取得網址參數
  const urlParams = new URLSearchParams(window.location.search);
  const isLoggedInParam = urlParams.get('isLoggedIn'); // 取得 isLoggedIn 的值，會是字串或 null

  const userAvatar = document.getElementById('user-avatar');
  const offcanvasuserAvatar = document.getElementById('offcanvas-user-avatar');
  const offcanvasuserAvatarBtn = document.getElementById('offcanvas-user-avatar-btn');
  const guestMessage = document.getElementById('guest-message');
  const offcanvasGuestMessage = document.getElementById('offcanvas-guest-message');
  const offcanvasGuestMessageBtn = document.getElementById('offcanvas-guest-message-btn');

  // 判斷是否登入，參數是 "true" 字串才算登入
  const isLoggedIn = isLoggedInParam === 'true';

  if (isLoggedIn) {
    userAvatar.classList.remove('d-none');
    offcanvasuserAvatar.classList.remove('d-none');
    offcanvasuserAvatarBtn.classList.remove('d-none');
    guestMessage.classList.add('d-none');
    offcanvasGuestMessage.classList.add('d-none');
    offcanvasGuestMessageBtn.classList.add('d-none');
  } else {
    userAvatar.classList.add('d-none');
    offcanvasuserAvatar.classList.add('d-none');
    offcanvasuserAvatarBtn.classList.add('d-none');
    guestMessage.classList.remove('d-none');
    offcanvasGuestMessage.classList.remove('d-none');
    offcanvasGuestMessageBtn.classList.remove('d-none');
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
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
    },
  }
    });

    var swiper2 = new Swiper(".mySwiper2", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      slidesPerView: 1.1,
      spaceBetween: 16,
      breakpoints: {
    
    // when window width is >= 992px
    992: {
      slidesPerView: 1.5,
    },
     // when window width is >= 1200px
    1200: {
      slidesPerView: 1.7,
    },
     
  }
    });
    