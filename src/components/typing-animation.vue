<script lang="ts" setup>
import { onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const defineTypingSpeed = 200;
const defineErasingSpeed = 40;
const props = defineProps<{ i18nTextKeys: string[] }>();
let texts = [...props.i18nTextKeys.map((key) => i18n.t(key))];
let typeValue = ref("");
let typeStatus = ref(false);
let newTextDelay = 800;
let textIndex = 0;
let charIndex = 0;
let timeOut: ReturnType<typeof setTimeout> | undefined;
const random = (max: number, min = 0) => ~~(Math.random() * max) + min;
watch(i18n.locale, () => {
  texts = [...props.i18nTextKeys.map((key) => i18n.t(key))];
  charIndex = 0;
  typeValue.value = "";
  clearTimeout(timeOut!);
  typeText();
});
const typeText = () => {
  if (charIndex < texts[textIndex].length) {
    typeStatus.value = true;
    typeValue.value += texts[textIndex].charAt(charIndex++);
    timeOut = setTimeout(
      typeText,
      /[a-zA-Z0-9\\.]+/.test(texts[textIndex])
        ? 40 * random(2, 1) * 1.1
        : defineTypingSpeed
    );
  } else {
    typeStatus.value = false;
    timeOut = setTimeout(eraseText, newTextDelay);
  }
};
if (texts.length > 0) typeText();
const eraseText = () => {
  if (charIndex > 0) {
    typeStatus.value = true;
    typeValue.value = texts[textIndex].substring(0, --charIndex);
    timeOut = setTimeout(
      eraseText,
      /[a-zA-Z0-9\\.]+/.test(texts[textIndex]) ? 10 : defineErasingSpeed
    );
  } else {
    typeStatus.value = false;
    if (++textIndex >= texts.length) textIndex = 0;
    timeOut = setTimeout(typeText, defineTypingSpeed + 1e3);
  }
};
onUnmounted(() => clearTimeout(timeOut!));
</script>

<template>
  <div class="typing">
    <span
      class="typed-text"
      :class="{ typing: typeStatus }"
      v-text="typeValue"
    ></span>
  </div>
</template>

<style lang="scss">
@import "../scss/global.scss";
.typing {
  height: 4rem;
  display: flex;
  margin-top: 10px;
  span.typed-text {
    color: #232323;
    font-size: 2rem;
    position: relative;
    white-space: pre-line;
    height: 3rem;
    display: inline-table;
    line-height: 2rem;
    @include phone {
      font-size: 1.8rem;
    }
    @include pad {
      padding: 0 10px;
    }
    &:after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 4px;
      height: 2rem;
      @include phone {
        height: 1.8rem;
      }
      margin-left: 3px;
      background-color: #232323;
      animation: cursorBlink 0.8s infinite;
    }
    &.typing:after {
      animation: none;
    }
  }
  @keyframes cursorBlink {
    45% {
      background-color: #232323;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
  }
}
</style>
