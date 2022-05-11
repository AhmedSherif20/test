var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
    },
    autoplay: true,
    speed: 800,
    autoplayDisableOnInteraction: false
  });


let musicBtn = document.getElementById("musicBtn"),
    music = document.querySelector("#leftModal"),
    cover = document.querySelector("#downModal")

musicBtn.onclick = _ => {
  console.log(music);
  music.classList.add("show")
}


  setTimeout(()=>{
    cover.classList.add("show")
  },500)

window.onclick = e =>  e.target.classList.contains("cover") ? e.target.classList.remove("show") : ""
window.onclick = e => e.target.classList.contains("music") ? e.target.classList.remove("show") : ""

window.onclick = e => {
  if( e.target.classList.contains("cover"))
  {
    e.target.classList.remove("show")
  }else if(e.target.classList.contains("music"))
  {
    e.target.classList.remove("show")
  }
}