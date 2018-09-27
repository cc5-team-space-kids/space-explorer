<template>
  <div class="description" :style="{ backgroundImage: `url('${this.$store.state.imgUrl}')` }">
    <div class="descriptions-container">
      <div class="intro">
        <img src="../../img/saturn-clipart-5.png" />
        <span class="title text">  Space Explorer</span>
        <p class="descriptionText text">{{this.$store.state.intro}}</p>
        </div>
     
      <v-card color="transparent">
      <v-container
        fluid
        grid-list-lg
        
      >
        <v-layout row wrap>
          <v-flex>
            <v-card color="black darken-2" class="white--text">
               <v-card-title primary-title>
              <div>
                <h2>Satellite Information</h2>
                  <div>
                    <div v-if="this.$store.state.center.name !== '<Please select satellite>'">
                      <!-- https://www.google.com/search?safe=off&source=hp&ei=lF-sW42OKJGnoASJmZTABQ&q=satellite&oq=satellite&gs_l=psy-ab.3..35i39k1l2j0i67k1l6j0i203k1j0i67k1.2459.4054.0.4253.11.10.0.0.0.0.161.879.4j4.9.0....0...1c.1.64.psy-ab..2.9.955.6...78.jHcE3ClRmhQ -->
                      Current Satellite is: <br/><a :href="'https://www.google.com/search?safe=off&source=hp&ei=lF-sW42OKJGnoASJmZTABQ&q=' + this.$store.state.center.name + '&oq=' + this.$store.state.center.name" target="_blank">{{this.$store.state.center.name}}</a><br/>
                    </div>
                    <div v-else>
                      Current Satellite is: <br/>{{this.$store.state.center.name}}<br/>
                    </div>
                    Latitude: <br/>{{this.$store.state.center.lat}}<br/> Longitude: <br/>{{this.$store.state.center.lng}}<br/>
                  </div>
              </div>
            </v-card-title>
             
            </v-card>
          </v-flex>
          <v-flex>
            <v-card color="black darken-2" class="white--text">
               <v-card-title primary-title>
              <div v-if="this.$store.state.sunInfo.length > 0">
                  <h2>Sun Information</h2>
                  dawn: {{time(this.$store.state.sunInfo[0].dawn)}}<br/>
                  sunset: {{time(this.$store.state.sunInfo[1].sunset)}}<br/>
                  noon: {{time(this.$store.state.sunInfo[2].noon)}}<br/>
                  sunrise: {{time(this.$store.state.sunInfo[3].sunrise)}}<br/>
                  dusk: {{time(this.$store.state.sunInfo[4].dusk)}}
              </div>
            </v-card-title>
             
            </v-card>
          </v-flex>
          <v-flex v-if="this.$store.state.moonInfo.length > 0">
            <v-card color="black darken-2" class="white--text">
               <v-card-title primary-title>
              <div>
                <h2>Moon Information</h2>
                age: {{this.$store.state.moonInfo[0].age.toFixed(1)}} days<br/>
                illumination: {{this.$store.state.moonInfo[0].illumination.toFixed(1)}}%<br/>
                stage: {{this.$store.state.moonInfo[0].stage}}<br/>
                DFCOE: {{this.$store.state.moonInfo[0].DFCOE}}<br/>
                DFS: {{this.$store.state.moonInfo[0].DFS}}<br/>
                FM- UT: {{time(this.$store.state.moonInfo[0].FM.UT)}} DT: {{time(this.$store.state.moonInfo[0].FM.DT)}}<br/>
                NNM- UT:{{time(this.$store.state.moonInfo[0].NNM.UT)}}  DT:{{time(this.$store.state.moonInfo[0].NNM.DT)}}
              </div>
            </v-card-title>
             
            </v-card>
          </v-flex>
          <v-flex v-else>
            <v-card color="black darken-2" class="white--text">
               <v-card-title primary-title>
              <div>
                <h2>Moon Information</h2>
                  age: 13.6 days<br/>
                  illumination: 97.3%<br/>
                  stage: waxing<br/>
                  DFCOE: DKEAAL 4345<br/>
                  DFS: DKSK<br/>
              </div>
            </v-card-title>
             
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card>
    <div class="features text">
        <img src="../../img/saturn-clipart-5.png" class="saturn"/>
        <span class="title text">  Features</span>
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
      return moment(dateTime).format("LT");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito");
.title {
  font-size: 30px !important;
}

.descriptionText {
  margin: 5%;
}

.intro img {
  width: 20%;
}

a { color: inherit; }

.saturn {
  width: 20%;
}

.description {
  font-family: "Nunito", sans-serif;
  padding: 35px 5px;
  background-color: white;
  text-align: left;
  height: 1100px;
}

.descriptions-container {
  padding: 10px;
  /* opacity: 0.6; */
  /* background-color: black; */
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

.text {
  color: #fff;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}
</style>