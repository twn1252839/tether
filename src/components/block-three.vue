<script lang="ts" setup>
import backgroundImage from "../assets/bg3.svg";
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
</script>

<template>
  <div class="blockThree">
    <div class="contain">
      <div class="left">
        <h1 v-t="'blockThree.title'"></h1>
        <p v-t="'blockThree.content'"></p>
      </div>
      <div class="right" :style="backgroundStyle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockThree {
  background: linear-gradient(180deg, #f4fafa 0%, #e8f3f3 100%);
  .contain {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      width: 50%;
      @include pad {
        width: 100%;
      }
    }
    .left {
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
    .right {
      background-repeat: no-repeat;
      background-size: contain;
      @include pad {
        height: 100vw;
      }
    }
  }
}
</style>
