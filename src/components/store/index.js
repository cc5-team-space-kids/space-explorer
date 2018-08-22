import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    message: "Hi Kimiko!! You get used to VUEX!! yay!!",
    imgUrl: ""
  }
});

export default store;
