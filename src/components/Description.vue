<template>
  <div>
    Description
    <div>{{sunInfo}}</div>
    <div>{{moonInfo}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Description',
    data() {
      return {
        sunInfo: this.$store.state.sunInfo,
        moonInfo: this.$store.state.moonInfo,
      };
  },
  }
</script>

<style scoped>
</style>