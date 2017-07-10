<template>
  <router-link :to="'catalog/' + item.name">
    <div class="product">
      <div class="img-wrapper">
        <img :src="item.imageSmallUrl" alt="item image">
      </div>
      <div class="description">
        {{item.name}}<br>
        {{item.price}}р
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'catalog-item',
  props: [
    'item'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../shared/styles/main.scss';

.product {
  width: 10em;
  height: 20em;
  float: left;
  margin: 1em;
  background-color: $catalog-item-color;
  color: $catalog-item-text-color;
}

.img-wrapper {
  margin: .5em;

  img {
    max-width: 9em;
    max-height: 15em;
    overflow: hidden;
  }
}

.description {
  margin: .3em;
}

a {
  text-decoration: none;
}
</style>
