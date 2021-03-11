import Vue from "vue";
import Vuex from "vuex";
import * as mcHelper from "@/mc.form-helper.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isResizing: false,
    scrollOff: false,
    isMobile: false,
    viewLoading: true,
    progress: {
      participants: 0,
      goal: 0
    }
  },
  mutations: {
    SET_RESIZING(state, type) {
      state.isResizing = type;
    },
    SET_MOBILE(state, type) {
      state.isMobile = type;
    },
    SET_SCROLLOFF(state, type) {
      state.scrollOff = type;
    },
    SET_VIEW_LOADING(state, type) {
      state.viewLoading = type;
    },
    SET_PROGRESS(state, type) {
      state.progress = type;
    }
  },
  actions: {
    GET_PROGRESS: async context => {
      let { numSignupTarget, numSignup } = mcHelper.getNumSignupsAndTarget();

      context.commit("SET_PROGRESS", {
        participants: numSignup,
        goal: numSignupTarget < 200000 ? 200000 : numSignupTarget
      });
    }
  }
});

// Mutations are synchronous
// Actrions are asynchronous
