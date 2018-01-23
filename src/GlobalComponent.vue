<template>
  <div>
    <h2>Global Component</h2>
    <h3>{{ name }} - Primitive types: string, number, boolean, null, undefined</h3>
    <button @click="changeName()">Change Name</button>
    <ul>
      <li v-for="car in cars">{{ car.name }}</li>
      <button @click="removeCar()">Delete</button>
      <span>Reference types : array, object</span>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'cars',
    'name'
  ],
  data () {
    return {

    }
  },
  methods: {
    removeCar () {
      this.cars.pop()
    },
    changeName () {
      this.name = 'UtmostDev'
    }
  }
}
</script>

<style>

</style>
