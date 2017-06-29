<template>
  <ul>
    <li><router-link to="/catalog">Catalog</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li class="phones">
      <span>
        8 555 1234 45 67<br>
        8 555 1234 12 12<br>
        8 555 4321 32 85
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'shop-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../shared/styles/main.scss';

ul {
  background-color: $header-color;
  overflow: hidden;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 4em;
}

li {
  float: left;
  height: 100%;

  a {
    display: block;
    color: $header-text-color;
    text-align: center;
    padding: 1.4em;
    text-decoration: none;

    &:hover:not(.router-link-active) {
      background-color: $header-link-hover-color;
    }
  }
}

.phones {
  color: $header-text-color;
  float: right;
  text-align: center;
  height: 100%;
  line-height: 4em;

  span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    padding-right: 1em;
  }
}

.router-link-active {
  background-color: $header-link-selected-color;
}
</style>
