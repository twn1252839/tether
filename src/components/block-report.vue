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
    value: "<span style='color: red;'>150</span>",
  },
  {
    title: "report.card.sent",
    value: `<span style='color: red;'>122</span> ( <span style='color: green; font-size: 2rem'>↓</span>76Txn <span style='color: red; font-size: 2rem'>↑</span>46Txn)`,
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
      <div class="watermark"></div>
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
            <div class="right">
              <img :src="logo" alt="Tether" />
              <div class="token">
                <p>Tether USD (USDT) <span>TRC20</span></p>
                <span>TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t</span>
              </div>
            </div>
            <span>29,437.924752</span>
          </div>
          <div class="list">
            <div class="item" v-for="dt in details">
              <span>{{ t(dt.title) }}: </span>
              <span v-html="dt.value"></span>
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
    position: relative;
    .watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      background: url("/src/assets/logo.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      opacity: 0.2;
    }
    background-blend-mode: saturation;
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
        .right {
          display: flex;
          align-items: center;
          .token {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            p {
              font-size: 20px;
              line-height: 25px;
              span {
                background-color: #ffcece;
                padding: 2px;
                border-radius: 3px;
                color: #8f8f8f;
              }
            }
            span {
              color: #c5c5c5;
              font-size: 12px;
            }
          }
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
