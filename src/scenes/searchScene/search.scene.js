import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

function Search() {
  useEffect(() => {
    // firebase.database().ref("users").set({
    //   name: "Hello"
    // })

  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
      <Text>Search</Text>
    </View>
  )
}

export default Search;
