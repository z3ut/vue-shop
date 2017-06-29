<template>
  <div id="app">
    <shop-header></shop-header>
    <div class="content-holder">
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
  margin-top: -4em;
  margin-bottom: -2em;
}

.content-holder:after,
.content-holder:before {
  content: "";
  display: block;
}

footer, .content-holder:after {
  height: 2em; 
}

shop-header, .content-holder:before {
  height: 4em; 
}

</style>
