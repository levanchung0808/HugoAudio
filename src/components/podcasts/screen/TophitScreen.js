import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';
import React from 'react';
import Back from '../../../assets/back.svg';
import Bg from '../../../assets/imgbackground.svg';
import Heart from '../../../assets/heart.svg';
import There from '../../../assets/icon_3.svg';
import Heart1 from '../../../assets/heartdo.svg';
import Clock from '../../../assets/clock.svg';
import Pause from '../../../assets/btn_Play.svg';
import Pause1 from '../../../assets/icon_pause.svg';

const TophitScreen = () => {
  const data = [
    {
      id: 10,
      name: 'Son Tung',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },

    {
      id: 11,
      name: 'Son Tung1',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },

    {
      id: 12,
      name: 'Son Tung2',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },

    {
      id: 13,
      name: 'Son Tung3',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },

    {
      id: 14,
      name: 'Son Tung4',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },

    {
      id: 15,
      name: 'Son Tung5',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },

    {
      id: 16,
      name: 'Son Tung5',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },

    {
      id: 17,
      name: 'Son Tung5',
      image:
        'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833',
      Category: 'Rock',
    },
  ];

  const renderItem2 = ({item}) => {
    return (
      <View style={styles.viewfl}>
        <View style={styles.btnList}>
          <View style={styles.viewimgbg}>
            <Image
              source={{uri: item.image}}
              resizeMode="cover"
              style={styles.imgbg}></Image>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/pause.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewtext}>
            <Text style={{color: 'white', fontSize: 20}}>{item.name}</Text>
            <Text style={{color: 'white'}}>{item.Category}</Text>
          </View>

          <View style={styles.viewicon}>
            <Heart></Heart>
            <There style={{marginLeft: 20}}></There>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewbg}>
        <ImageBackground
          source={require('../../../assets/imgbg.png')}
          resizeMode="cover"
          style={styles.bg}>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.bg1}>
            <View style={styles.bg2}>
              <Back></Back>
            </View>
            <View style={styles.bg3}>
              <Heart style={styles.iconheart}></Heart>
              <There></There>
            </View>
          </View>

          <View style={styles.viewText}>
            <Text style={styles.text}>TODAY'S</Text>
            <Text style={styles.text1}>TOP HITS</Text>
          </View>

          <View style={styles.viewText1}>
            <View style={styles.view}>
              <Heart1 style={styles.icon1}></Heart1>
              <Text style={styles.text2}>357,828 likes</Text>
            </View>

            <View style={styles.view1}>
              <Clock style={styles.icon1}></Clock>
              <Text style={styles.text3}>2hr 40min</Text>
            </View>

            <Pause style={styles.pause}></Pause>
          </View>
        </ImageBackground>

        <View style={styles.viewlist}>
          <Text style={styles.textFeaturing}>Featuring</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={renderItem2}
          />
        </View>
      </View>
    </View>
  );
};

export default TophitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewbg: {height: '50%'},
  bg: {height: '100%'},
  bg1: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20,
    alignItems: 'center',
  },
  bg2: {},
  bg3: {flexDirection: 'row', left: 300, alignItems: 'center'},
  iconheart: {right: 20},

  viewText: {marginTop: 160, marginLeft: 40},

  text: {height: 35, fontSize: 30, color: 'white', fontWeight: 'bold'},

  text1: {height: 60, fontSize: 50, color: 'white', fontWeight: 'bold'},

  viewText1: {flexDirection: 'row', marginLeft: 30, marginTop: 20, height: 20},

  view: {flexDirection: 'row', alignItems: 'center'},

  view1: {flexDirection: 'row', marginLeft: 30, alignItems: 'center'},

  text2: {fontSize: 12, color: 'white'},

  text3: {fontSize: 13, color: 'white'},

  pause: {left: 90},
  icon1: {right: 5},
  viewlist: {},

  textFeaturing: {fontSize: 25, color: 'white'},

  viewfl: {height: 100, borderBottomWidth: 1, borderColor: '#B0AEAE'},

  btnList: {paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 10},

  viewimgbg: {width: 70,
    height: 70,alignItems: 'center',justifyContent: 'center'},

  imgbg: {
    width: 70,
    height: 70,
    position: 'absolute',
    borderRadius:10
    
  },

  viewtext: {width: 235, justifyContent: 'center', marginLeft: 10},

  img: {width: 15, height: 15,position:'relative'},

  viewicon1: {},

  viewicon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
