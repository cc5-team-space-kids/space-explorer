import Vue from "vue";

import App from "./App.vue";
import store from "./components/store";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GS,
    libraries: "places, drawing, visualization" // This is required if you use the Autocomplete plugin
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
