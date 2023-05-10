<script setup>
import Chart from 'primevue/chart'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
import { gantt } from 'dhtmlx-gantt'

import { ref, onMounted } from 'vue'
import { useMain } from '@/store/home'
const pinia = useMain()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()

  gantt.init('gantt_here')
  const data = pinia.tasks
  gantt.parse({ data })
})

// 修改任务后触发
gantt.attachEvent('onAfterTaskUpdate', function (id, item) {
  console.log(item)
  const task = pinia.tasks.find((t) => t.id === id)
  if (task) {
    task.text = item.text
    task.start_date = item.start_date
    task.duration = item.duration
    task.progress = item.progress
    console.log(task)
  }
  console.log(pinia.tasks)
})

const chartData = ref()
const chartOptions = ref()
const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--blue-500'),
        tension: 0.4
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--pink-500'),
        tension: 0.4
      }
    ]
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-color')
  const textColorSecondary = documentStyle.getPropertyValue(
    '--text-color-secondary'
  )
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  }
}
</script>
<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <div id="gantt_here" class="h-20rem"></div>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <Chart
          type="line"
          :data="chartData"
          :options="chartOptions"
          class="h-30rem"
        />
      </div>
    </div>
  </div>
</template>
