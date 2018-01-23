<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greetMe() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Welcome to Vue'
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
