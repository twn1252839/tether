<script lang="ts" setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

interface card {
  title: string;
  svgSource: string;
  content: string;
}

const cardsContent = reactive<Array<card>>([
  {
    title: "blockFive.card.1.title",
    svgSource: "card1",
    content: "blockFive.card.1.content",
  },
  {
    title: "blockFive.card.2.title",
    svgSource: "card2",
    content: "blockFive.card.2.content",
  },
  {
    title: "blockFive.card.2.title",
    svgSource: "card3",
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
          </div>
          <span> {{ t(card.content) }}</span>
        </div>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<style lang="scss">
.blockFive {
  display: flex;
  flex-direction: row;
  .contain {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      margin-bottom: 50px;
      h1 {
        font-size: 1.875rem;
        line-height: 1.875rem;
      }
      & > .cards {
        display: flex;
        width: 100%;
        overflow-x: auto;
      }
    }
  }
}
</style>
