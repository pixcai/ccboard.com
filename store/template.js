export const state = () => ({
  src: '/templates/index.html',
  selected: null
})

export const mutations = {
  set (state, template) {
    state.src = template
  },
  selected (state, component) {
    state.selected = component
  }
}
