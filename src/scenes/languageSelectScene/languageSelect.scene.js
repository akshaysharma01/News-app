import React from 'react';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity} from 'react-native';

function languageSelect({ }) {
  return (
    <View style={styles.container} >
      
      <View style={{flex:3,  alignItems: "center", justifyContent: "center"}}>
        <Image source= {require('../../assets/png/language.png')} style ={styles.image} />
      </View>
      <View style={{flex:1.5,  alignItems: "center", justifyContent: "flex-end",paddingTop:20, marginLeft:20}}>
        <Text style = {styles.selectText}>Select your language</Text>
      </View>
      <View style ={{flex:1.5, alignItems: "center", justifyContent: "flex-end",paddingBottom:25}}>
        <TouchableOpacity style={{ borderRadius: 10, width: 244, height: 46, backgroundColor: "#6C63FF", alignItems: "center", justifyContent: "center" }} >
          <Text style={{ fontSize: 24, color: "white" }} >English</Text>
        </TouchableOpacity>
      </View>
      <View style = {{flex:1.5,alignItems: "center", justifyContent: "flex-start"}}>
        <TouchableOpacity style={{ borderRadius: 10, width: 244, height: 46, backgroundColor: "#6C63FF", alignItems: "center", justifyContent: "center" }} >
          <Text style={{ fontSize: 24, color: "white" }} >Hindi</Text>
        </TouchableOpacity>
      </View>
      
      <View style = {{flex:1}}></View>

      
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width:297,
    height:214,
    top:40  
  },
  selectText: {
    fontSize:24,
    width: 255,
    height: 29,
    lineHeight:33,
    color: "#242424"
  },

})

export default languageSelect;