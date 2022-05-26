<script lang="ts" setup>
import backgroundImage from "../assets/bg2.svg";
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
</script>

<template>
  <div class="blockTwo">
    <div class="contain">
      <div class="left" :style="backgroundStyle"></div>
      <div class="right">
        <h1 v-t="'blockTwo.title'"></h1>
        <p v-t="'blockTwo.content'"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockTwo {
  background-color: #ffffff;
  .contain {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 50%;
      @include pad {
        width: 100%;
      }
    }
    .left {
      background-repeat: no-repeat;
      background-size: contain;
      @include pad {
        height: 100vw;
      }
    }
    .right {
      height: 720px;
      margin: auto;
      display: flex;
      max-width: 482px;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      margin: 24px 24px 30px;
      h1 {
        font-size: 2.5rem;
        line-height: 48px;
        @include pad {
          font-size: 1.5rem;
        }
      }
      p {
        margin-top: 28px;
        font-size: 1rem;
        color: #586871;
        line-height: 28px;
      }
    }
  }
}
</style>
