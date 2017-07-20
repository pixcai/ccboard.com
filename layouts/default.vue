<template>
  <div id="js-page">
    <CCHeader :type="headerType"/>
    <nuxt/>
  </div>
</template>

<script>
import CCHeader from '~components/header'

export default {
  props: {
    headerType: {
      type: String,
      default: 'editor'
    }
  },
  components: {
    CCHeader
  }
}
</script>
