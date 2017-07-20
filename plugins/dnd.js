import Vue from 'vue'
import interact from 'interactjs'

Vue.directive('dnd', (el, binding, vnode) => {
  console.log(interact, el)
  interact(el).draggable()
})
