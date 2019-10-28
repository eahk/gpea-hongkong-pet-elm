<template>
  <div class="wrapper">
    <landing :backgroundVisual="backgroundVisual"/>
    <div class="section-voice">
      <div class="voice-wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="argument in argus" v-bind:key="argument.key">
            <div class="voice">
              <div class="voice__headline">
                <span>{{argument.headline}}</span>
              </div>
              <div class="voice__title">
                <div
                  class="voice__tagline"
                  v-for="(tagline,index) in argument.taglines"
                  v-bind:key="index"
                >
                  <span class="tagline__leading">{{tagline.leading}}</span>
                  <span class="tagline__oc" v-html="tagline.oc"></span>
                </div>
              </div>
              <div class="voice__card card z-depth-1">
                <div class="card__visual card-img-top">
                  <img :src="argument.visual" class="img-fluid" alt>
                </div>
                <div class="card-body">
                  <div class="card-title"></div>
                  <div class="card__content card-text" v-html="argument.content"></div>
                  <div class="card__button">
                    <button class="btn">立即聯署</button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import Landing from "@/components/Landing.vue";
export default {
  components: {
    Landing
  },
  data: function() {
    return {
      swiperOption: {
        slidesPerView: "1",
        loop: true,
        autoResize: false,
        centeredSlides: true,
        resizeReInit: true,
        spaceBetween: 80,
        slideActiveClass: "slide-active"
      },
      argus: [
        {
          key: "brownfield",
          headline: "用　棕　地",
          visual: require("@/assets/img/brownfield.jpg"),
          taglines: [
            {
              leading: "發展棕地成本",
              oc: `<span><span>比填海</span><span>便宜8成</span></span>`
            },
            {
              leading: "即可興建",
              oc: `<span><span>14萬伙</span><span>公營房屋</span></span>`
            }
          ],
          content: `<p>事實上，香港有比「明日大嶼」更明智的選項：發展408公頃的棕地，造地成本為333億元。</p><p>除了比填海便宜8成以外，政府亦可引用《收回土地條例》，以比填海更快的速度，興建近14萬伙公營房屋 ，並取締棕地上的違法及違規作業。</p><p>政府一直拖延公佈棕地可行性研究，變相繼續縱容非法電子垃圾拆解場污染鄉郊環境。根據綠色和平的科學調查，這些電子垃圾拆解場重金屬超標嚴重，污染環境，令土地使用效率極低。</p>`
        },
        {
          key: "voice",
          headline: "聽　民　意",
          visual: require("@/assets/img/legco_bg_2.jpg"),
          taglines: [
            {
              leading: "社會各界市民",
              oc: `<span><span>要求</span><span>立法會把關</span></span>`
            },
            {
              leading: "否決5.5億公帑的",
              oc: `<span><span></span><span>前期研究撥款</span></span>`
            }
          ],
          title: `<h2>社會各界市民要求立法會議員把關否決耗費6,240億公帑工程</h2>`,
          content: `<p>填海<strong>耗費$6240億公帑</strong>，有媒體估計，<strong>變相每名市民支付$8萬元</strong>，預料至少在13年後－－2032年才能讓市民入伙，無法紓緩燃眉之急，要「邊住邊填海」，甚至面臨氣候變化引致海平面上升的威脅，居住環境勘憂，引起社會各界強烈反對。</p><p>綠色和平自4月開始發起聯署，收集社會各界守護大嶼的聲音，獲逾2萬名市民響應，支持優先發展棕地，守護大嶼。立法會財委會主席應虛心聆聽民意，為市民把關，要求政府優先發展棕地，放棄「明日大嶼」放案。</p>`
        },
        {
          key: "ocean",
          headline: "保　海　洋",
          visual: require("@/assets/img/DJI_0409_credit.jpg"),
          title: `<h2>社會各界市民要求立法會議員把關否決耗費6,240億公帑工程</h2>`,
          taglines: [
            {
              leading: "鄰近填海選址海域",
              oc: `<span>具生態價值</span>`
            },
            {
              leading: "生態價值",
              oc: `<span>絕不應被低估</span>`
            }
          ],
          content: `<p>填海選址鄰近海域具生態價值，或令海洋或陸地物種的棲息地永久喪失。</p><p>我們與6個環保及關注團體發佈的生態調查發現，鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢，全球獨有的鮑氏雙足蜥，更在中部水域錄得一種稀有的軟珊瑚海筆，生態價值絕對不應被刻意低估。</p>`
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
    backgroundVisual: function() {
      if (this.isMobile) {
        return require("@/assets/img/legco_bg_mb_2.jpg");
      } else {
        return require("@/assets/img/legco_bg_2.jpg");
      }
    }
  }
};
</script>
<style lang="scss">
.section-voice {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 4rem;
  background-color: #000;
  .swiper-wrapper {
    width: 100%;
  }
  .swiper-slide {
    width: 90%;
  }
  .swiper-button-prev {
    display: none;
    width: 20px;
    height: 20px;
    margin: 0;
    background-size: 20px 20px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;
  }
  .swiper-button-next {
    width: 20px;
    height: 20px;
    margin: 0;
    margin-right: 5px;
    background-size: 20px 20px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;
    &:before {
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      top: 0;
      left: 0;
      transform: translate(-25%, -25%);
      background-color: rgba(255, 255, 255, 0.25);
      border-radius: 50%;
    }
  }
}
//
.voice {
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-areas:
    "headline"
    "title"
    "card";
  @media screen and (min-width: 1200px) {
    grid-gap: 20px;
    grid-template-columns: minmax(300px, 2fr) 3fr;
    grid-template-areas: "headline headline" "title card";
  }
}
.voice__headline {
  display: none;
  grid-area: headline;
  width: 100%;
  padding: 3rem 0;
  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
}
.voice__title {
  grid-area: title;
  text-align: right;
  color: #fff;
  margin-bottom: 1rem;
  .voice__tagline {
    .tagline__leading {
      display: block;
      color: #fff;
    }
    .tagline__oc {
      display: block;
      color: #fff;
      font-size: 2.6rem;
      line-height: 2;
      span {
        display: inline-block;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 0 16px;
    border-right: 2px solid rgba(255, 255, 255, 0.25);
  }
}
.voice__card {
  grid-area: card;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  .card__visual {
    margin-bottom: 2rem;
    position: relative;
    &:before {
      z-index: -1;
      position: absolute;
      content: "";
      top: -10px;
      right: -10px;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255, 255, 255, 0.15);
    }
  }
  .card-body {
    .card__content {
      color: #fff;
      strong {
        color: #ffd200;
      }
    }
  }
  .card__button {
    display: none;
    button {
      background-color: #fff;
      color: #000;
      margin-top: 20px;
      font-size: 18px;
      letter-spacing: 4px;
      text-align: center;
      padding: 10px 20px;
      border-radius: 20px;
    }
  }
}

// active swiper slide
.section-voice {
  .swiper-slide-active {
  }
}
</style>

