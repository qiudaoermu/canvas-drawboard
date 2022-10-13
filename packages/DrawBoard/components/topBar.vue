<template>
  <div class="bar">
    <div class="status">当前状态：{{ this.currentStatus }}</div>
  </div>
</template>

<script>
export default {
  name: "tool",
  data() {
    return {};
  },
  props: {
    currentStatus: String,
  },
  methods: {
    changeTool(eventName) {
      this.$emit("toolSelected", eventName);
    },
  },
};
</script>

<style lang="scss" scoped>
.bar {
  height: 30px;
  margin: 5px 0px;
}
.icon {
  height: 30px;
  width: 30px;
}
[class*=" el-icon-"],
[class^="el-icon-"] {
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  line-height: 30px;
  font-size: 20px;
  padding: 0 5px;
  cursor: pointer;
  &:nth-child(1) {
    margin-left: 5px;
  }
  &:hover {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 2px;
}
.status {
  float: right;
  margin-top: 8px;
  width: 160px;
  font-size: 14px;
}
</style>

<style scoped>
.text-container {
  display: inline-block;
  vertical-align: middle;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-bottom: 10px;
  vertical-align: middle;
  padding: 0 4px;
}
.text {
  display: inline-block;
  margin-right: 8px;
}
>>> .el-slider {
  height: 22px;
  display: inline-block;
  width: 60px;
}
>>> .el-slider__runway {
  margin: 15px 0;
  background-color: #000;
}
>>> .el-slider__bar {
  background-color: #e4e7ed;
}
>>> .el-slider__button {
  width: 12px;
  height: 12px;
  border: 1px solid #000;
}
</style>
