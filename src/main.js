import Vue from 'vue'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent.vue'

export const bus = new Vue()

Vue.component('GlobalComponent', GlobalComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
