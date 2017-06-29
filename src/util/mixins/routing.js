export const routing = {
  methods: {
    changeRouteQuery (options) {
      // do not query empty strings
      for (let prop in options) {
        if (options[prop] === '') {
          options[prop] = undefined
        }
      }
      let query = Object.assign({}, this.$route.query, options)
      this.$router.push({ query: query })
    }
  }
}
