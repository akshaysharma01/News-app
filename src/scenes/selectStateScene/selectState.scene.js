import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function SelectState({ }) {
    return (
        <View style={styles.container} >
            <View style = {{flex: 0.11 ,flexDirection:"row",backgroundColor:"#6C63FF"}}>
                <View style = {{flex:0.05,alignItems: "center", justifyContent: "center"}}>
                    <Image source= {require('../../assets/png/Vector.png')} style ={styles.image} />
                    
                </View>
                <View style ={{flex:0.9,alignItems: "center", justifyContent: "center"}}>
                    <Text style ={styles.selectstate}> Select State </Text>
                </View>
            </View>
            <View style = {{flex: 0.11 ,flexDirection:"row"}}>
                <View style = {{flex:0.05,alignItems: "center", justifyContent: "center"}}>
                    <Image source= {require('../../assets/png/map.png')} style ={styles.mapimage} />
                    
                </View>
                <View style ={{flex:0.9,alignItems: "flex-start", justifyContent: "center"}}>
                    <Text style ={styles.statename}> Rajasthan </Text>
                </View>
            </View>  
            <View style = {{flex: 0.11 ,flexDirection:"row"}}>
                <View style = {{flex:0.05,alignItems: "center", justifyContent: "center"}}>
                    <Image source= {require('../../assets/png/map.png')} style ={styles.mapimage} />
                    
                </View>
                <View style ={{flex:0.9,alignItems: "flex-start", justifyContent: "center"}}>
                    <Text style ={styles.statename}> Uttar Pradesh </Text>
                </View>
            </View>      
                

            

            <View style = {{flex: 1 }}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image : {
      width:25,
      height:21.44,
      top:1.78,  
      },
    selectstate: {
      fontSize:20,
      width: 130,
      height:27,
      fontStyle:"normal",
      textAlign:"center",
      fontWeight:400,
      top:30,
      left:120,
      color : 'white',
      
    },
    mapimage: {
        width:20,
        height:20
    },
    statename: {
      fontSize:20,
      width: 130,
      height:27,
      fontStyle:"normal",
      textAlign:"center",
      fontWeight:400,
      top:30,
      left:120,
      color : '#000000',
    }
    

})

export default SelectState;