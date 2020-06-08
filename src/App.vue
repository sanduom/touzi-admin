<template>
  <div id="app">
    <router-view></router-view>
    <!-- <audio src="./../static/music/10683.mp3" autoplay loop></audio> -->
    <!-- <audio src="./../statics/bye.mp3" autoplay loop></audio> -->
    <audio src id="eventAudio" loop></audio>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "./style/variables";
@import "./style/element-ui";
@import "./style/common";
@import "./style/scrollBar";
</style>
