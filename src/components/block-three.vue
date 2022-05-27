<script lang="ts" setup>
import backgroundImage from "../assets/bg3.svg";
import { useI18n } from "vue-i18n";
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
const { t } = useI18n();
</script>

<template>
  <div class="blockTwo">
    <div class="contain">
      <div class="left" :style="backgroundStyle"></div>
      <div class="right">
        <h1>{{ t("blockThree.title") }}</h1>
        <p>{{ t("blockThree.content") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockTwo {
  background-color: #d9f0f0;
  .contain {
    width: 100%;
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
      height: 880px;
      margin: auto;
      display: flex;
      max-width: 482px;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      @include pad {
        margin: 24px 24px 30px;
        align-items: center;
        width: 100vw;
      }
      h1 {
        font-size: 2.5rem;
        line-height: 48px;
        @include phone {
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

    & > div {
      width: 50%;
      @include pad {
        width: 100%;
      }
    }
  }
}
</style>
