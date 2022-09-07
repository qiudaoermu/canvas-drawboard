<template>
  <div class="tool">
    <el-tooltip effect="dark" content="矩形" placement="right">
      <i class="el-icon-news" @click="changeTool('rectangle')"></i>
    </el-tooltip>
    <el-tooltip effect="dark" content="点" placement="right">
      <i class="el-icon-aim" @click="changeTool('point')"></i>
    </el-tooltip>
    <el-tooltip effect="dark" content="放大" placement="bottom" class="icon">
      <i class="el-icon-zoom-in" @click="changeEvent('zoomIn')"></i>
    </el-tooltip>
    <el-tooltip effect="dark" content="缩小" placement="bottom">
      <i class="el-icon-zoom-out" @click="changeEvent('zoomOut')"></i>
    </el-tooltip>
    <el-tooltip effect="dark" content="适配" placement="bottom">
      <i class="el-icon-s-grid" @click="changeEvent('zoomInit')"></i>
    </el-tooltip>
    <el-tooltip effect="dark" content="移动" placement="bottom">
      <i class="el-icon-rank" @click="changeEvent('move')"></i>
    </el-tooltip>
    <el-tooltip effect="dark" content="全屏" placement="bottom">
      <i class="el-icon-full-screen" @click="changeEvent('fullScreen')"></i>
    </el-tooltip>

    <el-tooltip effect="dark" content="清空画布" placement="bottom">
      <i class="el-icon-delete" @click="changeEvent('clearAll')"></i>
    </el-tooltip>
    <el-tooltip effect="dark" content="设置" placement="bottom">
      <i class="el-icon-setting" @click="configDialogVisiable = true"></i>
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
            v-model="path_strokeStyle"
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
export default {
  name: "topbar",
  props: {
    currentStatus: String,
    path_strokeStyle: String
  },
  data() {
    return {
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
    changeTool(eventName) {
      this.$emit("toolSelected", eventName);
    },
    changeEvent(eventName) {
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
}
[class*=" el-icon-"],
[class^="el-icon-"] {
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  line-height: 30px;
  font-size: 20px;
  padding: 0 5px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
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