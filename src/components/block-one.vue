<script lang="ts" setup>
import circleSVG from "../assets/circle.svg";
import backgroundImage from "../assets/bg1.svg";
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
</script>

<template>
  <div class="blockOne" :style="backgroundStyle">
    <div class="intro">
      <h1 v-t="'blockOne.title'"></h1>
    </div>
    <div class="circle">
      <img :src="circleSVG" alt="Tether Token" />
    </div>
  </div>
</template>

<style lang="scss">
.blockOne {
  padding: 0 72px;
  background-position: right bottom;
  background-repeat: no-repeat;
  .intro {
    margin: auto;
    display: flex;
    max-width: 506px;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
