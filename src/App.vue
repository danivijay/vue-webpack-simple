<template>
  <div>
    <h1>{{ title.dynamicComponent }}</h1>
    <component :is="dynComp"></component>
    <button @click="dynComp = 'comp1'">Comp1</button>
    <button @click="dynComp = 'comp2'">Comp2</button>
    <br><br>
    <h1>{{ title.slot }}</h1>
    <form-helper>
      <div slot="slot2">
        <ul>
          <li>randomval1</li>
          <li>randomval2</li>
          <li>randomval3</li>
        </ul>
      </div>
      <div slot="slot1">
        <p>blah blah blah</p>
      </div>
    </form-helper>

    <h1>{{ title.component }}</h1>
    <global-component :cars="cars" :name="name" />
    <local-comp :cars="cars" :name="name" @changeName="updateName($event)" />
  </div>
</template>

<script>
import LocalComponent from './components/LocalComponent.vue'
import FormHelper from './components/FormHelper.vue'
import comp1 from './components/comp1.vue'
import comp2 from './components/comp2.vue'
export default {
  components: {
    'local-comp': LocalComponent,
    'form-helper': FormHelper,
    'comp1': comp1,
    'comp2': comp2
  },
  data () {
    return {
      title: {
        slot: 'Slots Demo',
        component: 'Component Demo',
        dynamicComponent: 'Dynamic Component Demo'
      },
      dynComp: 'comp1',
      name: 'dani',
      cars: [
        { name: 'hyundai', country: 'korea' },
        { name: 'audi', country: 'germany' },
        { name: 'bmw', country: 'germany' }
      ]
    }
  },
  methods: {
    updateName (newName) {
      this.name = newName
    }
  }
}
</script>

<style>
</style>
