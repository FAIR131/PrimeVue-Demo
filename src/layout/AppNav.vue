<script setup lang="ts">
import { useMain } from '@/store/home'
import { useRouter, useRoute } from 'vue-router'

const pinia = useMain()

const router = useRouter()
const route = useRoute()

//  点击标签跳转
const handleChangeMenu = (item) => {
  router.push({
    name: item.name
  })
}

const isActive = (item) => {
  return item.name === router.currentRoute.value.name
}

const tags = pinia.tabList

// 点击标签删除
const handleRemoveMenu = (item, index) => {
  const tabLength = tags.length - 1
  pinia.closeTag(index)
  if (item.name !== route.name) {
    // 没选中标签
    return
  }
  if (index === tabLength) {
    // 删最后一个选中标签
    router.push({
      name: tags[index - 1].name
    })
  } else {
    // 非最后一个选中标签
    router.push({ name: tags[index].name })
  }
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Chip
          :class="{ active: isActive(item) }"
          v-for="(item, index) in tags"
          :key="item.name"
          :label="item.label"
          :removable="item.name !== 'HomeDashboard'"
          @click="handleChangeMenu(item)"
          @remove.stop="handleRemoveMenu(item, index)"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card{
  padding: 10px;
}
.active {
  background-color: #3db9d3;
  color: #fff;
}
</style>
