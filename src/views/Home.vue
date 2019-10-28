<template>
  <div class="home" v-bind:class="{'legco': theme == 'legco'}">
    <!-- end of main -->
    <section class="section section--hero">
      <div class="hero">
        <div class="hero-inner">
          <div class="hero__layer"></div>
          <div class="hero__bg">
            <div class="bg-img" v-bind:style="{backgroundImage: `url( ${hero.bg} )`}"></div>
          </div>
          <div class="hero__jumbotron">
            <div class="hero__headline">
              <div v-html="hero.headline"></div>
              <div v-html="hero.lead"></div>
            </div>
            <div class="hero__quote">
              <p>{{hero.subHeader}}</p>
            </div>
            <div class="hero__text" v-html="hero.text"></div>
            <div class="hero__animals" v-if="theme == 'eco'">
              <div class="animal-wrapper" v-for="animal in animals" :key="animal.name">
                <img :src="animal.pic" alt="animal.name">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of hero -->
    <!-- issues -->
    <section class="section section--issues">
      <!-- issue -->
      <div class="issue__block" v-for="issue in issues" v-bind:key="issue.num">
        <div class="issue__description">
          <span class="lead">{{issue.description}}</span>
        </div>
        <div class="issue-wrapper" :class="{'issue-wrapper--reverse': issue.imageLeft}">
          <div class="issue__title">
            <div class="issue__tagline" v-for="(tagline, nkey) in issue.taglines" v-bind:key="nkey">
              <div class="tagline__leading font-weight--bold">
                <span class="lead">{{tagline.leading}}</span>
              </div>
              <div class="tagline__oc font-weight--black">
                <span v-html="tagline.oc"></span>
              </div>
            </div>
            <div class="visual-sub" :style="{backgroundImage: `url( ${issue.subImg} )`}"></div>
          </div>
          <div class="issue__visual">
            <div class="visual-context">
              <div class="visual-main">
                <img :src="issue.sectionImg" :alt="issue.alt">
              </div>
              <div class="issue__content">
                <div v-html="issue.sectionText"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of issue blocks -->
    </section>
    <!-- end of issues -->
  </div>
</template>

<script>
import { pageContent } from "@/petitionContent.js";
export default {
  props: ["theme"],
  data() {
    return {
      animals: [
        {
          name: "海筆",
          pic: require("@/assets/img/IMG_1129-2.jpg"),
          bio: "在中部水域錄得稀有的軟珊瑚海筆"
        },
        {
          name: "白腹海鵰",
          pic: require("@/assets/img/close-up_WBSE_Kevin_Lok.jpg"),
          bio: "鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢"
        }
      ]
    };
  },
  computed: {
    hero() {
      return pageContent[this.theme].hero;
    },
    issues() {
      return pageContent[this.theme].issues;
    },
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  mounted() {
    const revealToTop = {
      distance: "50%",
      origin: "bottom"
    };
    // ISSUE
    const sr = window.sr;
    sr.reveal(".animal__pic", revealToTop);
    sr.reveal(".hero__text p", revealToTop);
    sr.reveal(".visual-oc", revealToTop);
    sr.reveal(".visual-leading", revealToTop);
    sr.reveal(".visual-main", revealToTop);
    sr.reveal(".issue__content p", revealToTop);
    sr.reveal(".text-flexbox p", revealToTop);
  }
};
</script>

<style lang="scss">
@import "@/styles/scss/custom/_home.scss";
</style>
