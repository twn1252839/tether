<script lang="ts" setup>
import backgroundImage from "../assets/bg4.svg";
import { useI18n } from "vue-i18n";
import { reactive } from "vue";
const backgroundStyle = `background-image: url( ${backgroundImage} )`;
const { t } = useI18n();
interface FAQ {
  index: number;
  title: string;
  content: string;
}
const FAQs = reactive<Array<FAQ>>([
  {
    index: 0,
    title: "blockSix.faq.1.title",
    content: "blockSix.faq.1.content",
  },
  {
    index: 1,
    title: "blockSix.faq.2.title",
    content: "blockSix.faq.2.content",
  },
  {
    index: 2,
    title: "blockSix.faq.3.title",
    content: "blockSix.faq.3.content",
  },
  {
    index: 3,
    title: "blockSix.faq.4.title",
    content: "blockSix.faq.4.content",
  },
]);
const toggleFaq = (index: number) => {
  try {
    const DOM = document.getElementById(`faq-${index}`)!;
    if (DOM.classList.length > 1) {
      DOM.classList.remove("active");
      return false;
    }
    DOM.classList.add("active");
    return;
  } catch (err) {
    console.error("Fuck: ", err);
  }
};
</script>

<template>
  <div class="blockSix">
    <div class="block"></div>
    <div class="contain" :style="backgroundStyle">
      <div class="title">
        <h2>FAQs</h2>
      </div>
      <div class="faqs">
        <div class="faq" v-for="f in FAQs" :id="`faq-${f.index}`">
          <div class="title" @click="toggleFaq(f.index)">
            <h1>{{ t(f.title) }}</h1>
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 14 8"
              aria-hidden="true"
              style="width: 14px; height: 8px"
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.0625 1.1167L6.8625 6.9167L12.6625 1.1167"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </svg>
          </div>
          <div class="content" v-html="t(f.content)"></div>
        </div>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockSix {
  overflow: hidden;
  background-color: #009393;
  display: flex;
  flex-direction: row;
  .block {
    flex-grow: 1;
  }
  .contain {
    flex-grow: 1;
    background-repeat: no-repeat;
    background-position: top left;
    padding: 96px 320px;
    width: 1440px;
    max-width: 1440px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @include laptop {
      padding: 96px 10px;
    }

    & > .title {
      margin-bottom: 24px;
      h2 {
        color: #fff;
        font-size: 1.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
      }
    }
    .faqs {
      .faq {
        height: 88px;
        &.active {
          height: auto;
        }
        overflow: hidden;
        padding: 0;
        border-top: 1px solid #32a8a8;
        &:last-child {
          border-bottom: 1px solid #32a8a8;
        }
        & > .title {
          margin: 30px 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          h1 {
            color: #fff;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
          }
        }
        .content {
          color: #d1eded;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
