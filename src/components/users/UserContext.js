import React, { createContext, useState } from "react";
import { register, login } from "./UserService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const onRegister = async (username, password) => {
    try {
      const result = await register(username, password);
      //register success
      if (result.error == false) {
        return true;
      }
    } catch (e) {
      console.log("onRegister error", e);
    }
    //register fail
    return false;
  };

  const onLogin = async (username, password) => {
    try {
      const result = await login(username, password);
      //register success
      if (result.error == false) {
        const { accessToken, data } = result;

        //lưu token vào bộ nhớ
        await AsyncStorage.setItem("token", accessToken);
        setUser(data);
        setIsLoggedIn(true);
        return true;
      }
    } catch (e) {
      console.log("onLogin error", e);
    }
    //register fail
    return false;
  };

  return (
    <UserContext.Provider
      value={{ onRegister, onLogin, isLoggedIn, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
