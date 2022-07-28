import Vue from 'vue'

// 导入组件，组件必须声明 name
import DrawBoard from './main.vue'

// 为组件添加 install 方法，用于按需引入
DrawBoard.install = function (Vue) {
    Vue.component(DrawBoard.name, DrawBoard)
}

export default DrawBoard