<template>
  <div>
    <h2>Local Component - with prop validation</h2>
    <h3>{{ name }}</h3>
    <button @click="changeName()">Change Name - With $emit and $event</button>
    <ul>
      <li v-for="car in cars">{{ car.name }}</li>
    </ul>
  </div>
</template>

<script>
import { bus } from './main'

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
  },
  methods: {
    changeName () {
      this.$emit('changeName', 'The Web Club')
    }
  },
  created () {
    console.log('bus', bus)
    bus.$on('nameChanged', (data) => {
      this.name = data
    })
  }
}
</script>

<style>

</style>
