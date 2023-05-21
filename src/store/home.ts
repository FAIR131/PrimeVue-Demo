import { defineStore } from "pinia";
import {Itasks ,Ilinks} from '@/types/homeDashboard'
import { Irouters } from "@/types/layout";
export const useMain = defineStore("main", {
  state: () => {
    return {
      currentMenu: null as Irouters | null,
      tabList: [
        {
          path: "/",
          label: "首页",
          name: "HomeDashboard",
          component: () => import("@/view/HomeDashboard.vue"),
        },
      ] as Irouters[],

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
      ] as Itasks[],

      links:[      
          {id: 1, source: 1, target: 2, type: "1"},
          {id: 2, source: 2, target: 3, type: "0"},     
          {id: 3, source: 4, target: 5, type: "1"}     
      ] as Ilinks[]
    };
  },

  getters: {},
  actions: {
    selectMenu(val:Irouters) {      
      if (val.name !== '"HomeDashboard"') {
        this.currentMenu = val;
        const index = this.tabList.findIndex((item) => item.name === val.name);
        if (index === -1) {
          this.tabList.push(val);
        }
      }
    },

    closeTag(index:number) {
      this.tabList.splice(index, 1);
    },


    changeTasks(val:Itasks) {
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


  //汉化
  gantt.locale={
    date: {
        month_full: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        day_full: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        day_short: ["日", "一", "二", "三", "四", "五", "六"]
    },
    labels: {
      dhx_cal_today_button: "今天",
      day_tab: "日",
      week_tab: "周",
      month_tab: "月",
      new_event: "新建日程",
      icon_save: "保存",
      icon_cancel: "关闭",
      icon_details: "详细",
      icon_edit: "编辑",
      icon_delete: "删除",
      confirm_closing: "请确认是否撤销修改!", //Your changes will be lost, are your sure?
      confirm_deleting: "是否删除计划?",
      section_description: "描述:",
      section_time: "时间范围:",
      section_type: "类型",
      section_text: "计划名称:",
      section_color: "颜色:",

      /* grid columns */

      column_text: "计划名称",
      column_start_date: "开始时间",
      column_duration: "持续时间",
      column_add: "",

      /* link confirmation */

      link: "关联",
      confirm_link_deleting: "将被删除",
      link_start: " (开始)",
      link_end: " (结束)",

      type_task: "任务",
      type_project: "项目",
      type_milestone: "里程碑",

      minutes: "分钟",
      hours: "小时",
      days: "天",
      weeks: "周",
      months: "月",
      years: "年"
  }
  }
