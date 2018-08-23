import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    imgUrl: "",
    // It set default city to seatle
    message: "Hi Kimiko!! You get used to VUEX!! yay!!",
    
    center: { lat: 47.608, lng: -122.335 },
    markers: [],
    places: [],
    currentPlace: null,
    sunInfo: [],
  }
});

export default store;
