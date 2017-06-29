import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    products: [],
    itemsPerPage: 25,
    isLoading: true,
    isLoadingError: false
  },
  getters,
  mutations,
  actions
}
