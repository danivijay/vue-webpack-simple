<template>
  <div>
    <h1>{{ title }}</h1>
    <global-component :cars="cars" />
    <local-comp :cars="cars" />
  </div>
</template>

<script>
import LocalComponent from './LocalComponent.vue'
export default {
  components: {
    'local-comp': LocalComponent
  },
  data () {
    return {
      title: 'Component Demo',
      cars: [
        { name: 'hyundai', country: 'korea' },
        { name: 'audi', country: 'germany' },
        { name: 'bmw', country: 'germany' }
      ]
    }
  }
}
</script>

<style>
</style>
