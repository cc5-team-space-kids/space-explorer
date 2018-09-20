<template>
  <!-- <div id="app">
    <h3 class="title">Space Explorer</h3>
    <GoogleMap></GoogleMap>
    <Description />
  </div> -->
  <div class="main-container">
    <v-container
      fill-height
      fluid
      pa-0>
      <v-layout
        row
      >
        <v-slide-x-transition>
          <v-flex
            v-if="!hideLeft"
            class="left-aside-wrapper"
          >
            <Description />
          </v-flex>
        </v-slide-x-transition>
        <v-flex class="main-map-wrapper">
          <GoogleMap></GoogleMap>
        </v-flex>
      </v-layout>
    </v-container>
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


<style lang="less">
  /* #app {
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
  } */
  .main-container {
    position: relative;
    height: 100vh;
    .left-aside-wrapper {
      z-index: 2;
      position: relative;
      min-width: 320px;
      max-width: 320px;
      height: 100vh;
    }
    .main-map-wrapper {
      z-index: 1;
      width: 100%;
    }
    // Responsive
    .viewport-sm & {
      .left-aside-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 320px;
        height: 100%;
        display: block;
      }
    }
  }
</style>
