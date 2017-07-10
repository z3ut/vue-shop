<template>
  <div id="app">
    <div class="content-holder">
      <shop-header></shop-header>
      <router-view></router-view>
    </div>
    <shop-footer></shop-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from '@/shared/Loading'

export default {
  name: 'app',
  components: {
    'loader': Loader,
    'shop-header': Header,
    'shop-footer': Footer
  },
  created () {
    this.$store.dispatch('products/loadProducts')
      .catch((reason) => this.$root.$refs.toastr.e('Connection error'))
  },
  mounted () {
    this.$root.$refs.toastr.defaultTimeout = 0
    this.$root.$refs.toastr.defaultCloseOnHover = false
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}

.content-holder {
  min-height: 100%;
  margin-bottom: -2em;
  background-color: #F2F2F2;
}

.content-holder:after {
  content: "";
  display: block;
}

footer, .content-holder:after {
  height: 2em; 
}

</style>
