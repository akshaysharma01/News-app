import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

function Trending() {
  useEffect(() => {
    // firebase.database().ref("users").set({
    //   name: "Hello"
    // })

  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
      <Text>Trending</Text>
    </View>
  )
}

export default Trending;
