<template>
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

  data() {
    return {
      center: this.$store.state.center
    }
  },

  beforeMount() {
    this.getSunInfo();

  },

  mounted() {
    this.$store.dispatch("SET_BACKGROUND_URL");
  },

  methods: {
    getSunInfo() {
      const loc = this.center;
      this.$store.dispatch("SET_SUN_INFO", loc);
    },
  },
}
</script>


<style lang="less">
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
