import { getProducts } from '@/api/catalog.js'

import {
  SAVE_PRODUCTS,
  PRODUCTS_LOADING_START,
  PRODUCTS_LOADING_SUCCESS,
  PRODUCTS_LOADING_FAILURE
} from '../mutation-types'

export default {
  loadProducts (context) {
    return new Promise((resolve, reject) => {
      context.commit(PRODUCTS_LOADING_START)
      getProducts().then(data => {
        context.commit(SAVE_PRODUCTS, data)
        context.commit(PRODUCTS_LOADING_SUCCESS)
        resolve()
      }).catch((reason) => {
        context.commit(PRODUCTS_LOADING_FAILURE)
        reject(reason)
      })
    })
  }
}
