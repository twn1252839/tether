<script lang="ts" setup>
import logoSVG from "../assets/logo.svg";
</script>

<template>
  <div class="header">
    <nav>
      <div class="logo p-0">
        <img :src="logoSVG" alt="Tether" />
      </div>
      <div class="links p-0">
        <div class="uk-inline px-2 px-md-3">
          <button
            class="uk-button uk-button-default border-0 opHover px-0"
            type="button"
            style="color: #e4e5e8"
            aria-expanded="false"
          >
            <img
              class="imgSet"
              src="https://coin.top/production/logo/THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF.png"
              alt=""
            /><span class="pl-2">ETH</span
            ><i class="fa-solid fa-chevron-down pl-2 fontAS"></i>
          </button>
          <div
            uk-dropdown="mode: click"
            class="border border-dark rounded p-0 uk-dropdown"
            style="min-width: 60px"
          >
            <div class="w-100 text-center lauHover p-1">
              <a class="text-light text-decoration-none a_active p-1" href="#"
                ><img
                  class="imgSet"
                  src="https://coin.top/production/logo/THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF.png"
                  alt=""
                /><span class="pl-2">ETH</span></a
              >
            </div>
            <div class="w-100 text-center lauHover p-1">
              <a class="text-light text-decoration-none" href="#"
                ><img
                  class="imgSet"
                  src="https://coin.top/production/logo/trx.png"
                  alt=""
                /><span class="pl-2">TRON</span></a
              >
            </div>
          </div>
        </div>
        <div class="telegram">
          <i class="bx bxl-telegram bx-tada"></i>
        </div>
        <select v-model="$i18n.locale" class="m-0 px-1 px-md-3">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import "../scss/global.scss";
.header {
  width: 100vw;
  nav {
    width: 60%;
    margin: 38px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include phone {
      min-width: 90%;
    }

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;

      .telegram {
        i {
          font-size: 28px;
          color: #a3a3a3;
        }
      }
      select {
        margin-left: 10px;
        font-size: 1rem;
        border: none;
        outline: none;
        background-color: #f9fbfb;
        border-radius: 2px;
        color: #232323;
        padding: 2px 15px;
      }
    }
  }
}
.fontAS {
  font-size: 0.5rem !important;
  color: #000 !important;
  font-weight: bold;
}
.imgSet {
  height: 25px;
}
.logo {
  width: 200px;
  display: flex;
  align-items: center;
  @include phone {
    width: 150px;
  }
}
.a_active {
  // background-color: rgb(162, 162, 222);
}
</style>
