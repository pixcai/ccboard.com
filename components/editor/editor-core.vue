<template>
  <iframe id="js-editor" seamless="seamless" sandbox="allow-same-origin allow-scripts" :src="src">
      <p>您的浏览器不支持 iframe 标签。</p>
  </iframe>
</template>

<script>
export default {
  computed: {
    src () { return this.$store.state.template.src }
  }
}
</script>

<style scoped>
#js-editor {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
