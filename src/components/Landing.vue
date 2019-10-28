<template>
  <div class="section-landing">
    <div class="landing-bg">
      <div class="landing-bg__img">
        <img :src="backgroundVisual" alt>
      </div>
    </div>
    <div class="landing-overlay disableclick"></div>
    <div class="landing-headline">
      <div class="headline__title">
        <h1>
          <span>守護大嶼</span>
          <span>立即聯署</span>
        </h1>
      </div>
      <div class="headline__description">
        <p>
          呈交你的聲音至立法會，
          <br>要求財委會主席及全體委員把關，
          <br>
          <strong>否決「明日大嶼」前期研究撥款！</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["backgroundVisual"]
};
</script>

<style lang="scss" scoped>
.section-landing {
  position: relative;
  width: 100%;
}
.landing-bg {
  position: relative;
  .landing-bg__img {
    img {
      width: 100%;
      height: auto;
    }
  }
}
.landing-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0),
    rgba(0, 0, 0, 0.45) 50%,
    transparent
  );
  @media screen and (min-width: 1200px) {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0),
      rgba(0, 0, 0, 0.25) 50%,
      transparent
    );
  }
}

.landing-headline {
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px 2rem;
  @media screen and (min-width: 1200px) {
    background-color: transparent;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    color: #fff;
    align-items: flex-start;
  }
}

.headline__title {
  transform: translateY(-50%);
  h1 {
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 2.8rem;
    line-height: 1.2;
    letter-spacing: 1rem;
  }
  @media screen and (min-width: 1200px) {
    transform: none;
    h1 {
      font-size: 4rem;
    }
  }
}

.headline__description {
  background-color: #000;
  margin-top: 2rem;
  margin-bottom: 2rem;
  p {
    text-align: center;
    color: #fff;
    line-height: 2;
  }
  @media screen and (min-width: 1200px) {
    background-color: transparent;
    p {
      text-align: left;
    }
  }
}
</style>


