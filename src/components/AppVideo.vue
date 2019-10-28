<template>
  <section class="section--video video--overlay">
    <div class="overlay overlay--loading"></div>
    <div class="overlay overlay--play"></div>
    <div class="overlay overlay--pause"></div>
    <!-- youtube div element -->
    <youtube
      :video-id="videoId"
      ref="youtube"
      @playing="playing"
    ></youtube>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoId: "lG0Ys-2d4MA"
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  },
  mounted() {
    console.log(this.player);
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>

<style lang="scss">
.section--video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.video-player {
  width: 90%;
  max-width: 1200px;
}
</style>


