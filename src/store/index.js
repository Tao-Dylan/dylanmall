import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions.js";
import mutations from "./mutations";
import state from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
});
