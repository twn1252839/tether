<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div class="blockFour">
    <div class="contain">
      <div class="text">
        <h1>{{ t("blockFour.title") }}</h1>
        <p>{{ t("blockFour.content") }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../scss/global.scss";
.blockFour {
  background-color: #f9fbfb;
  padding: 30px;
  display: flex;
  justify-content: center;
  .contain {
    max-width: 1440px;
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      padding: 20px;
      max-width: 570px;

      h1 {
        margin-top: 58px;
        font-size: 1.875rem;
        text-align: center;
        @include phone {
          font-size: 1.375rem;
        }
      }
      p {
        margin-top: 28px;
        font-size: 1rem;
        color: #586871;
        line-height: 28px;
        text-align: center;
      }
    }
  }
}
</style>
