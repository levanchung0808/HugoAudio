import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bottom from '../assets/btn_Bottom.svg'
import Setting from '../assets/btn_Setting.svg'
import Pause from '../assets/btn_pause_music.svg'
import Shuffle from '../assets/btn_Shuffle.svg'
import Repeat from '../assets/btn_Repeat_music.svg'
import Back from '../assets/btn_back_music.svg'
import Next from '../assets/btn_next_music.svg'
import Like from '../assets/btn_Like.svg'
import Micro from '../assets/btn_Micro.svg'
import Playlist from '../assets/btn_Playlist.svg'
import Control from '../assets/btn_Control.svg'
import Slider from '@react-native-community/slider';




const TopHitLibrary = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Bottom style={styles.vector_icon}/>
            <Text style={{color:'white',fontSize:17,fontWeight:'700'}}>Today’s Top Hits</Text>
            <Setting style={styles.vector_icon}/>
        </View>
        <View style={styles.image_music}>
            <Image style={{width:300,height:300,marginBottom:10,borderRadius:15}} source={require('../assets/phuoc.png')}/>
            <Text style={{fontSize:20,color:'white',fontWeight:'700',marginBottom:5}}>First Class </Text>
            <Text style={{fontSize:15, fontWeight:'400',color:'white'}}>Jack Harlow</Text>
        </View>
        <View>
        <Slider
            style={{width:300, height: 5,marginBottom:40,backgroundColor:'white'}}
            minimumValue={50}
            maximumValue={100}
            minimumTrackTintColor="green"
            maximumTrackTintColor='#FFFFFF'
            />
        </View>
        <View style={styles.music_bar}>
            <Shuffle style={styles.vector_icon}/>
            <Back style={styles.vector_icon}/>
            <Pause style={styles.vector_icon}/>
            <Next style={styles.vector_icon}/>
            <Repeat style={styles.vector_icon}/>
        </View>
        <View style={styles.control_bar}>
            <Like  style={styles.vector_icon}/>
            <Micro  style={styles.vector_icon}/>
            <Playlist  style={styles.vector_icon}/>
            <Control  style={styles.vector_icon}/>
        </View>
    </View>
  )
}

export default TopHitLibrary

const styles = StyleSheet.create({
    image_music:{
        height:'60%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    control_bar:{
        flexDirection:'row',
        backgroundColor:'red',
        justifyContent:'space-around',
        width:'80%',
        height:50,
        alignItems:'center',
        borderRadius:10,
    },
    music_bar:{
        flexDirection:'row',
        backgroundColor:'blue',
        justifyContent:'space-around',
        alignItems:'center',
        marginEnd:10,
        marginStart:10,
        width:'90%',
        borderRadius:10,
        marginBottom:60

        
        
    },
    header:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginStart:10,
        marginEnd:10,
        marginTop:30,
        width:'90%'
        
        
    },
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
    },
    vector_icon: {
        width: 32,
        height: 32,
        color: 'white',
       
      },
})