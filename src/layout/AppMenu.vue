<script setup>
import { ref } from 'vue'

import AppMenuItem from './AppMenuItem.vue'

const model = ref([
  {
    label: 'HomeDashboard',
    items: [{ label: '首页', icon: 'pi pi-fw pi-home', to: '/', name: 'HomeDashboard' }]
  },
  {
    label: 'Pages',
    items: [
      {
        label: '一',
        icon: 'pi pi-fw pi-pencil',
        to: '/uikit/FirstView',
        name: 'FirstView'
      },
      {
        label: '二',
        icon: 'pi pi-fw pi-user',
        to: '/uikit/SecondView',
        name: 'SecondView'

      },
      {
        label: '三',
        icon: 'pi pi-fw pi-book',
        to: '/uikit/ThirdView',
        name: 'ThirdView'
      }

    ]
  }

])
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
