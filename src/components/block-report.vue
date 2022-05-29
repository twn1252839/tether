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
    value: "1,233 USDT",
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
        <p class="walletAddress">
          {{ t("report.walletAddress")
          }}<span>TU3fPq6vKAzYZgAbjwYAt3vTGB9FTdTLJw</span>
        </p>
        <p class="rating">{{ t("report.creditRating") }}</p>
        <p class="content" v-html="t('report.content')"></p>
      </div>
      <div class="card">
        <p class="account">{{ t("report.card.account") }}</p>
        <p class="address">TU3fPq6vKAzYZgAbjwYAt3vTGB9FTdTLJw</p>
        <span> {{ t("report.card.rating") }} </span>
        <div class="info">
          <div class="head">
            <img :src="logo" alt="Tether" />
            <span>Tether USD (USDT)</span>
            <span>3,329,437.5</span>
          </div>
          <div class="list">
            <div class="item" v-for="dt in details">
              <span>{{ t(dt.title) }}: </span>
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
      max-width: 90vw;
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
      .walletAddress {
        span {
          text-decoration: underline;
        }
      }
    }
    .card {
      margin: 20px 0;
      border: 1px solid #c5c5c5;
      border-radius: 6px;
      padding: 10px;
      overflow: hidden;
      .account {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .address {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        max-width: 100%;
        overflow: hidden;
      }
      & > span {
        padding: 3px 8px;
        border-radius: 5px;
        color: #00993b;
        background-color: #00993b3b;
      }
      .head {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1.5rem;
        font-weight: 500;
        @include phone {
          font-size: 1rem;
        }
        img {
          width: 50px;
          height: auto;
          margin-right: 10px;
        }
      }
      .list {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        .item {
          font-size: 1rem;
          border-top: 1px solid #c5c5c5;
          padding: 20px 5px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
