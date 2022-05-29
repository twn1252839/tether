<script lang="ts" setup>
import logo from "../assets/logo.png";
import { useI18n } from "vue-i18n";
import { reactive } from "vue";
const { t } = useI18n();
interface detail {
  title: string;
  value: string;
}
const details = reactive<Array<detail>>([
  {
    title: "report.card.tradings",
    value: "120",
  },
  {
    title: "report.card.sent",
    value: "150",
  },
  {
    title: "report.card.sent24",
    value: "3 Txn",
  },
  {
    title: "report.card.tradingValue",
    value: "1233 USDT",
  },
]);
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
      <div class="card">
        <p class="account">{{ t("report.card.account") }}</p>
        <p>TU3fPq6vKAzYZgAbjwYAt3vTGB9FTdTLJw</p>
        <span> {{ t("report.card.rating") }} </span>
        <div class="info">
          <div class="head">
            <img :src="logo" alt="Tether" />
            <span>Tether USD (USDT)</span>
            <span>3329437.544860</span>
          </div>
          <div class="list">
            <div class="item" v-for="dt in details">
              <span>{{ t(dt.title) }}</span>
              <span>{{ dt.value }}</span>
            </div>
          </div>
        </div>
      </div>
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
    .card {
      margin: 20px 10px;
      background-color: #e8e9eb;
      border-radius: 6px;
      padding: 10px;
    }
  }
}
</style>
