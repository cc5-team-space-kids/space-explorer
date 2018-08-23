<template>
  <div class="description">
    <div class="intro">{{intro}}</div>
    <div class="features">
      <h2>Features</h2>
      <div class="text" v-for="text in texts" v-bind:key="text.id">
        <h4>{{text.feature}}</h4>
        <div>{{text.detail}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Description',
    data: () => ({
      intro: 'This app is for space nerds who is intrigued with the outer space.' +
      'There are numerous numbers of satllites orbiting the earth. For TVs, weather, GPS, security, and more.' +
      'This app shows the positions of the satellites in real-time on a map!',
      texts: [
        {id: 1, feature: "Map", detail: "The markers indicate the satellites above the earth plain in real-time"},
        {id: 2, feature: "Background", detail: "The background image changes everyday, complimentary of NASA"}
      ]
    })
  }
</script>

<style scoped>
  .description {
    padding: 10px;
    background-color: white;
    text-align: left;
    margin-top: 100px;
  }

  .intro {
    margin-top: 10px;
  }

  .features {
    margin-top: 25px;
  }
</style>