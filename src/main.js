import Vue from 'vue'
import App from './App.vue'
import GlobalComponent from './GlobalComponent.vue'

Vue.component('GlobalComponent', GlobalComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
