<script setup>
import { useMain } from '@/store/home'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const pinia = useMain()

const router = useRouter()
const route = useRoute()

onMounted(() => {
  router.replace({ path: '/' })
})

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
  console.log('index', index)
  pinia.closeTag(index)
  if (item.name !== route.name) {
    console.log(1)
    return
  }
  if (index === tabLength) {
    console.log(tags[index - 1].name)
    router.push({
      name: tags[index - 1].name
    })

    console.log(2)
    console.log(router.currentRoute.value.name)
  } else {
    router.push({ name: tags[index].name })
    console.log(3)
  }
}

</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
            <Chip :class="{ active: isActive(item) }"  v-for="(item,index) in pinia.tabList" :key="item.url" :label="item.label" :removable="item.name!=='HomeDashboard'"  @click="handleChangeMenu(item)" @remove="handleRemoveMenu(item,index)"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.active{
background-color:#3db9d3;
color: #fff;
}
</style>
