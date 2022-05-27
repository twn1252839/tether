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
  <div>
    {{ linkList[0].href }}
  </div>
</template>
