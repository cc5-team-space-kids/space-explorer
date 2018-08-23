<template>
  <div id="app" :style="{ backgroundImage: `url('${imgUrl}')` }">
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
      imgUrl: ""
      // imgUrl: this.$store.state.imgUrl
      // imgUrl: "https://photojournal.jpl.nasa.gov/jpeg/PIA14417.jpg"
    }
  },
  mounted() {
    // this.$store.dispatch("SET_BACKGROUND_URL")
    const RapidAPI = require('rapidapi-connect');
    const rapid = new RapidAPI(process.env.VUE_APP_RAKUTEN_PKG, process.env.VUE_APP_RAKUTEN_PROJ);

    rapid.call('NasaAPI', 'getPictureOfTheDay', { 
    }).on('success', (result)=>{
      this.imgUrl = result.hdurl;
    }).on('error', (err)=>{
      console.log(err);
    });

  },

  computed: {
    getimgUrl: function() {
      console.log("Hi I'm computed")
      return this.$store.dispatch("SET_BACKGROUND_URL")
    }
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
