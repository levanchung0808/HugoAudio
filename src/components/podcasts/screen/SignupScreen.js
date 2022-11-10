import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React from 'react';
import styleLogin from './styleLogin';
import IcEmail from '../../../assets/svg/mail.svg'; // import SVG
import IcHide from '../../../assets/svg/hide.svg'; // import SVG
import IcGoogle from '../../../assets/svg/google.svg'; // import SVG
import IcFb from '../../../assets/svg/fb.svg'; // import SVG
import CheckBox from '@react-native-community/checkbox';
const HomeScreen = () => {
  return (
    <View style={styleLogin.container}>
      <View style={styleLogin.header}>
        <View style={styleLogin.viewLogo}>
          <Image
            style={styleLogin.logo}
            source={require('../../../assets/img/logo_hugo.png')}
            resizeMode="cover"></Image>
          <Image
            style={styleLogin.nameLogo}
            source={require('../../../assets/img/hugo_audio.png')}
            resizeMode="cover"></Image>
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
            <Text style={styleLogin.title}>Đăng ký tài khoản</Text>
          </View>
          <View style={styleLogin.tip}>
            <TextInput
              style={styleLogin.txtIie}
              placeholderTextColor={'#01C0FA'}
              placeholder="Email hoặc tên tài khoản"></TextInput>
            <IcEmail style={styleLogin.icEmail}></IcEmail>
          </View>
          <View style={styleLogin.tip}>
            <TextInput
              style={styleLogin.txtIie}
              placeholderTextColor={'#01C0FA'}
              placeholder="Nhập mật khẩu"></TextInput>
            <IcHide style={styleLogin.icEmail}></IcHide>
          </View>
          <View style={styleLogin.tip}>
            <TextInput
              style={styleLogin.txtIie}
              placeholderTextColor={'#01C0FA'}
              placeholder="Nhập lại mật khẩu"></TextInput>
            <IcHide style={styleLogin.icEmail}></IcHide>
          </View>
          {/* <View style={styleLogin.viewRemembered}>
            <Text>Ghi nhớ mật khẩu</Text>
            <CheckBox />
          </View> */}
          <View style={styleLogin.viewBtnLogin}>
            <Pressable>
              <Text style={styleLogin.txtLogin}>Đăng ký tài khoản</Text>
            </Pressable>
          </View>
          <View style={styleLogin.viewTxt}>
            <Text>hoặc</Text>
          </View>
          <View style={styleLogin.viewIC}>
            <IcGoogle></IcGoogle>
            <IcFb></IcFb>
          </View>
          {/* <View>
            <Pressable>
              <Text style={styleLogin.txtForgotPassword}>Forget password?</Text>
            </Pressable>
          </View> */}
        </View>
      </View>
      <View style={styleLogin.footer}>
        <View style={styleLogin.viewDontHaveACount}>
          <Text style={styleLogin.txtDontHaveACount}>
            Bạn đã có tài khoản?
          </Text>
          <Pressable>
            <Text style={styleLogin.txtSignUpNow}>Đăng nhập</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
