import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Options = () => {
  return (
    <View style={styles.container}>
      <Text>Options Screen</Text>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f3e0be",
        flex: 1,
        justifyContent: "center",
        paddingLeft: "35%"
    }
})