<template>
  <div>
    Description
    <div>{{sunInfo}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Description',
    data() {
      return {
        sunInfo: this.$store.state.sunInfo,
      };
  },
  }
</script>

<style scoped>
</style>