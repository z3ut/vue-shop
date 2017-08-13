<template>
  <div class="container">
    <loader :visible="isLoading"></loader>
    <div class="sidebar">
      <categories class="categories"></categories>
      <button class="link-back" @click="goBack()">&lArr; Back</button>
    </div>
    <div class="content">
      <span v-if="isLoadingError">Connection error</span>
      <div class="product-info" v-if="!isLoading && product">
        <div class="images">
          <img :src="product.imageUrl" @click="selectImage(product.imageUrl)"></img>
        </div>
        <div class="product-data">
          <span class="name">{{ product.name }}</span><br>
          <span class="price">{{ product.price }}р</span><br>
          <p class="description">{{ product.description }}</p>
        </div>
      </div>
      <div class="item-not-found" v-if="!isLoading && !product">
        Nothing found
      </div>
    </div>
    <photo-container :url="selectedImageUrl" @close="closeImage()" :position="'fixed'"></photo-container>
  </div>
</template>

<script>
import PhotoContainer from '@/shared/PhotoContainer'
import Categories from './Categories'
import Loader from '@/shared/Loading'
import { mapState } from 'vuex'

export default {
  name: 'product',
  components: {
    'loader': Loader,
    'photo-container': PhotoContainer,
    'categories': Categories
  },
  props: [
    'name'
  ],
  data () {
    return {
      selectedImageUrl: null
    }
  },
  computed: {
    product () {
      return this.$store.getters['products/product'](this.name)
    },
    ...mapState('products', [
      'isLoading',
      'isLoadingError'
    ])
  },
  methods: {
    selectImage (url) {
      this.selectedImageUrl = url
    },
    closeImage () {
      this.selectedImageUrl = null
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../shared/styles/main.scss';

.product-info {
  padding: 1em;
}

.link-back {
  padding: .4em .8em;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: .3em;
  background-color: transparent;
  font-size: 1em;
}

.images {
  display: inline-block;
}

img {
  display: inline-block;
  max-width: 300px;
  max-height: 700px;
  cursor: zoom-in;
}

.product-data {
  max-width: 50%;
  display: inline-block;
  vertical-align: top;
  padding: 0 1em;
}

.item-not-found {
  margin-top: 2em;
}

.name {
  font-size: 2em;
}

.price {
  font-size: 1.5em;
}

.description {
  text-align: justify;
  white-space: pre-line;
}

</style>
