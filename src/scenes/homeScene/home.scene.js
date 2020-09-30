import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';

function Home() {
  useEffect(() => {
    firebase.database().ref("users").set({
      name: "Hello"
    })

  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >

    </View>
  )
}

export default Home;
