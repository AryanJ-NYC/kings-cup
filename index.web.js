import React from "react";
import { AppRegistry } from "react-native";
import App from "./app/App";

/* eslint-disable no-undef */
AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("react-root") });
