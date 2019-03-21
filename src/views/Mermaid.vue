<template>
  <div class="mermaid">
    <section class="section section--hero">
      <div class="hero">
        <div class="hero--bg"></div>
        <div class="hero--layer"></div>
        <div class="hero--wrapper">
          <div class="hero--title">
            <h1 class="font-weight--black"><span>守</span><span>護</span><span>大</span><span>嶼</span></h1>
            <p>堅守香港海洋最後一道防線</p>
          </div>
          <div class="hero--swiper">
            <!-- Slider main container -->
            <div class="swiper-container">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide"><img
                    class="materialboxed"
                    width="600"
                    src="@/assets/img/DSCF8374.jpg"
                  ></div>
                <div class="swiper-slide"><img
                    class="materialboxed"
                    width="600"
                    src="@/assets/img/IMG_0321.jpg"
                  ></div>
                <div class="swiper-slide"><img
                    class="materialboxed"
                    width="600"
                    src="@/assets/img/DSCF8397.jpg"
                  ></div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="hero--bite">
          <p>「當大嶼山的一片淨海被夷為平地，連海洋生物都被趕盡殺絕，<br />香港還能稱為『東方之珠』嗎？」</p>
        </div>
      </div>
    </section>
    <section class="section section--story">
      <div class="sound-bite">
        <p><strong>香港樓價貴，我自己都買唔起，但新界咁多荒廢棕地，點解唔收返起屋？</strong></p>
      </div>
      <div class="sound-bite">
        <p><strong>香港之所以係『東方之珠』，就係因為大自然咁靚嘅自然風景，聞名世界。海係用嚟欣賞，唔係用嚟填㗎！</strong></p>
      </div>
      <div class="sound-bite">
        <p><strong>政府點解一面收緊長者福利開支，一面又要使咁多錢填海？對大家都冇著數！</strong></p>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
        // clickable: true
      },
      breakpoints: {}
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/custom/_mermaid.scss";
</style>


