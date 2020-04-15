import Vue from "vue";
import Vuex from "vuex";

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
      // const participantsURL = 'https://act.greenpeace.org/page/widget/450476'
      const participantsURL =
        "https://act.greenpeace.org/ea-dataservice/data.service?contentType=json&service=EaDataCapture&token=7a06c0fc-32fe-43f1-8a1b-713b3ea496e1&campaignId=143255&resultType=summary";
      let progress = await fetch(participantsURL)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          const participants = parseInt(data.rows[0].columns[4].value);
          const goal = 100000;
          const progress = {
            participants: participants,
            goal: goal
          };
          return progress;
        });
      context.commit("SET_PROGRESS", progress);
    }
  }
});

// Mutations are synchronous
// Actrions are asynchronous
