export default {
  namespaced: true,
  state: {
    is_loggedin: false,
    token: null,
    user_info: null
  },
  mutation: {
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    // login({ commit }, loginForm) {
    //   return new Promise((resolve, reject) => {
    //     Vue.axios
    //       .post("http://localhost:5000/admin/api/v1/auth/login", loginForm)
    //       .then(response => {
    //         commit("SET_TOKEN", response.data.access_token);
    //         resolve();
    //       })
    //       .catch(error => reject(error.response.data.msg));
    //   });
    // }
  }
};
