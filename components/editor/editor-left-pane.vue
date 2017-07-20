<template>
  <Tabs value="components">
    <TabPane label="组件" name="components">
      <Menu width="auto">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            基本元素
          </template>
          <MenuItem name="1-1">
            <span component="label">文本组件</span>
          </MenuItem>
          <MenuItem name="1-2">
            <span component="button">按钮组件</span>
          </MenuItem>
          <MenuItem name="1-3">
            <span component="image">图片组件</span>
          </MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            栅格布局
          </template>
          <MenuItem name="2-1">组件</MenuItem>
          <MenuItem name="2-2">组件</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            数据图表
          </template>
          <MenuGroup title="二维">
            <MenuItem name="3-1">组件</MenuItem>
            <MenuItem name="3-2">组件</MenuItem>
            <MenuItem name="3-3">组件</MenuItem>
          </MenuGroup>
          <MenuGroup title="三维">
            <MenuItem name="3-4">组件</MenuItem>
            <MenuItem name="3-5">组件</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </TabPane>
    <TabPane label="模板" name="templates">
      <CCTemplateList :templates="templates"/>
    </TabPane>
  </Tabs>
</template>

<script>
import axios from '~plugins/axios'
import CCTemplateList from '~components/editor/components/template-list'

export default {
  data () {
    return {
      templates: [],
      components: []
    }
  },
  created: function () {
    axios.get('/api/library').then(res => {
      const { templates, components } = res.data

      if (templates) this.templates = templates
      if (components) this.components = components
    })
  },
  components: {
    CCTemplateList
  }
}
</script>

<style>
.ivu-menu-vertical.ivu-menu-light:after,
.ivu-menu-vertical.ivu-menu-dark:after {
  display: none;
}
</style>
