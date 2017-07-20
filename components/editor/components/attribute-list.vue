<template>
  <div>
    <template v-for="(rule, ruleKey) in component.propertyRules">
      <template v-for="(ruleData, ruleDataKey) in rule.data">
        <Row type="flex" justify="center" align="middle" class="property">
          <Col span="6">{{ ruleData.name }}</Col>
          <Col span="16">
            <template v-if="ruleData.type === 'number'">
              <InputNumber @on-change="updateAttribute(`${rule.name}.${ruleData.path}`, $event)"></InputNumber>
            </template>
            <template v-else-if="ruleData.type === 'color' || ruleData.type === 'string'">
              <Input @on-change="updateAttribute(`${rule.name}.${ruleData.path}`, $event.target.value)"></Input>
            </template>
            <template v-else-if="ruleData.type === 'image'">
              <Input @on-change="updateAttribute(`${rule.name}.${ruleData.path}`, $event.target.value)"></Input>
            </template>
            <template v-else-if="ruleData.type === 'select'">
              <Select @on-change="updateAttribute(`${rule.name}.${ruleData.path}`, $event)">
                <Option v-for="item in ruleData.data" :value="item.data" :key="item">{{ item.name }}</Option>
              </Select>
            </template>
          </Col>
        </Row>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  props: ['component'],
  methods: {
    updateAttribute: function (path, data) {
      console.log('item-data:', data)
      this.component.set(`options.${path}`, data)
      this.component.notifyPath(`options.${path}`)
    }
  }
}
</script>
<style>
.property {
  margin-top: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid #f5f7f9;
}
</style>
