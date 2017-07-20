<template>
  <Tabs value="attribute" class="right-pane">
    <TabPane label="属性" name="attribute">
      <template v-if="component">
        <CCAttributeList :component="component"></CCAttributeList>
      </template>
      <template v-else>暂无内容</template>
    </TabPane>
    <TabPane label="数据" name="data">
      <CCDataList :data="componentData"/>
    </TabPane>
    <TabPane label="调试" name="debug">暂无</TabPane>
  </Tabs>
</template>

<script>
import CCDataList from './components/data-list'
import CCAttributeList from './components/attribute-list'

export default {
  data () {
    return {
      componentData: {}
    }
  },
  computed: {
    component () {
      const selected = this.$store.state.template.selected
      if (selected) {
        this.componentData = {
          src: JSON.stringify(selected.options.chart, null, 2),
          update: data => {
            selected.set(`options.${selected.constructor.componentType}`, data)
            selected.notifyPath('options.chart')
          }
        }
      }
      return selected
    }
  },
  methods: {
    updateComponent: function (e, path) {
      this.component.set(path, e.target.value)
      this.component.notifyPath(path)
    }
  },
  components: {
    CCDataList,
    CCAttributeList
  }
}
</script>
<style>
.right-pane,
.right-pane .ivu-tabs-content {
  height: 100%;
}
</style>
