import jQuery from "jquery";
import * as helpers from "@/helpers.js";
import NProgress from "nprogress";

window.$ = jQuery;
window.jQuery = jQuery;
NProgress.configure({
  showSpinner: false
});
const debounce = require("lodash.debounce");

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

import MCForm from "./components/MCForm.vue";
import ThankYouBlock from "./components/ThankYouBlock.vue";
import FullLoadingPage from "./components/FullLoadingPage.vue";

import * as mcHelper from "@/mc.form-helper.js";

export default {
  components: {
    AppHeader,
    AppFooter,
    MCForm,
    ThankYouBlock,
    FullLoadingPage
  },
  data() {
    return {
      currentPage: 0,
      PageFn: {
        isMobile: false,
        isLoading: false,
        isWaitingInit: false,
        viewportHeight: 0,
        scrollDepth: 0
      },
      showMobileForm: false,
      formSubmitted: false
    };
  },
  methods: {
    getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    },
    getWindowHeight() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight
      );
    },
    getScrollTop() {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    },
    checkMobile() {
      this.PageFn.isMobile = helpers.mobilecheck();
      this.$store.commit("SET_MOBILE", helpers.mobilecheck());
    },
    handleResize() {
      this.$store.commit("SET_RESIZING", true);
      this.checkMobile();
      if (!this.PageFn.isMobile && !this.showMobileForm) {
        this.showMobileForm = true;
      }
      this.$store.commit("SET_RESIZING", false);
    },
    handleScroll() {
      let scroll = this.getScrollTop() / this.innerHeight;
      this.PageFn.scrollDepth = Math.round(scroll * 100);
    },
    pageInit() {
      this.PageFn.isWaitingInit = true;
      this.handleResize();
      this.PageFn.isWaitingInit = false;
      //
      if (window.location.search.includes("paragliding")) {
        document.querySelector(".bg-img").style.backgroundImage =
          "url('https://storage.googleapis.com/planet4-hongkong-stateless/2020/11/e83df40a-dji_0220_16x9.jpg')";
      }
    },
    openPetitionFullSection() {
      if (this.PageFn.isMobile && !this.showMobileForm) {
        this.$store.commit("SET_SCROLLOFF", true);
        this.showMobileForm = true;
      }
    },
    closePetitionFullSection() {
      if (this.PageFn.isMobile && this.showMobileForm) {
        this.$store.commit("SET_SCROLLOFF", false);
        this.showMobileForm = false;
      }
    },
    _onSubmit(formDataObj) {
      try {
        this.PageFn.isLoading = true;
        // prepare the submit data
        let postData = mcHelper.fetchFormInputs("#mc-form");
        for (let k in formDataObj) {
          if (k in postData) {
            postData[k] = formDataObj[k];
          }
        }
        // prepare dict campaign data
        let dict = {};
        dict["CampaignData5__c"] = window.location.href;
        postData["CampaignData5__c"] = dict["CampaignData5__c"];
        fetch(mcHelper.getPostURL(), {
          method: "POST",
          body: Object.keys(postData).reduce((formData, k) => {
            formData.append(k, postData[k]);
            return formData;
          }, new FormData())
        })
          .then(response => response.json())
          .then(response => {
            this.PageFn.isLoading = false;
            if (response) {
              if (response.Supporter) {
                if (response.Supporter) {
                  mcHelper.sendPetitionTracking("elm");
                  this.formSubmitted = true;
                  document.querySelector(".enform").scrollIntoView();
                }
              }
            } else {
              console.error(response);
            }
          })
          .catch(error => {
            this.PageFn.isLoading = false; // something wrong
            alert(error);
            console.error(error);
          });
      } catch (e) {
        console.error(e);
      }
    }
  },
  computed: {
    innerHeight() {
      return this.getDocumentHeight() - this.getWindowHeight();
    },
    scrollDepth() {
      return this.PageFn.scrollDepth;
    },
    isResizing() {
      return this.$store.state.isResizing;
    },
    scrollOff: function() {
      return this.$store.state.scrollOff;
    },
    mobileBtnText() {
      return this.formSubmitted ? "感謝您聯署守護大嶼" : "立即聯署";
    },
    progress() {
      return this.$store.state.progress;
    }
  },
  watch: {
    $route: function() {
      this.pageInit();
      // console.log("Route changed");
    },
    scrollOff(val) {
      function makeScrollOff() {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.classList.add("modal-open");
      }
      function disableScrollOff() {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.classList.remove("modal-open");
      }
      val ? makeScrollOff() : disableScrollOff();
    },
    formSubmitted(val) {
      if (val) {
        // console.log("petition has been signed");
        this.showMobileForm = true;
      }
    }
  },
  created() {
    this.$store.dispatch("GET_PROGRESS");
    NProgress.start();
    window.addEventListener("resize", debounce(this.handleResize, 200));
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.$nextTick(() => {
      NProgress.done();
      this.pageInit();
      this.$store.commit("SET_VIEW_LOADING", false);
    });
  },

  destroyed() {
    document.removeEventListener("resize", this.handleResize);
    document.removeEventListener("scroll", this.handleScroll);
    alert("Please refresh the page");
  }
};
