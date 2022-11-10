import {StyleSheet} from 'react-native';

const styleLogin = StyleSheet.create({
  /*  */
  txtSignUpNow: {
    color: '#015EEA',
    fontSize: 12,
  },
  txtDontHaveACount: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  viewDontHaveACount: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'black',
  },
  /* footer */

  /*  */
  txtForgotPassword: {
    color: '#DADADA',
    marginVertical: 20,
  },
  viewIC: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
  },
  viewTxt: {
    marginVertical: 1,
  },
  txtLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewBtnLogin: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#015EEA',
    width: '95%',
    height: 40,
    borderRadius: 10,
  },
  viewRemembered: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
  },
  icEmail: {
    width: 20,
    height: 20,
  },
  txtIie: {
    fontSize: 12,
  },
  tip: {
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#01C0FA',
    // backgroundColor: '#01C0FA',

    fontSize: 15,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  viewInput: {
    padding: 20,
    width: '85%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: '7%',
    alignItems: 'center',
  },
  colorBlack: {
    position: 'relative',
    flex: 5,
    backgroundColor: 'black',
  },
  colorGreen: {
    position: 'relative',
    flex: 4,

    // backgroundColor: '#01C0FA',
    backgroundColor: '#015EEA',

    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  body: {
    flex: 5,
  },
  /* body */

  /*  */

  txt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    weight: 200,
  },
  nameLogo: {
    width: 145,
    height: 30,
  },
  logo: {
    width: 120,
    height: 110,
  },
  viewLogo: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#015EEA',
    // backgroundColor: '#01C0FA',
  },

  /* header */
  container: {
    flex: 2,
    backgroundColor: 'black',
  },
});
export default styleLogin;
