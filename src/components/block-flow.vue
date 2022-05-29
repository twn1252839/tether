<script lang="ts" setup>
import { computed, toRef } from "vue";
import { useI18n } from "vue-i18n";
import otcEN from '../assets/OTC-en.png';
import otcZH from '../assets/OTC-zh.png';
const { t } = useI18n();
const locale = computed(() => {
  const locale = t('flow.img');
  if (locale === 'en') return otcEN;
  else return otcZH;
});
</script>
<template>
  <div class="blockFlow">
    <div class="block"></div>
    <div class="contain">
      <img :src="locale" alt="" />
    </div>
    <div class="block"></div>
  </div>
</template>

<style lang="scss">
@import "../scss/global.scss";
.blockFlow {
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: row;
  .block {
    flex-grow: 1;
  }
  .contain {
    background-color: #009393c0;
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
  }
}
</style>
