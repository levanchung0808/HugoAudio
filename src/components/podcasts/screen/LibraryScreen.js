import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Search from '../../../assets/btn_Search.svg';
import Person from '../../../assets/btn_Person.svg.svg';
import Like from '../../../assets/btn_Like.svg';
import Next from '../../../assets/btn_Next.svg';
import Artist from '../../../assets/btn_Artist.svg';
import Podcast from '../../../assets/btn_Podcast.svg';
import colors from '../../../colors/colors';

import PodcastContext from '../PodcastContext';

const LibraryScreen = () => {
  const [musics, setMusics] = useState([
    {
      id: 1,
      url: 'https://vcdn1-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=j8THd4HE31ZHWTQhSZx5tQ',
      name: 'Playlist1',
    },
    {
      id: 2,
      url: 'https://vcdn1-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=j8THd4HE31ZHWTQhSZx5tQ',
      name: 'Playlist2',
    },
    {
      id: 3,
      url: 'https://vcdn1-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=j8THd4HE31ZHWTQhSZx5tQ',
      name: 'Playlist3',
    },
    {
      id: 4,
      url: 'https://vcdn1-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=j8THd4HE31ZHWTQhSZx5tQ',
      name: 'Playlist4',
    },
  ]);

  const ItemView = ({item}) => {
    return (
      <View style={styles.body}>
        <View style={styles.item_playlist}>
          <Image
            source={{
              uri: item.url,
            }}
            resizeMode="contain"
            style={styles.img_item}
            // style={{width: 100, height: 100}}
          />
          <Text style={styles.tv_item}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <Text style={styles.tv_header}>Your Library</Text>
        </View>
        <View style={styles.hedaer_right}>
          <View style={{width: 35}}>
            <Search style={styles.vector_icon} />
          </View>
          <View>
            <Person style={styles.vector_icon} />
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          data={musics}
          numColumns={Math.ceil(musics.length / 2)}
          renderItem={({item}) => <ItemView item={item} />}
          keyExtractor={item => item.id}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              marginBottom: 20,
              color: 'white',
            }}>
            See all
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '600',
            marginBottom: 20,
            marginEnd: 230,
          }}>
          Your Activities
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            paddingBottom: 10,
          }}>
          <View
            style={{width: 35, justifyContent: 'center', alignItems: 'center'}}>
            <Like style={styles.vector_icon} />
          </View>
          <View style={{width: 300, paddingStart: 20}}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: '600',
                marginEnd: 100,
              }}>
              Liked Songs
            </Text>
          </View>
          <View>
            <Next style={styles.vector_icon} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            paddingBottom: 10,
          }}>
          <View
            style={{width: 35, justifyContent: 'center', alignItems: 'center'}}>
            <Artist style={styles.vector_icon} />
          </View>
          <View style={{width: 300, paddingStart: 20}}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: '600',
                marginEnd: 100,
              }}>
              Followed Artists
            </Text>
          </View>
          <View>
            <Next style={styles.vector_icon} />
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '90%', paddingBottom: 10}}>
          <View
            style={{width: 35, justifyContent: 'center', alignItems: 'center'}}>
            <Podcast style={styles.vector_icon} />
          </View>
          <View style={{width: 300, paddingStart: 20}}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>
              Followed Podcast
            </Text>
          </View>
          <View>
            <Next style={styles.vector_icon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LibraryScreen;
const styles = StyleSheet.create({
  flatlist: {
    flexDirection: 'row',
  },
  tv_item: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
  img_item: {
    marginTop: 11,
    width: 132,
    height: 114,
    borderRadius: 10,
  },
  item_playlist: {
    width: 163,
    height: 181,
    marginStart: 20,
    alignItems: 'center',
  },
  vector_icon: {
    width: 32,
    height: 32,
    color: 'white',
  },
  tv_header: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 29,
    marginStart: 28,
  },
  hedaer_right: {
    flexDirection: 'row',
  },
  header_left: {},
  container: {
    flex: 1,
  },
  header: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 27,
    width: '95%',
  },
  body: {
    flex: 5.5,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  footer: {
    flex: 3,
    alignItems: 'center',
  },
});
