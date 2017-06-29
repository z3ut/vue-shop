<template>
  <footer>My gorgeous shop, {{ new Date().getFullYear()}}</footer>
</template>

<script>
export default {
  name: 'shop-footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../shared/styles/main.scss';

footer {
  width: 100%;
  height: 2em;
  line-height: 2em;
  background-color: $footer-color;
  color: $footer-text-color;
}
</style>
