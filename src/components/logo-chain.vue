<script lang="ts" setup>
import { reactive } from "vue";
import links from "../data/links.json";
interface link {
  href: string;
  img: string;
}

const linkList = reactive<Array<link>>(links);
</script>

<template>
  <div class="linkList">
    <div class="lists">
      <div class="list-t">
        <div class="list">
          <a v-for="item in linkList" :href="item.href">
            <div class="logo">
              <img :src="item.img" alt="logo" />
            </div>
          </a>
        </div>
      </div>
      <div
        class="list-t"
        style="position: absolute; transform: translate3d(100%, 0, 0)"
      >
        <div class="list">
          <a v-for="item in linkList" :href="item.href">
            <div class="logo">
              <img :src="item.img" alt="logo" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/global.scss";
@keyframes roll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
.linkList {
  width: 100%;
  display: flex;
  overflow: hidden;
  .lists {
    flex: 1;
    display: flex;
    animation: roll 40s linear 1s infinite;
    align-items: center;
    justify-content: flex-start;
    .list-t {
      display: flex;
      min-width: 100%;
      flex-direction: row;
      .list {
        display: flex;
        flex-direction: row;
        a {
          text-decoration: none;
          cursor: pointer;
          margin: 0;
          .logo {
            background-color: #fff;
            border-radius: 6px;
            height: 130px;
            display: flex;
            align-items: center;
            margin-left: 15px;
            margin-right: 15px;
            justify-content: center;
            width: 250px;
          }
        }
      }
    }
  }
}
</style>
