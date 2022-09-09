import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();

const Header = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.TopWrapper}>
            <View style={styles.menuWrapper}>
              <LinearGradient
                colors={['#F5F5F5', '#0F286A']}
                style={styles.linearGradientMenu}>
                  {/* Menu Button */}
                <MaterialCommunityIcons
                  name="menu"
                  size={30}
                  style={styles.menuIcon}
                />
              </LinearGradient>
            </View>
            <View style={styles.lTranslate}>
              <LinearGradient
                colors={['#F5F5F5', '#0F286A']}
                style={styles.linearGradientTranslate}>
                <Text style={styles.lTranslateText}>E</Text>
              </LinearGradient>
            </View>
            <View style={styles.logo}>
              <Image source={require('../img/InnerLogo.png')} />
            </View>
            <View style={styles.searchIconContainer}>
              <LinearGradient
                colors={['#F5F5F5', '#0F286A']}
                style={styles.lSearchIcon}>
                <MaterialIcons
                  name="search"
                  size={30}
                  style={styles.SearchIcon}
                />
              </LinearGradient>
            </View>
            <View style={styles.bellContainer}>
              <LinearGradient
                colors={['#F5F5F5', '#0F286A']}
                style={styles.linearBell}>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={30}
                  style={styles.bellIcon}
                />
              </LinearGradient>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  linearGradientMenu: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  linearGradientTranslate: {
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  lSearchIcon: {
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  menuIcon: {
    height: 31,
    width: 40,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  bellContainer: {
    paddingRight: 25,
  },
  linearBell: {
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  bellIcon: {
    fontSize: 25,
    paddingHorizontal: 1,
    fontWeight: '700',
    color: '#ffffff',
  },

  lTranslateText: {
    fontSize: 20,
    paddingHorizontal: 8,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'InriaSans-Bold',
  },
  SearchIcon: {
    fontSize: 25,
    paddingHorizontal: 1,
    fontWeight: '700',
    color: '#ffffff',
  },
  TopWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
