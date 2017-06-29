<template>
  <div class="pagination">
    <span v-if="totalPages > 1">
      <a @click="selectPage(currentPage - 1)">{{ prevPagePlaceholder }}</a>
      <a v-for="pageNumber in pagesDisplayRange" @click="selectPage(pageNumber)"
        :class="{ 'active': pageNumber === currentPage }">{{ pageNumber }}</a>
      <a @click="selectPage(currentPage + 1)">{{ nextPagePlaceholder }}</a>
    </span>
    <select v-model="selected">
      <option v-for="pageCount in itemsPerPageAvailableOptions">{{ pageCount }}</option>
    </select>
  </div>
</template>
<script>
function rangeArray (from, to) {
  return [...Array(to - from + 1).keys()].map(a => a + from)
}

export default {
  name: 'paginator',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    selectedPageMargin: {
      type: Number,
      default: 3
    },
    displayPagesWithoutBreaking: {
      type: Number,
      default: 10
    },
    prevPagePlaceholder: {
      type: String,
      default: '«'
    },
    nextPagePlaceholder: {
      type: String,
      default: '»'
    },
    itemsPerPage: {
      type: Number,
      default: 25
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => [10, 25, 50]
    }
  },
  data () {
    return {
      selected: this.itemsPerPage
    }
  },
  watch: {
    selected (val, oldVal) {
      this.$emit('setItemsPerPage', val)
    },
    itemsPerPage (val, oldVal) {
      this.selected = val
    }
  },
  methods: {
    selectPage (page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('pageSelected', page)
      }
    }
  },
  computed: {
    pagesDisplayRange () {
      const { totalPages, currentPage, selectedPageMargin,
        displayPagesWithoutBreaking } = this

      if (totalPages < displayPagesWithoutBreaking) {
        return rangeArray(1, totalPages)
      }

      let set = new Set([1, totalPages,
        ...rangeArray(currentPage - selectedPageMargin,
          currentPage + selectedPageMargin)])

      return [...set]
        .filter(a => a >= 1 && a <= totalPages)
        .sort((a, b) => a > b)
    },
    itemsPerPageAvailableOptions () {
      let itemsPerPageAvailableOptions = this.itemsPerPageOptions
        .concat(+this.itemsPerPage)
        .sort((a, b) => a - b)
      return [...new Set(itemsPerPageAvailableOptions)]
    }
  }
}
</script>
<style scoped lang="scss">
@import '../shared/styles/main.scss';

.pagination {
  display: inline-block;
  margin: .5em;

  a {
    color: $paginator-text-color;
    background-color: $paginator-color;
    border: 1px solid $paginator-border-color;
    float: left;
    padding: .5em 1em;
    text-decoration: none;
    cursor: pointer;

    &.active {
      color: $paginator-selected-text-color;
      background-color: $paginator-selected-color;
      border: 1px solid $paginator-selected-color;
    }

    &:hover:not(.active) {
      color: $paginator-hover-text-color;
      background-color: $paginator-hover-color;
      border: 1px solid $paginator-hover-color;
    }

    &:first-child {
      border-top-left-radius: .3em;
      border-bottom-left-radius: .3em;
    }

    &:last-child {
      border-top-right-radius: .3em;
      border-bottom-right-radius: .3em;
    }
  }
}

.pagination-options {
  margin-bottom: .3em;
}

select {
  font-size: 1em;
  padding: .5em;
  margin-left: 2em;
}
</style>
