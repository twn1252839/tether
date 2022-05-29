<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="blockReport">
    <div class="block"></div>
    <div class="contain">
      <div class="title">
        {{ t("report.title") }}
      </div>
      <div class="details">
        <p class="walletAddress">{{ t("report.walletAddress") }}</p>
        <p class="rating">{{ t("report.creditRating") }}</p>
        <span class="content">{{ t("report.content") }}</span>
      </div>
      <div class="card"></div>
    </div>
    <div class="block"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockReport {
  overflow: hidden;
  background: #009393c0;
  display: flex;
  flex-direction: row;
  .block {
    flex-grow: 1;
  }
  .contain {
    background-color: #fff;
    padding: 40px;
    width: 840px;
    max-width: 840px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-radius: 6px;
    @include phone {
      padding: 20px;
    }

    .title {
      font-weight: 700;
      font-size: 1.375rem;
      text-align: center;
      margin-bottom: 25px;
      text-align: center;
    }
    .details {
      color: #d1eded;
      font-size: 1rem;
      p {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
