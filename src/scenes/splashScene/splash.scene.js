import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { navigate } from '../../services/navigation.service';

function SplashScreen({ }) {

  useEffect(() => {
    // code will run after render
    setTimeout(() => {
      navigate("SelectLanguage");
    }, 3000);
  }, []);

  return (
    <View style={styles.container} >
      <View style={{ flex: 2, alignItems: "center", justifyContent: "flex-end" }} >
        <Text style={styles.titleText} >FLASHBYTES</Text>
      </View>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }} >
        <Image source={require('../../assets/png/logo.png')} style={styles.image} />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text style={styles.smallText} >Get Daily Latest News</Text>
      </View>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "flex-end", paddingBottom: 14 }} >
        <Text style={styles.versionText} >v1.0.0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: {
    fontSize: 34,
    lineHeight: 46,
    color: "#242424"
  },
  image: {
    width: 198,
    height: 164,

  },
  smallText: {
    fontSize: 24,
    lineHeight: 34,
    color: "#B8B8B8"
  },
  versionText: {
    fontSize: 18,
    lineHeight: 25,
    color: "#FBBEBE"
  }
})

export default SplashScreen;