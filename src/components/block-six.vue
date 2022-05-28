<script lang="ts" setup>
import backgroundImage from "../assets/bg4.svg";
import { useI18n } from "vue-i18n";
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
const { t } = useI18n();
</script>

<template>
  <div class="blockSix">
    <div class="block"></div>
    <div class="contain" :style="backgroundStyle">
      <div class="title">
        <h2>FAQs</h2>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockSix {
  overflow: hidden;
  background-color: #009393;
  display: flex;
  flex-direction: row;
  .block {
    flex-grow: 1;
  }
  .contain {
    flex-grow: 1;
    background-repeat: no-repeat;
    background-position: top left;
    padding: 96px 320px;
    width: 1440px;
    max-width: 1440px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @include laptop {
      padding: 96px 10px;
    }

    .title {
      margin-bottom: 24px;
      h2 {
        font-size: 1.875rem;
        font-weight: 700;
        line-height: 34px;
        color: #fff;
      }
    }
  }
}
</style>
