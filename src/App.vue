<template>
  <div>
    <h1>{{ title }}</h1>
    <global-component />
    <local-comp />
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
      title: 'Component Demo'
    }
  },
  methods: {
    greetMe () {
      return 'this is some Vueeeee!!'
    }
  }
}
</script>

<style>
</style>
