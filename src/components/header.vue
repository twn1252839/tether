<script lang="ts" setup>
import logoSVG from "../assets/logo.svg";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// import backgroundImage from "../assets/bg1.svg";
</script>

<template>
  <div class="header">
    <nav>
      <div class="logo p-0">
        <img :src="logoSVG" alt="Tether" />
      </div>
      <div class="links p-0">
        <div class="telegram">
          <i class="bx bxl-telegram bx-tada"></i>
        </div>
        <!-- <div class="">
          <button
            type="button"
            class="btn dropdown-toggle bg-transparent"
            data-toggle="dropdown"
          >
            <img
              src="https://coin.top/production/logo/THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF.png"
              alt=""
              class="imgSet"
            />
            <span class="fsz">ETH</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">
              <img
                src="https://coin.top/production/logo/THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF.png"
                alt=""
                class="imgSet"
              />
              <span class="fsz">ETH</span>
            </button>
            <button class="dropdown-item" type="button">
              <img
                src="https://coin.top/production/logo/trx.png"
                alt=""
                class="imgSet"
              />
              <span class="fsz">TRON</span>
            </button>
          </div>
        </div> -->
        <select v-model="$i18n.locale" class="fsz20 m-0 px-1 px-md-1 ml-1">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
            class="fsz20"
          >
            {{ locale }}
          </option>
        </select>
        <!-- <span class="" id="wOne">
          <button
            type="button"
            class="btn dropdown-toggle bg-transparent"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="fsz">en</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">
              <span class="fsz">en</span>
            </button>
            <button class="dropdown-item" type="button">
              <span class="fsz">zh</span>
            </button>
            <button class="dropdown-item" type="button">
              <span class="fsz">vn</span>
            </button>
          </div>
        </span> -->
        <!-- 測試 -->
        <!-- <span class="" id="wOne">
          <button
            type="button"
            class="btn dropdown-toggle bg-transparent"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="fsz">en</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right" v-model="$i18n.locale">
            <button
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
              class="dropdown-item"
              type="button"
            >
              {{ locale }}
            </button>
          </div>
        </span> -->
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
    width: 200px;
  }
}
.a_active {
  // background-color: rgb(162, 162, 222);
}
#wOne .dropdown-menu-right {
  width: 50px;
  min-width: 50px;
  margin: 0;
  padding: 0;
}
#wOne .dropdown-menu-right button {
  padding: 0 1rem;
}
.dropdown-menu-right {
  width: 50px;
  min-width: 110px;
  margin: 0;
  padding: 0;
}
.dropdown-menu-right button {
  padding: 0.5rem 1.25rem;
}
.logo img {
  width: 100%;
  @include phone {
    width: 85%;
  }
}
.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: none;
}
.dropdown-item img {
  padding-right: 5px;
}
.fsz {
  font-size: 15px !important;
}
.fsz20 {
  font-size: 20px !important;
}
</style>
