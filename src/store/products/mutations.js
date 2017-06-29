import {
  SAVE_PRODUCTS,
  PRODUCTS_LOADING_START,
  PRODUCTS_LOADING_SUCCESS,
  PRODUCTS_LOADING_FAILURE
} from '../mutation-types'

export default {
  [SAVE_PRODUCTS] (state, products) {
    state.products = products
  },
  [PRODUCTS_LOADING_START] (state) {
    state.isLoading = true
    state.isLoadingFailure = false
  },
  [PRODUCTS_LOADING_SUCCESS] (state) {
    state.isLoading = false
  },
  [PRODUCTS_LOADING_FAILURE] (state) {
    state.isLoadingFailure = true
    state.isLoading = false
  }
}
