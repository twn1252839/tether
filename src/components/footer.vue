<script lang="ts" setup>
import logo from "../assets/logo.svg";
</script>

<template>
  <div class="footer">
    <img :src="logo" alt="Tether" />
    <div class="copyright">
      Copyright © 2013-2022 Tether Operations Limited. All rights reserved.
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  background-color: #232323;
  display: flex;
  padding: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .copyright {
    margin-top: 20px;
    color: #586871;
    text-align: center;
  }
}
</style>
