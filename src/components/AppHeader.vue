<template>
  <header class="header">
    <div class="header-inner">
      <div class="header__logo">
        <div class="gp-logo site-logo">
          <img src="@/assets/img/gp-logo-vertical.png" alt="Greenpeace">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  position: absolute;
  left: 8px;
  top: 0;
}
.gp-logo {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 8px;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $c-content;
  img {
    padding: 2px;
    width: 100%;
    height: auto;
  }
}
</style>


