<script setup lang="ts">

import AppMenuItem from './AppMenuItem.vue'
import { useMenu } from '@/layout/useMenu'
const { model } = useMenu()

</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item
        v-if="!item.separator"
        :item="item"
        :index="i"
      ></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
    <li>
      <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
