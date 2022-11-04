import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Search from '../assets/btn_Search.svg';
import Person from '../assets/btn_Person.svg';
import Like from '../assets/btn_Like.svg';
import Next from '../assets/btn_Next.svg';
import Artist from '../assets/btn_Artist.svg';
import Podcast from '../assets/btn_Podcast.svg';

const LibraryScreen = () => {
  const [foods, setFoods] = useState([
    {
      id: 1,
      url: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/307681936_142972251766889_3452252407113028857_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hgUnsw9VZk8AX-Pwoa9&tn=_2Y6WdjfwPMtmgpQ&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAdrMbAgz0NYwOFu8ApSPiKYFMcStd358hNXwxbLsc_VA&oe=63686CFF',
      name: 'Playlist1',
    },
    {
      id: 2,
      url: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/307681936_142972251766889_3452252407113028857_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hgUnsw9VZk8AX-Pwoa9&tn=_2Y6WdjfwPMtmgpQ&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAdrMbAgz0NYwOFu8ApSPiKYFMcStd358hNXwxbLsc_VA&oe=63686CFF',
      name: 'Playlist2',
    },
    {
      id: 10,
      url: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/307681936_142972251766889_3452252407113028857_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hgUnsw9VZk8AX-Pwoa9&tn=_2Y6WdjfwPMtmgpQ&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAdrMbAgz0NYwOFu8ApSPiKYFMcStd358hNXwxbLsc_VA&oe=63686CFF',
      name: 'Playlist3',
    },
    {
      id: 12,
      url: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/307681936_142972251766889_3452252407113028857_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hgUnsw9VZk8AX-Pwoa9&tn=_2Y6WdjfwPMtmgpQ&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAdrMbAgz0NYwOFu8ApSPiKYFMcStd358hNXwxbLsc_VA&oe=63686CFF',
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
            style={styles.img_item}
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
          <Search style={styles.vector_icon} />
          <Person style={styles.vector_icon} />
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          data={foods}
          numColumns={Math.ceil(foods.length / 2)}
          renderItem={({item}) => <ItemView item={item} />}
          keyExtractor={item => item.id}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 15, fontWeight: '600',marginBottom:20,color:'white'}}>See all</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{fontSize:18,color:'white',fontWeight:'600',marginBottom:20,marginEnd:230}}>Your Activities</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',paddingBottom:10}}>
            <Like  style={styles.vector_icon}/>
            <Text style={{color:'white',fontSize:17,fontWeight:'600',marginEnd:100}}>Liked Songs</Text>
            <Next  style={styles.vector_icon}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',paddingBottom:10}}>
            <Artist style={styles.vector_icon}/>
            <Text style={{color:'white',fontSize:17,fontWeight:'600',marginEnd:100}}>Followed Artists</Text>
            <Next  style={styles.vector_icon}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',paddingBottom:10}}>
            <Podcast  style={styles.vector_icon}/>
            <Text style={{color:'white',fontSize:17,fontWeight:'600',marginEnd:100}}>Followed Podcast</Text>
            <Next  style={styles.vector_icon}/>
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
    alignItems:'center'
  },
});
