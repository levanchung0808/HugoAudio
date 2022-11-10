import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Invest from './src/assets/btn_Play'; // import SVG
import TophitScreen from './src/components/podcasts/screen/TophitScreen';
import Search from './src/components/podcasts/screen/SearchScreen';
const App = () => {
  return (
    // <TophitScreen></TophitScreen>
    <Search></Search>
    

    // <View style={styles.container}>
    //   <Text style={styles.text_svg}>SVG in here</Text>
    //   <Invest width={200} height={200}>asda</Invest>
    // </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
