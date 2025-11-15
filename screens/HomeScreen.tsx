import {StyleSheet, View, Text } from 'react-native'
import {Button} from 'react-native-paper'
import React from 'react'

export default function HomeScreen({ navigation }:any) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});