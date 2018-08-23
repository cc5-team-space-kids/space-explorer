<template>
  <div id="app" :style="{ backgroundImage: `url('${this.$store.state.imgUrl}')` }">
    <Map msg="Welcome to Space Explorer"/>
    <Description />
  </div>
</template>

<script>
import Map from './components/Map.vue';
import Description from './components/Description';

export default {
  name: 'app',
  components: {
    Map,
    Description
  },

  mounted() {
    this.$store.dispatch("SET_BACKGROUND_URL");
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
