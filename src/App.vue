<template>
  <div id="app">
    <img v-bind:src="imgUrl" />
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
  data () {
    return {
      imgUrl: {}
    }
  },
  mounted() {
    const RapidAPI = require('rapidapi-connect');
    const rapid = new RapidAPI(process.env.VUE_APP_RAKUTEN_PKG, process.env.VUE_APP_RAKUTEN_PROJ);

    rapid.call('NasaAPI', 'getPictureOfTheDay', { 
    }).on('success', (result)=>{
      console.log(result);
      this.imgUrl = result.url;
    }).on('error', (err)=>{
      console.log(err);
    });
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
  margin-top: 60px;
}
</style>
