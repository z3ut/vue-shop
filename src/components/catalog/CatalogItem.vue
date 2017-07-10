<template>
  <router-link :to="'catalog/' + item.name">
    <div class="product">
      <div class="img-wrapper">
        <img :src="item.imageSmallUrl" alt="item image">
      </div>
      <div class="description">
        <span class="item-name">{{item.name}}</span><br>
        <span class="item-price">{{item.price}}р</span>
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
  margin: .5em;
  background-color: white;
  color: $catalog-item-text-color;

  &:hover {
    box-shadow: 0 .2em .4em #CCC;
  }
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

  .item-name {
    font-size: 1.2em;
  }

  .item-price {
    font-size: 1.1em;
  }
}

a {
  text-decoration: none;
}
</style>
