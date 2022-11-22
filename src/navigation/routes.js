const Routes = {
  MAIN_STACK: "Dashboard Stack",
  ...{
    BOTTOM_TAB_STACK: "Bottom Tab Stack",
    ...{
      ...{
        DASHBOARD_STACK: "Dashboard Stack",
        ...{
          DASHBOARD_SCREEN: "Dashboard Screen",
        },
      },
      ACCOUNT_STACK: "ACCOUNT Stack",
      ...{
        SETTING_SCREEN: "Account Screen",
      },
      TOPIC_STACK: "TOPIC Stack",
      ...{
        TOPIC_SCREEN: "Topic Screen",
      },
      TARGET_STACK: "TARGET Stack",
      ...{
        TARGET_SCREEN: "Target Screen",
      },
    },
  },
  INSIDE_STACK: "Inside Stack",
  INSIDE_MODAL_STACK: "Inside Modal Stack",
  BACKDROP: "BACKDROP",
};

export default Routes;
