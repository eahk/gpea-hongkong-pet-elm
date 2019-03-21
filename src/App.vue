<template>
  <main
    id="app"
    class="main"
  >
    <div class="main-inner">
      <!-- content -->
      <section class="content site-content">
        <transition
          name="router-fade"
          mode="out-in"
        >
          <router-view />
        </transition>
      </section>
      <!-- end of content section -->
      <!-- enform -->
      <section class="section enform">
        <div class="enform-container">
          <div class="enform__header">
            <h2><span>守</span><span>護</span><span>大</span><span>嶼</span></h2>
            <p>守衛香港未來</p>
          </div>
          <div class="enform__wrapper">
            <form action="">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    class="validate"
                  >
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    class="validate"
                  >
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    class="validate"
                  >
                  <label for="email">Email</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <!-- end of enform section -->
    </div>
    <!-- end of main inner-->
    <!--
    <a
      href="#"
      data-target="slide-out"
      class="sidenav-trigger"
    ><i class="material-icons">menu</i></a>
    -->
    <ul
      id="slide-out"
      class="sidenav"
    >
      <li>
        <div class="user-view">
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div>
      </li>
      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Subheader</a></li>
      <li><a
          class="waves-effect"
          href="#!"
        >Third Link With Waves</a></li>
    </ul>

    <!-- mobile sign now -->
    <div class="mobile-sign-now z-depth-2">
    </div>
    <!-- end of mobile sign -->
  </main>
</template>
<script src="./script.js">
</script>
<style lang="scss">
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
