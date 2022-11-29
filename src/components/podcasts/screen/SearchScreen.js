    import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

import Invest from '../../../assets/Rectangle 9.svg'; // import SVG

import Icon3 from '../../../assets/icon_3.svg'; // import SVG
import Sreach from '../../../assets/icon_sreach.svg';

const Search = () => {
  const data = [
    {
      id: 1,
      name: 'Son Tung',
    },
    {
      id: 2,
      name: 'Warting for you',
    },
    {
      id: 3,
      name: 'Mono',
    },

    {
      id: 4,
      name: 'Chua bao gio',
    },
    {
      id: 5,
      name: 'Ok',
    },
    {
      id: 6,
      name: 'Sao cung duoc',
    },
  ];

  const Falist2 = [
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

  const renderItem = ({item}) => {
    return (
      <View style={{}}>
        <TouchableOpacity style={styles.song}>
          <Text style={{color: 'white'}}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem1 = ({item}) => {
    return (
      <View style={styles.viewFlast1}>
        <TouchableOpacity style={styles.song}>
          {/* <Image style={styles.hinh} resizeMode={'cover'}
                        source={Invest} /> */}

          <Invest></Invest>
          <Text style={styles.textSingle}>{item.name}</Text>
          <Text style={styles.textCategory}>{item.Category}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem2 = ({item}) => {
    return (
      <View style={styles.viewBrowse}>
        
        <TouchableOpacity style={styles.btnBrowse}>
        <ImageBackground 
        source={{uri: 'https://ieem.vn/stores/news_dataimages/bichthuy/082022/10/09/20f03bccfd7febae88e7c21ee942403820220810094759.7010110.jpg?rt=20220810094833'}}
        resizeMode="cover" style={{width:'100%',height:'100%'}}>
          <Text style={{color: 'white'}}>{item.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
        
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.view1}>
          <Text style={styles.textSearch}>Search</Text>
          <Icon3></Icon3>
        </View>

        <View style={styles.view2}>
          <Sreach></Sreach>
          <TextInput
            style={styles.ipsreach}
            placeholder="Artist, songs, or podcasts"
            placeholderTextColor="white"></TextInput>
        </View>

        <View style={{marginTop: 10}}>
          <FlatList
            style={{}}
            horizontal
            keyExtractor={item => item.id}
            data={data}
            renderItem={renderItem}
          />
        </View>

        <Text style={styles.textPodcasr}>Podcast’s</Text>

        <View style={{marginTop: 10}}>
          <FlatList
            style={{}}
            horizontal
            keyExtractor={item => item.id}
            data={Falist2}
            renderItem={renderItem1}
          />
        </View>
        
        <Text style={styles.textBrowse}>Browse all</Text>

        <View style={{marginTop: 10}}>
          <FlatList
            style={{height:250}}
            numColumns={2}
            keyExtractor={item => item.id}
            data={data}
            renderItem={renderItem2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },

  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },

  textSearch: {
    color: '#FFFFFF',
    fontSize: 24,
    fontStyle: 'bold',
  },

  view2: {
    marginTop: 10,

    flexDirection: 'row',
    backgroundColor: '#0E0E0F',
    alignItems: 'center',
    borderRadius: 10,
    height: 43,
  },

  ipsreach: {
    color: '#FFFFFF',
  },

  viewsong: {
   
  },

  song: {
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#0E0E0F',
    padding: 10,
  },

  viewBrowse:{
    width:'50%',
    height:130,


    
  },
  btnBrowse:{
    borderRadius:50,
    borderWidth:1,
    height:'100%',
    width:'100%',
    marginLeft: 10,
    borderRadius: 10,
  
    padding: 10,
  },

  textPodcasr: {
    color: '#FFFFFF',
    marginTop: 30,
    fontSize: 20,
    fontStyle: 'normal',
  },

  textBrowse:{
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 20,
    fontStyle: 'normal',
  },

  viewFlast1: {
    width: 150,
    height: 200,
  },

  hinh: {
    width: 150,
    height: 150,
  },

  textSingle:{
    color:'white',
  },
  textCategory:{
    color:'#DADADA',
    fontSize:12
    
  }

});
