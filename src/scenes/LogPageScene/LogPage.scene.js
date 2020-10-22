import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
function logPage({ }) {
   
    return (
        <View style = {styles.container}>
            
                <View style = {{flex:0.5,backgroundColor:'#6C63FF',alignItems: "center", justifyContent: "center",}}>
                    <Text style ={styles.header}>Login</Text>
                </View>
                <View style={{flex:2,  alignItems: "center", justifyContent: "center"}}>
                    <Image source= {require('../../assets/png/login.png')} style ={styles.image} />
                </View>
                <View style = {{flex:1,  alignItems: "center", justifyContent: "flex-end",}}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter your name'
                        placeholderTextColor='rgba(0, 0, 0, 0.42)'
                        
                    />
                </View>
                <View style = {{flex:1,  alignItems: "center", justifyContent:'flex-start',top:20}}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter Mobile Number'
                        placeholderTextColor='rgba(0, 0, 0, 0.42)'
                        
                    />
                </View>
                <View style={{flex:1,alignItems:'center', justifyContent:'flex-start',}}>
                    <TouchableOpacity style={{ borderRadius: 10, width: 287, height: 46, backgroundColor: "#6C63FF", alignItems: "center", justifyContent: "center" }} >
                        <Text style={{ fontSize: 20, color: "white" }} >Login</Text>
                    </TouchableOpacity>

                </View>
                <View style ={{flex:1.5,flexDirection:'row',alignItems: 'flex-start', justifyContent:'center',}}>
                    <View style ={{flex:0.08,alignItems: "center", justifyContent:'space-around',}}>
                        <Image source={require('../../assets/png/facebook.png')} style ={styles.logo}></Image>
                    </View>
                    <View style ={{flex:0.08,alignItems: "center", justifyContent: "center",}}>
                        <Image source={require('../../assets/png/whatsapp.png')} style ={styles.logo}></Image>
                    </View>
                    <View style ={{flex:0.08,alignItems: "center", justifyContent: "center",}}>
                        <Image source={require('../../assets/png/search.png')} style ={styles.logo}></Image>
                    </View>
                </View>


            

        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex:1
    },
    header: {
        
        fontSize:20,
        fontStyle:'Regular',
        color:'#FFFFFF',
        width: 80,
        height: 27,
        fontWeight:'400'
    },
    image: {
        width:221,
        height:170,
        top:20
        
    },
    input: {
        width:296,
        height:45,
        textAlign:'center',
        fontSize:20,
        fontWeight:'400',
        backgroundColor:'rgba(89, 89, 89, 0.14)',
        fontStyle:'normal',
        fontFamily:'Nunito',
        borderRadius:5
    },
    logo:{
        width:40,
        height:40,
    }
})

export default logPage