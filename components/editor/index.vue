<template>
  <div class="editor-container">
    <Row type="flex" class="editor-wrap">
      <Col :span="3" class="editor-left-pane">
        <CCEditorLeftPane/>
      </Col>
      <Col :span="spanCenter">
        <div class="editor-header relative">
          <div class="toggle-right" @click="onToggleRightPane">
            <Icon class="middle" :type="toggleIcon" size="24"/>
          </div>
        </div>
        <div class="editor-main">
          <CCEditorCore/>
        </div>
      </Col>
      <Col :span="spanRight" class="editor-right-pane">
        <CCEditorRightPane/>
      </Col>
    </Row>
  </div>
</template>

<script>
import CCEditorCore from './editor-core'
import CCEditorLeftPane from './editor-left-pane'
import CCEditorRightPane from './editor-right-pane'

const INIT_SPAN_CENTER = 16
const INIT_SPAN_RIGHT = 5
const toggleIcons = ['ios-arrow-thin-right', 'ios-arrow-thin-left']

export default {
  data () {
    return {
      spanCenter: INIT_SPAN_CENTER,
      spanRight: INIT_SPAN_RIGHT,
      toggleIcon: toggleIcons[0]
    }
  },
  components: {
    CCEditorCore,
    CCEditorLeftPane,
    CCEditorRightPane
  },
  methods: {
    onToggleRightPane: function () {
      if (this.toggleIcon === toggleIcons[0]) {
        this.spanCenter = INIT_SPAN_CENTER + INIT_SPAN_RIGHT
        this.spanRight = 0
        this.toggleIcon = toggleIcons[1]
      } else {
        this.spanCenter = INIT_SPAN_CENTER
        this.spanRight = INIT_SPAN_RIGHT
        this.toggleIcon = toggleIcons[0]
      }
    }
  }
}
</script>

<style scoped>
.editor-container, 
.editor-main {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.editor-container {
  top: 42px;
}

.editor-wrap {
  height: 100%;
  flex-wrap: nowrap;
}

.editor-header {
  box-sizing: border-box;
  overflow: hidden;
  height: 36px;
  line-height: 35px;
  border-bottom: 1px solid #ddd;
}

.editor-main {
  top: 36px;
  overflow: scroll;
  background: #f5f7f9;
}

.editor-left-pane {
  border-right: 1px solid #ddd;
}

.editor-right-pane {
  border-left: 1px solid #ddd;
}

.toggle-right {
  float: right;
  margin-right: .5em;
  cursor: pointer;
}

.ivu-col {
  transition: width .2s ease-in-out;
}
</style>
