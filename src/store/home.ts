import { defineStore } from "pinia";
export const useMain = defineStore("main", {
  // 相当于data
  state: () => {
    return {
      currentMenu: null,
      tabList: [
        {
          path: "/",
          label: "首页",
          name: "HomeDashboard",
          component: () => import("@/view/HomeDashboard.vue"),
        },
      ],

      tasks: [
        {
          id: 1,
          text: "项目#1",
          start_date: "01-04-2023",
          duration: 5,
          progress: 0.4,
          open: true,
        },
        {
          id: 2,
          text: "任务 #1-1",
          start_date: "01-04-2023",
          duration: 3,
          progress: 0.6,
          parent: 1,
        },
        {
          id: 3,
          text: "任务 #1-2",
          start_date: "3-04-2023",
          duration: 2,
          progress: 0.6,
          parent: 1,
        },
        {
          id: 4,
          text: "项目#2",
          start_date: "02-04-2023",
          duration: 3,
          progress: 0.4,
          open: true,
        },
        {
          id: 5,
          text: "任务 #2-1",
          start_date: "02-04-2023",
          duration: 1,
          progress: 0.6,
          parent: 4,
        },
      ],
    };
  },
  // 相当于计算属性
  getters: {},
  // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
  actions: {
    selectMenu(val) {
      if (val.name !== '"HomeDashboard"') {
        this.currentMenu = val;
        const index = this.tabList.findIndex((item) => item.name === val.name);
        if (index === -1) {
          this.tabList.push(val);
        }
      }
      console.log(this.tabList);
    },
    closeTag(index) {
      /*   const delIndex = this.tabList.findIndex((val) => val.name === item.name);
      console.log(delIndex);
      
      if (delIndex !== -1) {
        this.tabList.splice(delIndex, 1);
      }
 */
      console.log(index);
      this.tabList.splice(index, 1);
      console.log(this.tabList);
    },


    changeTasks(val) {
      const task = this.tasks.find((t) => t.id === val.id);
      if (task) {
        task.text = val.text;
        task.start_date = val.start_date;
        task.duration = val.duration;
        task.progress = val.progress;
      }
    },
  },
});

