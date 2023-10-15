// 入口文件
// import 会从nodemoudles里寻找
import Vue from 'vue'
import App from './app.vue'
new Vue({
    el:"#app",
    reader:h=>h(App)
})