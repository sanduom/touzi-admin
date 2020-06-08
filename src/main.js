import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/";
// 'development',use package;'production':use cdn;
import ElementUI, { Form } from "element-ui";
Vue.use(ElementUI, { size: "mini" });
import("element-ui/lib/theme-chalk/index.css");
import audio from "../src/static/bye.mp3";
import "./components/iconSvg"; // iconSvg
import qs from "qs";
import "@/permission"; // permission control

import "@/mockjs"; // mock数据

Vue.prototype.playAudio = () => {
  let buttonAudio = document.getElementById("eventAudio");
  buttonAudio.setAttribute("src", audio);
  console.log(buttonAudio);
  // let p = true;
  // alert(p);
  // if (p) {
  buttonAudio.play();
  //   p = false;
  // } else {
  //   buttonAudio.pause();
  //   p = true;
  // }
};
Vue.prototype.pauseAudio = () => {
  let buttonAudio = document.getElementById("eventAudio");
  buttonAudio.setAttribute("src", audio);
  buttonAudio.pause();
};
// 方法2：添加自定义属性
document.body.addEventListener("click", function(e) {
  let event = e || window.event;
  let target = event.target || event.srcElement;
  let clickmusic = target.getAttribute("clickmusic");
  if (clickmusic === "true") Vue.prototype.playAudio();
  else return false;
});
// i18n国际化
import i18n from "@/lang";

// 分享功能集合
import { shareConfig } from "./utils/share";
Vue.prototype.shareConfig = shareConfig;

Vue.prototype.$qs = qs;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n, // 便于可以直接在组件中通过this.$i18n使用，也可以按需引用
  render: (h) => h(App),
}).$mount("#app");
