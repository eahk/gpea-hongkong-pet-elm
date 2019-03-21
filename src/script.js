import * as helpers from "@/helpers.js";
import WebFontLoader from "webfontloader";
const debounce = require("lodash.debounce");
//
/*
function getDocumentHeight() {
    const body = document.body,
        html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}
*/

function getWindowHeight() {
    return Math.max(window.innerHeight, document.documentElement.clientHeight);
}

function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset :
        (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}
//
export default {
    data() {
        return {
            currentPage: 0,
            PageFn: {
                isMobile: helpers.mobilecheck(),
                pageLoaded: false,
                isResizing: false,
                viewportHeight: 0,
                scrollPos: 0,
            },
            formSubmitted: false,
        }
    },
    methods: {
        handleResize() {
            this.PageFn.isMobile = helpers.mobilecheck();
            this.PageFn.viewportHeight = getWindowHeight();
        },
        handleScroll() {
            this.PageFn.scrollPos = getScrollTop();
        },
        setFontLoaded() {
            console.log('Font is loaded');
        }
    },
    computed: {
        scrollOff() {
            return this.$store.getters.scrollOff;
        },
    },
    watch: {
        scrollOff(val) {
            if (val) {
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.querySelector(".main").style.overflow = "hidden";
            } else {
                document.documentElement.style.overflow = "";
                document.body.style.overflow = "";
                document.querySelector(".main").style.overflow = "";
            }
        },
    },
    created() {
        window.addEventListener("resize", debounce(this.handleResize, 200));
        window.addEventListener("scroll", this.handleScroll);
        const page = window.location.pathname.split("/").slice(-1)[0];
        this.currentPage = page;
    },
    mounted() {
        console.log(this.PageFn);
        WebFontLoader.load({
            google: {
                families: ["Noto Sans:100,300,400,500,700,900", "Montserrat"]
            },
            active: this.setFontLoaded
        });
        this.$nextTick(function() {
            this.PageFn.pageLoaded = true;
        });
    },

    destroyed() {
        document.removeEventListener("resize", this.handleResize);
        document.removeEventListener("scroll", this.handleScroll);
        alert("Please refresh the page");
    }
}