<script lang="ts" setup>
import headerVue from "./components/header.vue";
import blockOneVue from "./components/block-one.vue";
import blockTwoVue from "./components/block-two.vue";
import blockThreeVue from "./components/block-three.vue";
</script>
<template>
  <header-vue></header-vue>
  <div class="contents">
    <block-one-vue></block-one-vue>
    <block-two-vue></block-two-vue>
    <block-three-vue></block-three-vue>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  color: #232323;
}
body {
  background-color: #f9fbfb;
  max-width: 100vw;
  min-width: 100vw;
  overflow-x: hidden;
}
.contents {
  display: flex;
  flex-direction: column;
}
</style>
