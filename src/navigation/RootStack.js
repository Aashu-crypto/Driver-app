import React from "react";
import { useSelector } from "react-redux";

import { Route } from "../../routes";

import OnBoardingStack from "./stack/OnBoardingStack";
import RegistrationStack from "./stack/RegistrationStack";
import HomeStack from "./stack/HomeStack";
import MyDrawer from "./drawer/DrawerNavigation";
import EarningStack from "./stack/EarningStack";

const RootStack = () => {
  const navigation = useSelector((state) => state.screen.screen);
  console.log("navigation", navigation);

  switch (navigation) {
    case Route.MAIN:
      return <OnBoardingStack />;
    case Route.REGISTRATION_STACK:
      return <RegistrationStack />;
    case Route.HOME_STACK:
      return <EarningStack />;

    default:
      return <OnBoardingStack />;
  }
};

export default RootStack;
