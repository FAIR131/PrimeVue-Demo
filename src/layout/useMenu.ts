import { Imenu } from "@/types/layout";

export const useMenu = () => {
  const model: Imenu[] = [
    {
      label: "HomeDashboard",
      items: [
        {
          label: "首页",
          icon: "pi pi-fw pi-home",
          to: "/",
          name: "HomeDashboard",
        },
      ],
    },
    {
      label: "Pages",
      items: [
        {
          label: "一",
          icon: "pi pi-fw pi-pencil",
          to: "/uikit/FirstView",
          name: "FirstView",
        },
        {
          label: "二",
          icon: "pi pi-fw pi-user",
          to: "/uikit/SecondView",
          name: "SecondView",
        },
        {
          label: "三",
          icon: "pi pi-fw pi-book",
          to: "/uikit/ThirdView",
          name: "ThirdView",
        },
      ],
    },
  ];

  return {
    model,
  };
};
