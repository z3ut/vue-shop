<template>
  <div>
    <div class="image-container" v-if="url" @click="closeClick()" :class="{'fixed': containerPosition === 'fixed', 'absolute': containerPosition === 'absolute'}"> 
      <img :src="url"
        alt="image">
    </div>
  </div>
</template>
<script>
export default {
  name: 'paginator',
  props: {
    url: {
      type: String
    },
    position: {
      type: String,
      default: 'absolute'
    }
  },
  methods: {
    closeClick () {
      this.$emit('close')
    }
  },
  computed: {
    containerPosition () {
      return this.position === 'absolute' ? 'absolute' : 'fixed'
    }
  }
}
</script>
<style scoped>
.image-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.3);
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  cursor: zoom-out;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}
</style>
