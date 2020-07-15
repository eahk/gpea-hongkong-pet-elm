<template>
  <main id="app" class="main md-scrollbar">
    <div class="main-inner">
      <!-- loading -->
      <fade-transition :duration="400">
        <div class="main-loading" v-if="PageFn.isWaitingInit || isResizing">
          <img src="@/assets/img/gp-logo-vertical.png" v-bind:class="{loading: PageFn.isWaitingInit}" />
        </div>
      </fade-transition>
      <!-- header -->
      <app-header />
      <!-- content -->
      <section class="section--content content site-content">
        <fade-transition :duration="400">
          <router-view />
        </fade-transition>
      </section>
      <!-- end of content section -->
      <!-- enform -->
      <slide-x-right-transition :duration="400">
        <section class="section section--form enform" ref="enform" v-show="showMobileForm">
          <div class="container">
            <div class="enform-progress">
              <div class="p-progress">
                <p class="p-progress__participants">
                  <span class="font-weight-bold">{{progress.participants | formatNumber}}</span> 人已聯署
                </p>
                <div class="p-progress__target target text-right">
                  <span class="target-direction">
                    <i class="material-icons">keyboard_arrow_right</i>
                    <i class="material-icons">keyboard_arrow_right</i>
                    <i class="material-icons">keyboard_arrow_right</i>
                  </span>
                  <span class="p-target__goal">{{progress.goal | formatNumber}}聯署</span>
                </div>
              </div>
              <b-progress
                height="16px"
                :value="progress.participants"
                :max="progress.goal"
                show-value
              ></b-progress>
            </div>
          </div>

          <div class="enform-container z-depth-1">
            <div class="enform__header">
              <h2 class="font-weight--bold">守護香港未來</h2>
              <p>一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！我們會將你守護大嶼的聲音，向政府反映。</p>
            </div>
            <div class="enform__wrapper">
              <MCForm v-if="!formSubmitted" @onSubmit="_onSubmit"/>
              <ThankYouBlock v-if="formSubmitted"/>
            </div>
          </div>
        </section>
      </slide-x-right-transition>
      <!-- end of enform section -->
    </div>
    <!-- end of main inner-->
    <!-- footer -->
    <app-footer />
    <!-- mobile sign now -->
    <div
      class="mobile-sign-now"
      v-show="PageFn.isMobile"
      v-bind:class="{expand: !showMobileForm, collapse: showMobileForm, 'z-depth-1': !showMobileForm}"
    >
      <div class="scroll-indicator" v-show="!showMobileForm">
        <div class="progress-bar" v-bind:style="{width: `${this.PageFn.scrollDepth}%` }"></div>
      </div>
      <button
        class="btn"
        v-show="!showMobileForm"
        @click="openPetitionFullSection"
      >{{mobileBtnText}}</button>
      <button class="btn" v-show="showMobileForm" @click="closePetitionFullSection">
        <i class="material-icons">expand_more</i>
      </button>
    </div>
    <!-- end of mobile sign -->

    <FullLoadingPage :isActive="PageFn.isLoading"/>
  </main>
</template>
<script src="./script.js">
</script>



