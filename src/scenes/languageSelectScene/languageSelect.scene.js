import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
import firebase, { firestore } from 'firebase';
import { navigate } from '../../services/navigation.service';

function languageSelect({ }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchLanguage();
  }, []);

  function fetchLanguage() {
    firebase.firestore().collection('language').get().then((snapshot) => {
      const lang = [];
      snapshot.docs.forEach(doc => {
        lang.push(doc.data());
      });
      setLanguages(lang);
    });
  }

  function setLanguage(language) {
    firebase.firestore().collection('user_app_language').add({ user_id: "12334566", language: language }).then(() => {
      navigate("SelectCity");
    });
  }

  return (
    <View style={styles.container} >

      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
        <Image source={require('../../assets/png/language.png')} style={styles.image} />
        <Text style={styles.selectText}>Select your language</Text>
      </View>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "flex-end", paddingBottom: 25 }}>
        {
          languages.map((item) => {
            console.log("item", item)
            return (
              <TouchableOpacity
                onPress={() => {
                  setLanguage(item.name)
                }}
                style={{ borderRadius: 10, width: 244, height: 46, backgroundColor: "#6C63FF", alignItems: "center", justifyContent: "center", marginTop: 15 }} >
                <Text style={{ fontSize: 24, color: "white" }} >{item.name}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 297,
    height: 214,
    top: 40
  },
  selectText: {
    fontSize: 24,
    width: 255,
    height: 29,
    lineHeight: 33,
    color: "#242424",
    marginTop: 50
  },

})

export default languageSelect;