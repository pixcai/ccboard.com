<template>
  <header>
    <Row type="flex">
      <Col span="4" offset="20" v-show="type === 'editor'">
        <Row type="flex" justify="end" :gutter="8">
          <Col>
            <Button type="success" size="small">保存</Button>
          </Col>
          <Col>
            <Button type="info" size="small" @click="onPreview">预览</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </header>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    onPreview: function () {
      window.open('/preview')
    }
  }
}
</script>

<style scoped>
header {
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 1rem;
  height: 42px;
  line-height: 41px;
  border-bottom: 1px solid #ddd;
}
</style>
