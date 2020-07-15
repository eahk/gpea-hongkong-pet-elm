import jQuery from "jquery";
import * as helpers from "@/helpers.js";
import { mainShare, whatsAppShare } from "@/share.js";
import NProgress from "nprogress";
window.$ = jQuery;
window.jQuery = jQuery;
NProgress.configure({
  showSpinner: false
});
const debounce = require("lodash.debounce");
//
const appendForm = function() {
  const nativeForm = document.querySelector("form.en__component--page");
  const enFormWrapper = document.querySelector(".enform__wrapper");
  if (nativeForm && enFormWrapper) {
    enFormWrapper.appendChild(nativeForm);
  }
};
//
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      currentPage: 0,
      PageFn: {
        isMobile: false,
        isLoading: true,
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
      this.PageFn.isLoading = true;
      this.handleResize();
      this.PageFn.isLoading = false;
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
    //
    NProgress.start();
    window.addEventListener("resize", debounce(this.handleResize, 200));
    window.addEventListener("scroll", this.handleScroll);
    //
    const page = window.location.pathname.split("/").slice(-1)[0];
    this.currentPage = page;
    if (page == 2) {
      this.formSubmitted = true;
      const shareBtn = document.querySelector(".button--share");
      const whatsappBtn = document.querySelector(".button--whatsappshare");
      if (shareBtn) {
        shareBtn.addEventListener("click", mainShare);
      }
      if (whatsappBtn) {
        whatsappBtn.addEventListener("click", whatsAppShare);
      }
    }
  },
  mounted() {
    appendForm();
    if (!this.formSubmitted) {
      helpers.enFormFieldInit();
      helpers.enFormType();
      helpers.createBirthYearList();
      helpers.enFormEmailCheck();
      const pageEmailConsent = document.querySelector(
        "#en__field_supporter_questions_7275"
      );
      if (pageEmailConsent) {
        const setEmailConsent = function() {
          sessionStorage.setItem(
            "pageEmailConsent",
            pageEmailConsent.checked ? "Y" : "N"
          );
        };
        setEmailConsent();
        pageEmailConsent.addEventListener("change", function() {
          setEmailConsent();
        });
      }
    }
    //
    this.$nextTick(() => {
      NProgress.done();
      this.pageInit();
      this.$store.commit("SET_VIEW_LOADING", false);
    });
    //
  },
  destroyed() {
    document.removeEventListener("resize", this.handleResize);
    document.removeEventListener("scroll", this.handleScroll);
    alert("Please refresh the page");
  }
};
