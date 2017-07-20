<template></template>
<script>
export default {
  mounted: function () {
    let parent = window.opener.document.getElementById('js-editor')

    if (parent) {
      parent = parent.contentDocument
      document.head.innerHTML = parent.head.innerHTML
      document.body.innerHTML = parent.body.innerHTML
    }
  }
}
</script>
