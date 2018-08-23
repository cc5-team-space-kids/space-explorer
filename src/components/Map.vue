<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      Hi Tsuyoshi
      {{message}}
      <div>
        <button v-on:click="addMessage">button</button>
      </div>
      <GmapMap class="map"
        :center="{lat:35.6578596, lng:139.7274762}"
        :zoom="16"
        map-type-id="terrain"
      >
        <!-- <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        /> -->
      </GmapMap>
    </div>
</template>

<script>
export default {
  name: 'Map',
  computed: {
    //update data using the state in store
    message () {
      return this.$store.state.message
    }
  },
  methods: {
    addMessage () {
      this.$store.dispatch("ADD_MESSAGE", "You got mail!")
    }
  },
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.map {
  width: 70%; 
  height: 700px; 
  margin: 0 auto;
}
</style>
