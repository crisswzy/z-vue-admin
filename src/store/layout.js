export default {
  namespaced: true,
  state: {
    activeItem: null,
    sidebarClose: false
  },
  mutations: {
    changeActiveItem(state, index) {
      state.activeItem = index;
    },
    changeSidebarStatus(state, value) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
    }
  },
  actions: {
    changeActiveItem({ commit }, index) {
      commit("changeActiveItem", index);
    },
    changeSidebarStatus({ commit }, value) {
      commit("changeSidebarStatus", value);
    }
  }
};
