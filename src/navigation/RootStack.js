import React from "react";
import { useSelector } from "react-redux";

import { Route } from "../../routes";

import OnBoardingStack from "./stack/OnBoardingStack";
import RegistrationStack from "./stack/RegistrationStack";
import HomeStack from "./stack/HomeStack";
import MyDrawer from "./drawer/DrawerNavigation";

const RootStack = () => {
  const navigation = useSelector((state) => state.screen.screen);
  console.log("navigation", navigation);

  switch (navigation) {
    case Route.MAIN:
      return <MyDrawer />;
    case Route.REGISTRATION_STACK:
      return <RegistrationStack />;
    case Route.HOME_STACK:
      return <MyDrawer />;

    default:
      return <OnBoardingStack />;
  }
};

export default RootStack;
