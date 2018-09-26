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
    
    center: { lat: 35.6605, lng: 139.7292, name: "<Please select satellite>" },
    markers: [],
    places: [],
    currentPlace: null,
    sunInfo: [],
    moonInfo: [],
    intro:
        "This app is for space nerds who is intrigued with the outer space." +
        "There are numerous numbers of satllites orbiting the earth. For TVs, weather, GPS, security, and more." +
        "This app shows the positions of the satellites in real-time on a map!",
    texts: [
      {
        id: 1,
        feature: "Map",
        detail:
          "The markers indicate the satellites above the earth plain in real-time"
      },
      {
        id: 2,
        feature: "Background",
        detail: "The background image changes everyday, complimentary of NASA"
      }
    ],
  }
});

export default store;
