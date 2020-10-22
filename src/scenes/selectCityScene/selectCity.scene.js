import React from 'react';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
import { navigate } from '../../services/navigation.service';

function selectCity({ }) {
  return (
    <View style={styles.container} >
      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
        <Image source={require('../../assets/png/city.png')} style={styles.image} />
      </View>
      <View style={{ flex: 1.5, alignItems: "center", justifyContent: "flex-start", marginLeft: 25, paddingTop: 20 }}>
        <Text style={styles.selectCity}>Select your city and explore nearby news</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", paddingBottom: 25 }}>
        <TouchableOpacity style={{ borderRadius: 10, width: 244, height: 46, backgroundColor: "#6C63FF", alignItems: "center", justifyContent: "center" }} >
          <Text style={{ fontSize: 20, color: "white" }} >Search by location</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
        <TouchableOpacity
          onPress={() => {
            navigate("SelectState")
          }}
          style={{ borderRadius: 10, width: 299, height: 46, backgroundColor: "#B8B8B8", alignItems: "center", justifyContent: "center" }} >
          <Text style={{ fontSize: 20, color: "white" }} >Select location manually</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5 }}></View>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 222,
    height: 172,
    top: 30
  },
  selectCity: {
    fontSize: 24,
    width: 275,
    height: 66,
    lineHeight: 32,
    color: "#000000",
    fontFamily: "Nunito",
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: "normal",
    top: 269,
    left: 38
  }
})

export default selectCity;