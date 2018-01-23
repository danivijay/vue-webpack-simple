<template>
  <div>
    <h2>Local Component - with prop validation</h2>
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
