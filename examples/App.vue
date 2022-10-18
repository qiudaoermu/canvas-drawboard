<template>
  <div>
    <section class="flex">
      <drawboard
        :url="url1"
        :width="600"
        :height="500"
        @updateData="updateData"
        :labelDataOrigin="polyline"
        :selectedWithBlock="false"
        path_strokeStyle="#000"
      ></drawboard>
      <div class="form">
        <el-form label-width="100px" label-position="left" :model="formData">
          <el-form-item label="跨域方向">
            <el-select
              class="input-wrapper"
              v-model="formData.direction"
              @change="handleDirectionChange"
              placeholder="请选择触发模式"
            >
              <el-option
                :label="item.dictValue"
                :value="item.dictValue"
                v-for="(item, index) in triggerTypeList"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="置信度过滤">
            <el-input-number
              class="input-wrapper"
              v-model="formData.confidence"
              :min="0.01"
              :max="100"
            />
          </el-form-item>
        </el-form>
      </div>
    </section>
    
    <!-- <div class="container-wrapper" v-show="step === 1">
      <drawboard
        :url="line"
        :key="1"
        @updateData="updateData"
        :labelDataOrigin="polyline"
        :height="500"
        :width="800"
        :selectedWithBlock="false"
        path_strokeStyle="#000"
      ></drawboard>
    </div> -->
    <!-- <div class="container-wrapper" v-show="step === 2"> -->
      <!-- <drawboard
        class="step3"
        :url="url3"
        @updateData="updateData"
        :key="3"
        :labelDataOrigin="labelDataOrigin2"
        :height="400"
        :selectedWithBlock="true"
        :width="350"
        path_strokeStyle="#409EFF"
      ></drawboard> -->
    </div>
  </div>
</template>

<script>
import line from "./line.jpg";
export default {
  name: "example",
  data() {
    return {
      line,
      updateDataRecord: "",
      polyline: [
        {
          type: "polyline",
          points: [
            { x: 1000, y: 1000 },
            { x: 1000, y: 100 },
          ],
          direction: "A->B",
          options: {
            path_lineWidth: 3,
            path_strokeStyle: "yellow",
            point_radis: 7, // Judge whether to select the point when clicking
            point_lineWidth: 100,
            point_strokeStyle: "#999", // The color of the point when selected
          },
        },
        {
          type: "rectangle",
          points: [
            { x: 700, y: 386 },
            { x: 1300, y: 386 },
            { x: 1300, y: 680 },
            { x: 700, y: 680 },
          ],
          options: {
            path_lineWidth: 1,
            path_strokeStyle: "#f00",
            point_radis: 5, // Judge whether to select the point when clicking
            point_lineWidth: 2,
            point_strokeStyle: "#999", // The color of the point when selected
          },
        },
      ],
      url:
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      labelDataOrigin: [],
      loadingData: false,
      text: "",
      formData: {
        detectTarget: "冰箱",
        direction: "A->B",
        confidence: 10,
        text: "",
        name: "",
        region: "",
        type: "",
        isTest: false, //true运行一次false保存
      },
      triggerTypeList: [
        {
          dictValue: "A->B",
        },
        {
          dictValue: "B->A",
        },
      ],
      imgTypeList: [
        {
          dictValue: "冰箱",
        },
      ],
      line,
      step: 1,
      url1:
        "https://i.ibb.co/x7dt42M/img-v2-1fe63299-6aa7-45b2-ae3b-b3e491cf0dag.jpg",
      url2:
        "http://10.206.38.28:9090/image/59db9eef-ee12-4ad8-a2e0-5081557ea71e.jpg",
      url3:
        "http://10.206.38.28:9090/image/59db9eef-ee12-4ad8-a2e0-5081557ea71e.jpg",
      polyline: [
        {
          type: "polyline",
          points: [
            { x: 450, y: 540 },
            { x: 450, y: 150 },
          ],
          direction: "A->B",
          options: {
            path_lineWidth: 3,
            path_strokeStyle: "yellow",
            point_radis: 7, // Judge whether to select the point when clicking
            point_lineWidth: 100,
            point_strokeStyle: "#999", // The color of the point when selected
          },
        },
        {
          type: "rectangle",
          points: [
            { x: 287, y: 286 },
            { x: 658, y: 286 },
            { x: 658, y: 480 },
            { x: 287, y: 480 },
          ],
          options: {
            path_lineWidth: 1,
            path_strokeStyle: "#f00",
            point_radis: 5, // Judge whether to select the point when clicking
            point_lineWidth: 2,
            point_strokeStyle: "#999", // The color of the point when selected
          },
        },
      ],
      labelDataOrigin1: [
        {
          type: "rectangle",
          points: [
            { x: 287, y: 286 },
            { x: 658, y: 286 },
            { x: 658, y: 480 },
            { x: 287, y: 480 },
          ],
          options: {
            path_lineWidth: 1,
            path_strokeStyle: "#f00",
            point_radis: 5, // Judge whether to select the point when clicking
            point_lineWidth: 2,
            point_strokeStyle: "#999", // The color of the point when selected
          },
        },
        {
          type: "rectangle",
          points: [
            { x: 187, y: 186 },
            { x: 658, y: 186 },
            { x: 658, y: 230 },
            { x: 187, y: 230 },
          ],
          options: {
            path_lineWidth: 1,
            path_strokeStyle: "#f00",
            point_radis: 5, // Judge whether to select the point when clicking
            point_lineWidth: 2,
            point_strokeStyle: "#999", // The color of the point when selected
          },
        },
      ],
      labelDataOrigin2: [
        {
          type: "rectangle",
          points: [
            { x: 287, y: 286 },
            { x: 658, y: 286 },
            { x: 658, y: 480 },
            { x: 287, y: 480 },
          ],
          options: {
            path_lineWidth: 1,
            path_strokeStyle: "#f00",
            point_radis: 5, // Judge whether to select the point when clicking
            point_lineWidth: 2,
            point_strokeStyle: "#999", // The color of the point when selected
          },
        },
      ],
      loadingData: false,
    };
  },
  mounted() {
    
  },
  methods: {
    handleDirectionChange(val) {
      this.$set(this.polyline, 0, {
        ...this.polyline[0],
        direction: val
      })
    },
    nextStep(value) {
      this.step = value;
      // this.labelDataOrigin2 = []
      // this.url3 = ""
    },
    updateData(data) {
      this.polyline = data;
      this.polyline[0].direction = this.formData.direction
    },
  },
};
</script>
<style scoped lang="scss">
.container-wrapper {
  display: flex;
  > div {
    &:nth-of-type(2) {
      margin-left: 20px;
    }
  }
}
</style>
