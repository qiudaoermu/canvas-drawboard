<template>
  <div class="tool">
    <el-tooltip
      v-for="(item, index) in setting"
      effect="dark"
      :content="item.content"
      placement="right"
    >
      <i
        :class="[{ active: index === active }, item.class]"
        v-if="index < 1"
        @click="changeTool(item.event, index)"
      ></i>
      <i
        v-else
        :class="[{ active: index === active }, item.class]"
        @click="changeEvent(item.event, index)"
      ></i>
    </el-tooltip>

    <!-- <div class="status">
      当前状态：{{this.currentStatus}}
    </div> -->

    <el-dialog
      title="画布设置"
      :close-on-click-modal="false"
      :visible.sync="configDialogVisiable"
      width="400px"
      :show-close="false"
      append-to-body
    >
      <el-form
        label-position="left"
        label-width="100px"
        size="mini"
        :model="config"
      >
        <el-form-item label="线框颜色：">
          <el-color-picker
            v-model="config.path_strokeStyle"
            size="mini"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="控制圈颜色：">
          <el-color-picker
            v-model="config.point_strokeStyle"
            size="mini"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="线框宽度：">
          <el-input-number
            size="mini"
            v-model="config.path_lineWidth"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="控制圈宽度：">
          <el-input-number
            size="mini"
            v-model="config.point_lineWidth"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="控制圈半径：">
          <el-input-number
            size="mini"
            v-model="config.point_radis"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="背景格：">
          <el-switch
            v-model="config.grid"
            active-color="#66a6ff"
            inactive-color="#999"
          ></el-switch>
        </el-form-item>
        <el-form-item label="导航线：">
          <el-switch
            v-model="config.guid"
            active-color="#66a6ff"
            inactive-color="#999"
          ></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="configDialogVisiable = false"
          >取 消</el-button
        >
        <el-button
          size="small"
          type="primary"
          @click="configDialogVisiable = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 先执行 props 再执行 data函数 再执行 render
export default {
  name: "topbar",
  props: {
    currentStatus: String,
    path_strokeStyle: String,
  },
  data() {
    return {
      active: Infinity,
      setting: [
        { class: "el-icon-news", event: "rectangle", content: "矩形" },
        { class: "el-icon-zoom-in", event: "zoomIn", content: "放大" },
        {
          class: "el-icon-zoom-out",
          event: "zoomOut",
          content: "缩小",
        },
        {
          class: "el-icon-s-grid",
          event: "zoomInit",
          content: "适配",
        },
        {
          class: "el-icon-rank",
          event: "move",
          content: "移动",
        },
        {
          class: "el-icon-full-screen",
          event: "fullScreen",
          content: "全屏",
        },
        {
          class: "el-icon-delete",
          event: "clearAll",
          content: "清空画布",
        },
        {
          class: "el-icon-setting",
          event: "setting",
          content: "设置",
        },
      ],
      color1: "#409EFF",
      configDialogVisiable: false,
      contrast: 50, // 对比度
      brightness: 50, // 亮度
      // 绘图参数
      config: {
        path_lineWidth: 1,
        path_strokeStyle: this.path_strokeStyle,
        point_lineWidth: 1,
        point_strokeStyle: "#fff",
        point_radis: 5,
        grid: false,
        guid: false,
      },
    };
  },
  create() {
    // this.config.point_strokeStyle = this.path_strokeStyle
  },
  watch: {
    config: {
      handler() {
        this.$emit("configChange", this.config);
      },
      immediate: true,
      deep: true,
    },
    contrast: {
      handler() {
        this.$emit("contrastChange", Math.floor(this.contrast - 50));
      },
      immediate: true,
    },
    brightness: {
      handler() {
        this.$emit("brightnessChange", Math.floor(this.brightness - 50));
      },
      immediate: true,
    },
  },
  methods: {
    changeTool(eventName, index) {
      this.active = index;
      this.$emit("toolSelected", eventName);
    },
    changeEvent(eventName, index) {
      this.active = index;
      if (eventName === "setting") {
        this.configDialogVisiable = true;
        return;
      }
      this.$emit("topBarEvent", eventName);
    },
    formatTooltip(val) {
      return parseInt(val - 50);
    },
  },
};
</script>

<style lang="scss" scoped>
.tool {
  width: 30px;
  margin: 0px 5px;
  .active {
    background: #000;
  }
}
[class*=" el-icon-"],
[class^="el-icon-"] {
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  line-height: 30px;
  font-size: 20px;
  padding: 0 5px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:nth-child(1) {
    margin-top: 5px;
  }
  &:hover {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>