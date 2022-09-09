import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Dimensions,
  // ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from './src/Header.js';

import {ScrollView} from 'react-native-virtualized-view';

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0F286A', '#ffffff']}
        style={styles.linearGradient}>
        <View style={styles.bottomView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.discoverWrapper}>
              <View>
                 <Header /> {/* Header Component */}
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
