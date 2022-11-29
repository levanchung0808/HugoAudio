import { Text, View, Image, TextInput, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import styleLogin from "./styleLogin";
import IcEmail from "../../../assets/svg/mail.svg"; // import SVG
import IcHide from "../../../assets/svg/hide.svg"; // import SVG
import IcGoogle from "../../../assets/svg/google.svg"; // import SVG
import IcFb from "../../../assets/svg/fb.svg"; // import SVG
import CheckBox from "@react-native-community/checkbox";

import UserContext from "../../users/UserContext";

const LoginScreen = () => {

  const { onLogin } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const result = await onLogin(username, password);
      if (result == false) {
        console.log("Sai thông tin rồi nha");
      } else {
        console.log("Đăng nhập rồi nha");
      }
    } catch (e) {
      console.log("Login error", e);
    }
  };

  return (
    <View style={styleLogin.container}>
      <View style={styleLogin.header}>
        <View style={styleLogin.viewLogo}>
          <Image
            style={styleLogin.logo}
            source={require("../../../assets/img/logo_only.png")}
            resizeMode="cover"
          ></Image>
          <Image
            style={styleLogin.nameLogo}
            source={require("../../../assets/img/Text.png")}
            resizeMode="cover"
          ></Image>
        </View>
        <View>
          <Text style={styleLogin.txt}>
            Cùng tận hưởng âm nhạc trên Hugo Audio
          </Text>
        </View>
      </View>

      <View style={styleLogin.body}>
        <View style={styleLogin.colorGreen}></View>
        <View style={styleLogin.colorBlack}></View>
        <View style={styleLogin.viewInput}>
          <View>
            <Text style={styleLogin.title}>Đăng nhập HugoAudio</Text>
          </View>
          <View style={styleLogin.tip}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={styleLogin.txtIie}
              placeholderTextColor={"#01C0FA"}
              placeholder="Username"
            ></TextInput>
            <IcEmail style={styleLogin.icEmail}></IcEmail>
          </View>
          <View style={styleLogin.tip}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styleLogin.txtIie}
              placeholderTextColor={"#01C0FA"}
              placeholder="Mật khẩu"
            ></TextInput>
            <Pressable>
              <IcHide style={styleLogin.icEmail}></IcHide>
            </Pressable>
          </View>
          <View style={styleLogin.viewRemembered}>
            <Text>Nhớ mật khẩu</Text>
            <CheckBox />
          </View>
          <View style={styleLogin.viewBtnLogin}>
            <Pressable onPress={login}>
              <Text style={styleLogin.txtLogin}>Đăng nhập</Text>
            </Pressable>
          </View>
          <View style={styleLogin.viewTxt}>
            <Text>hoặc</Text>
          </View>
          <View style={styleLogin.viewIC}>
            <IcGoogle></IcGoogle>
            <IcFb></IcFb>
          </View>
          <View>
            <Pressable>
              <Text style={styleLogin.txtForgotPassword}>Quên mật khẩu?</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styleLogin.footer}>
        <View style={styleLogin.viewDontHaveACount}>
          <Text style={styleLogin.txtDontHaveACount}>
            Bạn chưa có tài khoản?
          </Text>
          <Pressable>
            <Text style={styleLogin.txtSignUpNow}>Đăng ký ngay</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
