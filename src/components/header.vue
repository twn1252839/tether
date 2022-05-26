<script lang="ts" setup>
import logoSVG from "../assets/logo.svg";
</script>

<template>
  <div class="header">
    <nav>
      <div class="logo">
        <img :src="logoSVG" alt="Tether" />
      </div>
      <div class="links">
        <div class="telegram">
          <i class="bx bxl-telegram bx-tada"></i>
        </div>
        <div class="lang">中文</div>
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
    }
  }
}
</style>
