<script lang="ts" setup>
import tronlink from "../assets/tronlink.png";
import tokenPocket from "../assets/tokenpocket.png";
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

function exit() {
  const DOM = document.getElementById("wrap")!;
  DOM.style.display = "none";
}

let options = reactive<Array<opt>>([]);
if ("ontouchstart" in document.documentElement) {
  options = connectOptions.mobile;
} else {
  options = connectOptions.desktop;
}
</script>

<template>
  <div id="wrap">
    <div class="walletConnect">
      <i @click="exit" class="bx bx-x-circle"></i>
      <div class="title">{{ t("connectWallet") }}</div>
      <div class="links">
        <div class="link" v-for="item in options">
          <div class="name">{{ item.name }}</div>
          <img :src="item.icon" alt="x" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#wrap {
  display: none;
  transition: 0.3s ease-in-out;
  background-color: #2929298e;
  position: fixed;
  z-index: 1111111;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .walletConnect {
    width: 500px;
    max-width: 90vw;
    background-color: #fff;
    border-radius: 6px;
    padding: 20px;
    position: relative;
    i {
      font-size: 28px;
      color: #868686;
      position: absolute;
      top: 10px;
      right: 10px;
      &:hover {
        color: rgb(255, 51, 51);
      }
      cursor: pointer;
      transition: 0.2s ease-in;
    }
    .title {
      text-align: center;
      font-size: 1.575rem;
      font-weight: 500;
      margin-bottom: 25px;
    }
    .links {
      display: flex;
      flex-direction: column;
      .link {
        cursor: pointer;
        margin-bottom: 20px;
        padding: 5px 10px;
        border-radius: 6px;
        background-color: #eeeeee;
        border: 1px solid #eeeeee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          max-width: 30px;
          border-radius: 5px;
        }
        transition: 0.2s ease;
        &:hover {
          border: #009393 1px solid;
        }
      }
    }
  }
}
</style>
