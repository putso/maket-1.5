let swiper = false;
let classArr = {
  swiperClass: "brands__cards",
  pogination: "brands-pagination",
  swiper: null,
};

setSwiper(classArr);
function setSwiper(object) {
  let { swiperClass, pogination, swiper } = object;
  object.swiper = new Swiper("." + swiperClass, {
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
      el: "." + pogination,
      clickable: true,
    },
  });
}
