import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Browser = () => {
  return (
    <View style={styles.container}>
      <Text>Browser Screen</Text>
    </View>
  )
}

export default Browser

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f3e0be",
        flex: 1,
        justifyContent: "center",
        paddingLeft: "35%"
    }
})