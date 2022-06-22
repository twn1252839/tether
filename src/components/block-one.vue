<script lang="ts" setup>
import RoundPNG from "../assets/round.png";
import backgroundImage from "../assets/bg1.svg";
import typingAnimationVue from "./typing-animation.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
const subtitles = [
  "blockOne.subtitle.1",
  "blockOne.subtitle.2",
  "blockOne.subtitle.3",
];

function open() {
  const DOM = document.getElementById("wrap")!;
  DOM.style.display = "flex";
}
</script>

<template>
  <div class="blockOne">
    <div class="contain" :style="backgroundStyle">
      <div class="intro">
        <h1 v-t="'blockOne.title'"></h1>
        <typing-animation-vue
          :i18n-text-keys="subtitles"
          class="mb-3"
        ></typing-animation-vue>
        <form class="mb-1" action="" method="post">
          <input type="radio" name="ETH" id="ETH" class="w-auto" checked />
          <img
            src="https://coin.top/production/logo/THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF.png"
            alt=""
            class="imgSet"
          />
          <label for="ETH">ETH</label>
          <input type="radio" name="ETH" id="TRON" class="w-auto ml-5" />
          <img
            src="https://coin.top/production/logo/trx.png"
            alt=""
            class="imgSet"
          />
          <label for="TRON">TRON</label>
        </form>
        <p class="p-0 m-0" style="margin-top: 20px" v-t="'blockOne.wallet'"></p>
        <input class="input_bottom" type="email" placeholder="" />
        <p class="p-0 m-0" v-t="'blockOne.ReviewReport'">获取审查报告</p>
        <input type="email" :placeholder="t('blockOne.input.emailAddress')" />
        <div class="c">
          <button
            class="px-4 py-3 w-100 vw-100"
            @click="open"
            v-t="'blockOne.button.connectWallet'"
          ></button>
        </div>
      </div>
      <div class="circle">
        <img :src="RoundPNG" alt="Tether Ecosystem" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockOne {
  padding: 0 180px;
  @include laptop {
    padding: 55px;
  }
  @include pad {
    padding: 0 50px;
  }
  @include phone {
    padding: 0 20px;
  }

  .contain {
    background-position: right bottom;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 120px;
    @include pad {
      padding: 50px;
      flex-direction: column;
    }
    @include phone {
      background-size: 100%;
      padding: 2%;
    }
    .intro {
      margin: auto;
      display: flex;
      width: 50%;
      height: 720px;
      flex-direction: column;
      justify-content: center;
      @include pad {
        width: 100%;
        height: auto;
      }
      h1 {
        font-size: 4rem;
        font-weight: 600;
      }
      h2 {
        font-size: 3.8rem;
        font-weight: 400;
      }
      p {
        padding-bottom: 0.5rem;
        color: #009393;
        font-weight: bold;
        font-size: 1.2rem;
      }
      input {
        width: 80%;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        // margin-top: 20px;
        padding: 8px 10px;
        font-size: 1.2rem;
      }
      .input_bottom {
        margin-bottom: 2rem;
      }
      button {
        cursor: pointer;
        outline: none;
        margin-top: 10px;
        max-width: 200px;
        padding: 10px 30px;
        color: #f9f9f9;
        background-color: #009393;
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 30px;
      }

      @include phone {
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2rem;
        }
        input {
          width: 100%;
        }
        .c {
          margin-top: 30px;
          width: 100%;
          text-align: center;
        }
        button {
          border: none;
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
    }
    .circle {
      width: 50%;
      @include pad {
        width: 100%;
      }
      img {
        width: 98%;
        height: auto;
      }
      @include phone {
        margin-top: 40px;
      }
    }
  }
}
.imgSet {
  height: 22px;
  margin: 0 5px 3px 15px;
}
</style>
