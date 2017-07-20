<template>
  <CCEditor/>
</template>

<script>
import CCEditor from '~components/editor'

export default {
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/assets/jsoneditor-5.7.0/jsoneditor.min.css' }
      ],
      script: [
        { src: '/assets/jsoneditor-5.7.0/jsoneditor.min.js' }
      ]
    }
  },
  components: {
    CCEditor
  }
}
</script>

<style>
.ivu-tabs-bar {
  margin-bottom: 0;
}
</style>
