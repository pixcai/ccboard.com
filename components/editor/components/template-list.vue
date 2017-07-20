<template>
  <div>
    <RadioGroup v-model="name" vertical @on-change="presentTemplate">
      <Radio v-for="(template, key) in templates" :key="key" :label="template.name">
      </Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  props: {
    templates: {
      type: Array,
      required: true
    }
  },
  data: () => ({ name: '' }),
  methods: {
    presentTemplate: function (name) {
      const template = this.templates.find(template => template.name === name)

      if (template) {
        this.$store.commit('template/set', template.root + '/index.html')
      }
    }
  }
}
</script>
