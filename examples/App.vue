<template>
  <div>
    <div class="container-wrapper" v-show="step === 1">
      <drawboard
        :url="url1"
        @updateData="updateData"
        path_strokeStyle="#000"
        :height="400"
        :width="350"
      ></drawboard>
      <drawboard
        :url="url2"
        class="step2"
        @updateData="updateData"
        :labelDataOrigin="labelDataOrigin1"
        path_strokeStyle="#409EFF"
      ></drawboard>
    </div>
    <div class="container-wrapper" v-show="step === 2">
      <drawboard
        class="step3"
        :url="url3"
        @updateData="updateData"
        :height="400"
        :width="350"
        path_strokeStyle="#409EFF"
      ></drawboard>
    </div>
    <button @click="nextStep(1)">第一步</button>
    <button @click="nextStep(2)">第二步</button>
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      step: 1,
      url1:
        "http://10.206.38.28:9090/image/59db9eef-ee12-4ad8-a2e0-5081557ea71e.jpg",
      url2:
        "http://10.206.38.28:9090/image/59db9eef-ee12-4ad8-a2e0-5081557ea71e.jpg",
      url3:
        "http://10.206.38.28:9090/image/59db9eef-ee12-4ad8-a2e0-5081557ea71e.jpg",
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
  methods: {
    nextStep(value) {
      this.step = value;
      // this.labelDataOrigin2 = []
    },
    updateData(data) {
      // console.log(JSON.stringify(data));
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