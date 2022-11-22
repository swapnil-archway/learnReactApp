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
    },
  },
  INSIDE_STACK: "Inside Stack",
  INSIDE_MODAL_STACK: "Inside Modal Stack",
  BACKDROP: "BACKDROP",
};

export default Routes;
