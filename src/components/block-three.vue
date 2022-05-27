<script lang="ts" setup>
import backgroundImage from "../assets/bg3.svg";
import { useI18n } from "vue-i18n";
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
const { t } = useI18n();
</script>

<template>
  <div class="blockThree">
    <div class="block" style="flex-grow: 1"></div>
    <div class="contain">
      <div class="left" :style="backgroundStyle"></div>
      <div class="right">
        <div class="text">
          <h1>{{ t("blockThree.title") }}</h1>
          <p>{{ t("blockThree.content") }}</p>
        </div>
      </div>
    </div>
    <div
      class="block"
      style="
        flex-grow: 1;
        opacity: 0.06;
        background: linear-gradient(274.85deg, #16a5a5 8.7%, #3fc6c6 86.86%);
      "
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockThree {
  overflow: hidden;
  background: linear-gradient(180deg, #f4fafa 0%, #e8f3f3 100%);
  display: flex;
  flex-direction: row;
  .contain {
    width: 1440px;
    max-width: 1440px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    .left {
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: right;
      @include pad {
        height: 100vw;
      }
    }
    .right {
      height: 720px;
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      @include pad {
        margin: 24px 24px 30px;
        width: 100%;
      }
      .text {
        max-width: 482px;
        h1 {
          font-size: 2.5rem;
          line-height: 48px;
        }
        p {
          margin-top: 28px;
          font-size: 1.1rem;
          color: #586871;
          line-height: 28px;
        }
      }
    }

    & > div {
      width: 50%;
      @include pad {
        width: 100%;
      }
    }
  }
}
</style>
