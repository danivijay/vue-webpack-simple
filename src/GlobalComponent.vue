<template>
  <div>
    <h2>Global Component</h2>
    <ul>
      <li v-for="car in cars">{{ car.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cars'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
