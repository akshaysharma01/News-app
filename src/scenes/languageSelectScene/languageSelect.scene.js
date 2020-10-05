import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function languageSelect({ }) {
  return (
    <View style={styles.container} >
      
      <view style={{flex:3, alignItems:"center", justifyContent:"center"}}>
        <Image source= {require('../../assets/png/language.png')} style ={styles.image} />
      </view>
      <view style={{flex:2.5, alignIteams: "center", justifyContent: "flex-end",paddingTop:40}}>
        <Text style = {styles.selectText}>Select Your Language</Text>
      </view>
      <view style ={{flex:2,backgroundColor:'green'}}></view>
      
      <view style = {{flex:0.5,backgroundColor:'grey'}}></view>

      
     
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
    top:20
    
    
  },
  selecttext: {
    fontSize:40,
    
    left:500,
    width:297,
    height:33,
    top:20
    

  }
})

export default languageSelect;