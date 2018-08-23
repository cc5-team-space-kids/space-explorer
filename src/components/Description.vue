<template>
  <div class="description" :style="{ backgroundImage: `url('${this.$store.state.imgUrl}')` }">
    <div class="descriptions-container">
      <div class="description-block">{{this.$store.state.center}}</div>
      <div class="description-block">{{sunInfo}}</div>
      <div class="description-block">{{moonInfo}}</div>
      <div class="description-block intro">{{intro}}</div>
      <div class="description-block features">
        <h2>Features</h2>
        <div class="text" v-for="text in texts" v-bind:key="text.id">
          <h4>{{text.feature}}</h4>
          <div>{{text.detail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  data: function() {
    return {
      intro:
        "This app is for space nerds who is intrigued with the outer space." +
        "There are numerous numbers of satllites orbiting the earth. For TVs, weather, GPS, security, and more." +
        "This app shows the positions of the satellites in real-time on a map!",
      texts: [
        {
          id: 1,
          feature: "Map",
          detail:
            "The markers indicate the satellites above the earth plain in real-time"
        },
        {
          id: 2,
          feature: "Background",
          detail: "The background image changes everyday, complimentary of NASA"
        }
      ],
      sunInfo: this.$store.state.sunInfo,
      moonInfo: this.$store.state.moonInfo
    };
  }
};
</script>

<style scoped>
  .description {
    padding: 35px 5px;
    background-color: white;
    text-align: left;
    height: 800px;
  }

  .descriptions-container {
    background-color: black;
    opacity: 0.6;
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