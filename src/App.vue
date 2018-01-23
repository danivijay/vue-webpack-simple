<template>
  <div>
    <h1>{{ title }}</h1>
    <global-component :cars="cars" :name="name" />
    <local-comp :cars="cars" :name="name" />
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
      name: 'dani',
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
