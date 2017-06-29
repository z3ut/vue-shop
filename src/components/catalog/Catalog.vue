<template>
  <div class="container">
    <div class="sidebar">
      <categories></categories>
      <div class="filters">
        <div class="range-filter">
          Price:<br>
          <div>
            from 
            <input type="number" v-model.number="priceFromInput"
              :placeholder="minPrice"></input></br>
            to
            <input type="number" v-model.number="priceToInput"
              :placeholder="maxPrice"></input>
          </div>
        </div>
      </div>
    </div>
    
    <div class="content">
      <div class="products-header">
        <span class="total">Total: {{ activeProductsCount }}</span>
        <button @click="orderProductsBy('price')">Price
          <span class="filter-triangle" v-bind:class="{
              'transparent': !orderBy || orderBy !== 'price',
              'rotated': order && order === 'desc'
            }">&#9660;</span>
        </button>
        <button @click="orderProductsBy('name')">Name
          <span class="filter-triangle" v-bind:class="{
              'transparent': !orderBy || orderBy !== 'name',
              'rotated': order && order === 'desc'
            }">&#9660;</span>
        </button>
      </div>

      <span v-if="productsNotFound">Nothing found</span>
      <span v-if="isLoadingFailure">Connection error</span>

      <template v-if="!productsNotFound && !isLoadingFailure">
        <div class="products">
          <catalog-item  v-for="item in activeProducts" :key="item.name" :item="item"></catalog-item>
        </div>
        <paginator
          :currentPage="page"
          :totalPages="totalPages"
          :itemsPerPage="itemsPerPage"
          @pageSelected="pageSelected($event)"
          @setItemsPerPage="setItemsPerPage($event)">
        </paginator>
      </template>
    </div>
    <loader :visible="isLoading"></loader>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem'
import Categories from './Categories'
import Loader from '@/shared/Loading'
import Paginator from '@/shared/Paginator'
import { routing } from '@/util/mixins/routing'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'catalog',
  components: {
    'catalog-item': CatalogItem,
    'loader': Loader,
    'categories': Categories,
    'paginator': Paginator
  },
  mixins: [routing],
  data () {
    return {
      priceFromInput: this.priceFrom,
      priceToInput: this.priceTo
    }
  },
  props: [
    'page',
    'category',
    'priceFrom',
    'priceTo',
    'orderBy',
    'order'
  ],
  watch: {
    priceFromInput (val, oldVal) {
      this.changeRouteQuery({ priceFrom: val, page: 1 })
    },
    priceToInput (val, oldVal) {
      this.changeRouteQuery({ priceTo: val, page: 1 })
    }
  },
  methods: {
    orderProductsBy (order) {
      this.changeRouteQuery({
        orderBy: order,
        order: this.orderBy === order && this.order === 'asc' ? 'desc' : 'asc'
      })
    },
    pageSelected (page) {
      this.changeRouteQuery({ page: page })
    },
    setItemsPerPage (itemsPerPage) {
      this.changeRouteQuery({ itemsPerPage: itemsPerPage, page: 1 })
    }
  },
  computed: {
    ...mapGetters('products', [
      'activeProducts',
      'minPrice',
      'maxPrice',
      'itemsPerPage',
      'categories',
      'totalPages',
      'activeProductsCount'
    ]),
    ...mapState('products', [
      'isLoading',
      'isLoadingFailure'
    ]),
    productsNotFound () {
      return !this.isLoadingFailure && !this.isLoading && (!this.activeProducts || this.activeProducts.length === 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../shared/styles/main.scss';

.products-header {
  vertical-align: middle;
  height: 1.6em;
  margin: 0.5em 1em;
  padding: .25em 1em;
  color: $products-header-text-color;
  background-color: $products-header-color;
  text-align: left;

  button {
    float: right;
  }
}

.products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em;
}

.total {
  line-height: 1.6em;
  float: left;
}

button {
  border: none;
  background-color: $products-header-color;
  color: $products-header-text-color;
  min-width: 5em;
  height: 2em;
  line-height: 2em;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
}

.filters {
  margin: 0.5em 1em;
  background-color: $category-background-color;
}

.range-filter {
  padding: .3em;
  text-align: center;

  div {
    display: inline-block;
    text-align: right;
  }
}

input[type="number"] {
  width: 5em;
}

.filter-triangle {
  display: inline-block;
  transition: linear .2s;
}

.transparent {
  opacity: 0;
}

.rotated {
  transform: rotate(-180deg);
}
</style>
