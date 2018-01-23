<template>
  <div>
    <h2>Local Component - with prop validation</h2>
    <h3>{{ name }}</h3>
    <ul>
      <li v-for="car in cars">{{ car.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cars: {
      type: Array,
      required: true
    },
    name: {
      type: String
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
