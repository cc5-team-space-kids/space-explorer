<template>
  <div id="app">
    <HelloWorld msg="Welcome to Space Explorer"/>
    <GoogleMap></GoogleMap>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import GoogleMap from "./components/GoogleMap.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    GoogleMap
  },
  mounted() {
    this.$store.dispatch("SET_SATELLITES", 41.702, -76.014);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
