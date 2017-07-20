<template>
  <div ref="jsonEditor" class="data-list"></div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted: function () {
    this.editor = new window.JSONEditor(this.$refs.jsonEditor, {
      mode: 'code',
      onError: () => {},
      onChange: () => this.updateData()
    })
  },
  watch: {
    data: function (value) {
      this.editor.setText(value.src)
    }
  },
  methods: {
    updateData: function () {
      let data = this.editor.getText()
      try {
        data = JSON.parse(data)
        this.data.update(data)
      } catch (e) {}
    }
  }
}
</script>

<style scoped>
.data-list {
  height: 100%;
}
</style>
<style>
div.jsoneditor {
  border: none;
}
</style>
