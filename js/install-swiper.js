let swiper = false; 

function installSwiper() {
	if (window.innerWidth <= 768) {
			if (!swiper) {
				swiper = true;
					installSwiper = new Swiper(".brands__cards", {
							spaceBetween: 16,
							slidesPerView: "auto",
							pagination: {
									el: ".brands-pagination",
									clickable: true,
							},
					});
			}
	} else if (swiper) {
			installSwiper.destroy();
			swiper = false;
	}
}

installSwiper();
window.addEventListener("resize", installSwiper);