<template>
  <div>
    <h2>Global Component</h2>
    <h3>{{ name }} - Primitive types: string, number, boolean, null, undefined</h3>
    <button @click="changeName()">Change Name</button>
    <button @click="changeNameBus()">Change Name with Bus</button>
    <ul>
      <li v-for="car in cars">{{ car.name }}</li>
      <button @click="removeCar()">Delete</button>
      <span>Reference types : array, object</span>
    </ul>
  </div>
</template>

<script>
import { bus } from '../main'

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
    },
    changeNameBus () {
      console.log('bus', bus)
      this.name = 'The Tech Club'
      bus.$emit('nameChanged', 'The Tech Club')
    }
  },
  beforeCreate () {
    alert('beforeCreate')
  },
  created () {
    alert('created')
  },
  beforeMount () {
    alert('beforeMount')
  },
  mounted () {
    alert('mounted')
  },
  beforeUpdate () {
    alert('beforeUpdate')
  },
  updated () {
    alert('updated')
  }
}
</script>

<style>

</style>
