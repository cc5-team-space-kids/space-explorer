<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-bind:src="imgUrl" />
      Hi Tsuyoshi
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    imgUrl: {}
  }),
  mounted() {
    const RapidAPI = require("rapidapi-connect");
    const rapid = new RapidAPI(
      process.env.VUE_APP_RAKUTEN_PKG,
      process.env.VUE_APP_RAKUTEN_PROJ
    );

    rapid
      .call("NasaAPI", "getPictureOfTheDay", {})
      .on("success", result => {
        console.log(result);
        this.imgUrl = result.hdurl;
      })
      .on("error", err => {
        console.log(err);
      });
  }
};
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
</style>
