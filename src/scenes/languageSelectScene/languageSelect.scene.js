import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function languageSelect({ }) {
  return (
    <View style={styles.container} >
      <Text>Language Select</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default languageSelect;