<template>
  <div>
    <div class="container-wrapper" v-show="step === 1">
      <drawboard
        :url="url"
        @updateData="updateData"
        path_strokeStyle="#000"
        :height="400"
        :width="350"
      ></drawboard>
      <drawboard
        :url="url"
        class="step2"
        @updateData="updateData"
        :labelDataOrigin="labelDataOrigin1"
        path_strokeStyle="#409EFF"
      ></drawboard>
    </div>
    <div class="container-wrapper" v-show="step === 2">
      <drawboard
        :url="url"
        class="step3"
        @updateData="updateData"
        :labelDataOrigin="labelDataOrigin1"
        :height="400"
        :width="350"
        path_strokeStyle="#409EFF"
      ></drawboard>
    </div>
    <button @click="step--">minis</button>
    <button @click="step++">add</button>
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      step: 1,
      url:
        "http://10.206.38.28:9090/image/59db9eef-ee12-4ad8-a2e0-5081557ea71e.jpg",
      labelDataOrigin1: [
        {
          type: "rectangle",
          points: [
            { x: 402, y: 214 },
            { x: 438, y: 214 },
            { x: 438, y: 249 },
            { x: 402, y: 249 },
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
            { x: 628, y: 340 },
            { x: 287, y: 340 },
            { x: 287, y: 286 },
            { x: 628, y: 286 },
          ],
          options: {
            path_lineWidth: 1,
            path_strokeStyle: "#fff",
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