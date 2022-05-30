<script lang="ts" setup>
import tronlink from "../assets/tronlink.png";
import tokenPocket from "../assets/tokenPocket.png";
import imToken from "../assets/imtoken.webp";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
interface opt {
  name: string;
  icon: string;
}
const connectOptions = {
  mobile: [
    {
      name: "imToken",
      icon: imToken,
    },
    {
      name: "TokenPocket",
      icon: tokenPocket,
    },
  ],
  desktop: [
    {
      name: "TronLink",
      icon: tronlink,
    },
  ],
};
let options = reactive<Array<opt>>([]);
if ("ontouchstart" in document.documentElement) {
  options = connectOptions.mobile;
} else {
  options = connectOptions.desktop;
}
</script>

<template>
  <div class="walletConnect">
    <i class="bx bx-x-circle"></i>
    <div class="title">{{ t("connectWallet") }}</div>
    <div class="links">
      <div class="link" v-for="item in options">
        <div class="name">{{ item.name }}</div>
        <div class="icon">{{ item.icon }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.walletConnect {
  position: fixed;
  left: 50vw;
  top: 50vw;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 90vw;
}
</style>
