import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '@/components/catalog/Catalog'
import Product from '@/components/catalog/Product'
import Page404 from '@/components/Page404'
import About from '@/components/About'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/catalog',
      alias: '/',
      name: 'catalog',
      component: Catalog,
      props: (route) => ({
        page: +route.query.page || 1,
        category: route.query.category,
        priceFrom: isFinite(route.query.priceFrom) ? +route.query.priceFrom : null,
        priceTo: isFinite(route.query.priceTo) ? +route.query.priceTo : null,
        orderBy: route.query.orderBy,
        order: route.query.order
      })
    },
    {
      path: '/catalog/:name',
      name: 'product',
      component: Product,
      props: (route) => ({
        name: route.params.name
      })
    },
    {
      path: '/404',
      name: 'page404',
      component: Page404
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*', redirect: '/404'
    }
  ]
})

export default router
