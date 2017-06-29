export default {
  product: (state, getters) => (name) => {
    return state.products.find(p => p.name === name)
  },
  minPrice (state, getters, rootState) {
    return getters.filteredProducts.length ?
      Math.min(...getters.filteredProducts.map(p => p.price)) :
      null
  },
  maxPrice (state, getters, rootState) {
    return getters.filteredProducts.length ?
      Math.max(...getters.filteredProducts.map(p => p.price)) :
      null
  },
  categories (state) {
    return [...new Set(state.products.map(p => p.category))]
  },
  subcategories: (state, getters) => (category) => {
    return [...new Set(state.products
      .filter(p => p.category === category)
      .map(p => p.subcategory)
      .filter(s => s)
    )]
  },
  itemsPerPage (state, getters, rootState) {
    return +rootState.route.query.itemsPerPage || state.itemsPerPage
  },
  totalPages (state, getters, rootState) {
    return getters.filteredProducts.length ?
      Math.ceil(getters.filteredProducts.length / getters.itemsPerPage) :
      0
  },
  activeProductsCount (state, getters, rootState) {
    return getters.filteredProducts.length
  },

  activeProducts (state, getters, rootState) {
    let products = getters.orderedProducts
    if (!Array.isArray(products)) {
      return []
    }
    let page = rootState.route.query.page || 1
    let itemsPerPage = getters.itemsPerPage

    const indexFrom = (page - 1) * itemsPerPage
    const indexTo = page * itemsPerPage
    products = products.slice(indexFrom, indexTo)
    return products
  },

  orderedProducts (state, getters, rootState) {
    let products = getters.filteredProducts
    if (!Array.isArray(products)) {
      return []
    }
    let order = rootState.route.query.order
    let orderBy = rootState.route.query.orderBy

    if (!order || !orderBy) {
      return products
    }

    products = products.slice()
    let orderMultiplier = order === 'asc' ? 1 : -1
    products.sort((a, b) => {
      switch (typeof a[orderBy]) {
        case 'string':
          return orderMultiplier * a[orderBy].localeCompare(b[orderBy])
        case 'number':
          return orderMultiplier * (a[orderBy] - b[orderBy])
        case 'boolean':
          // truthy first for ascending order: b - a
          return orderMultiplier * (b[orderBy] - a[orderBy])
        default:
          return 0
      }
    })

    return products
  },

  filteredProducts (state, getters, rootState) {
    let products = state.products
    if (!Array.isArray(products)) {
      return []
    }
    if (isFinite(rootState.route.query.priceFrom)) {
      products = products.filter(p => p.price >= +rootState.route.query.priceFrom)
    }
    if (isFinite(rootState.route.query.priceTo)) {
      products = products.filter(p => p.price <= +rootState.route.query.priceTo)
    }
    if (rootState.route.query.category) {
      products = products.filter(p => p.category === rootState.route.query.category)
    }
    if (rootState.route.query.subcategory) {
      products = products.filter(p => p.subcategory === rootState.route.query.subcategory)
    }

    return products
  }
}
