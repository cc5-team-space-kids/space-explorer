<template>
  <div id="app">
    <h3 class="title">Space Explorer</h3>
    <GoogleMap></GoogleMap>
    <Description />
  </div>
</template>

<script>
import Description from './components/Description';
import GoogleMap from "./components/GoogleMap.vue";

export default {
  name: "app",
  components: {
    Description,
    GoogleMap
  },

  mounted() {
    this.$store.dispatch("SET_BACKGROUND_URL");
  },

}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .title {
    background-color: navy;
    opacity: 0.6;
    color: ivory;
  }
</style>
