<template>
  <div class="description" :style="{ backgroundImage: `url('${this.$store.state.imgUrl}')` }">
    <div class="descriptions-container">
      <div class="intro">
        <h1>Space Explorer</h1>
        <p>{{this.$store.state.intro}}</p>
        </div>
      <h2>Satellite Information</h2>
      <div>
        Current Satellites is: {{this.$store.state.center.name}}<br/>
        Latitude: {{this.$store.state.center.lat}} Longitude: {{this.$store.state.center.lng}}<br/>
      </div>
      <h2>Sun Information</h2>
      dawn: {{time(this.$store.state.sunInfo[0].dawn)}}<br/>
      sunset: {{time(this.$store.state.sunInfo[1].sunset)}}<br/>
      noon: {{time(this.$store.state.sunInfo[2].noon)}}<br/>
      sunrise: {{time(this.$store.state.sunInfo[3].sunrise)}}<br/>
      dusk: {{time(this.$store.state.sunInfo[4].dusk)}}
      <h2>Moon Information</h2>
      age: {{this.$store.state.moonInfo[0].age}}<br/>
      illumination: {{this.$store.state.moonInfo[0].illumination}}<br/>
      stage: {{this.$store.state.moonInfo[0].stage}}<br/>
      DFCOE: {{this.$store.state.moonInfo[0].DFCOE}}<br/>
      DFS: {{this.$store.state.moonInfo[0].DFS}}<br/>
      FM- UT: {{time(this.$store.state.moonInfo[0].FM.UT)}} DT: {{time(this.$store.state.moonInfo[0].FM.DT)}}<br/>
      NNM- UT:{{time(this.$store.state.moonInfo[0].NNM.UT)}}  DT:{{time(this.$store.state.moonInfo[0].NNM.DT)}}
      <div class="features">
        <h2>Features</h2>
        <div class="text" v-for="text in this.$store.state.texts" v-bind:key="text.id">
          <div>{{text.feature}}: {{text.detail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const moment = require("moment");
export default {
  name: "Description",
  methods: {
    time: function(dateTime) {
      return moment(dateTime).format('LT');
    }
  }
};
</script>

<style scoped>
  .description {
    padding: 35px 5px;
    background-color: white;
    text-align: left;
    height: 1000px;
  }

  .descriptions-container {
    opacity: 0.6;
    background-color: black;
    color: white;
    font-weight: 800;
  }

  .description-block {
    color: white;
    font-weight: 900;
  }

.intro {
  margin-top: 10px;
}

.features {
  margin-top: 25px;
}
</style>