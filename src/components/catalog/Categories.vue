<template>
  <div class="categories">
    <div @click="selectCategory()"
        :class="{ 'selected': !selectedCategory}"
        class="category">
      All
    </div>
    <div v-for="categoryName in categories" :key="categoryName">
      <div class="category"
          @click="selectCategory(categoryName)"
          :class="{ 'selected': selectedCategory === categoryName && !selectedSubcategory}">
        {{ categoryName }}
      </div>
      <template v-if="categoryName === selectedCategory">
        <div v-for="subcategoryName in subcategories(categoryName)"
            :key="subcategoryName"
            @click="selectSubcategory(subcategoryName)"
            class="subcategory"
            :class="{ 'selected': selectedSubcategory === subcategoryName}">
          {{ subcategoryName }}
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'categories',
  computed: {
    ...mapGetters('products', [
      'categories',
      'subcategories'
    ]),
    selectedCategory () {
      // if it catalog page, get category in query string
      let category = this.$route.query.category
      if (category) {
        return category
      }
      // if it product page, get product name in url parameter
      let productName = this.$route.params.name
      let product = this.$store.getters['products/product'](productName)
      if (product) {
        return product.category
      }
    },
    selectedSubcategory () {
      // if it catalog page, get subcategory in query string
      let subcategory = this.$route.query.subcategory
      if (subcategory) {
        return subcategory
      }
      // if it product page, get product name in url parameter
      let productName = this.$route.params.name
      let product = this.$store.getters['products/product'](productName)
      if (product) {
        return product.subcategory
      }
    }
  },
  methods: {
    selectCategory (category) {
      let query = Object.assign({}, this.$route.query)
      query.category = category
      delete query.page
      delete query.subcategory
      this.$router.push({ name: 'catalog', query: query })
    },
    selectSubcategory (subcategory) {
      let query = Object.assign({}, this.$route.query)
      query.subcategory = subcategory
      delete query.page
      this.$router.push({ name: 'catalog', query: query })
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../shared/styles/main.scss';

.categories {
  padding: .5em 1em;
}

.category, .subcategory {
  cursor: pointer;
  display: block;
  padding: .5em 1em;
  color: $category-text-color;
  text-align: left;
  background-color: $category-background-color;
  transition: .1s linear;

  &:hover {
    border-right: .3em solid $primary-color;

    &:not(.selected) {
      background-color: $category-hover-color;
      color: $category-hover-text-color;
    }
  }

  &.selected {
    background-color: $category-selected-color;
    color: $category-selected-text-color;
  }
}

.subcategory {
  padding-left: 2em;
}

</style>
