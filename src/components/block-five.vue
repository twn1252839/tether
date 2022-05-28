<script lang="ts" setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import illus1 from "../assets/illus1.png";
import illus2 from "../assets/illus2.png";
import illus3 from "../assets/illus3.png";
const { t } = useI18n();

interface card {
  title: string;
  svgSource: string;
  content: string;
}

const cardsContent = reactive<Array<card>>([
  {
    title: "blockFive.card.1.title",
    svgSource: illus1,
    content: "blockFive.card.1.content",
  },
  {
    title: "blockFive.card.2.title",
    svgSource: illus2,
    content: "blockFive.card.2.content",
  },
  {
    title: "blockFive.card.2.title",
    svgSource: illus3,
    content: "blockFive.card.2.content",
  },
]);
</script>

<template>
  <div class="blockFive">
    <div class="block"></div>
    <div class="contain">
      <div class="title">
        <h1>{{ t("blockFive.title") }}</h1>
      </div>
      <div class="cards">
        <div class="card" v-for="card in cardsContent">
          <div class="titleBar">
            <h2>{{ t(card.title) }}</h2>
            <img :src="card.svgSource" alt="illus" />
          </div>
          <p>{{ t(card.content) }}</p>
        </div>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<style lang="scss">
@import "../scss/global.scss";
.blockFive {
  display: flex;
  flex-direction: row;
  width: 100vw;
  .block {
    flex-grow: 1;
  }
  .contain {
    max-width: 1440px;
    width: 1440px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 1;
    max-width: 1440px;
    align-items: center;
    .title {
      max-width: 570px;
      text-align: center;
      margin: 50px 10px;
      h1 {
        color: #232323;
        font-size: 1.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        @include phone {
          font-size: 1.375rem;
        }
      }
      & > .cards {
        display: flex;
        width: 100%;
        overflow-x: auto;
      }
    }
    .cards {
      margin: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      height: fit-content;
      padding-bottom: 24px;
      overflow-x: auto;
      overflow-y: hidden;
      align-items: center;
      justify-content: center;
      .card {
        padding: 40px;
        width: 380px;
        color: #232323;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-color: #fff;
        border-radius: 6px;
        flex-grow: 0;
        &:not(:first-child) {
          margin-left: 20px;
        }
        .titleBar {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          flex-direction: row;
          justify-content: space-between;

          h2 {
            color: #009393;
            font-size: 1.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: 36px;
          }
        }
        p {
          color: #586871;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
