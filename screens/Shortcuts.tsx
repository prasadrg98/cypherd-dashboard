import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Shortcuts = () => {
    return (
        <View style={styles.container}>
          <Text>Shortcuts Screen</Text>
        </View>
      )
    }
    
    export default Shortcuts
    
    const styles = StyleSheet.create({
        container:{
            backgroundColor: "#f3e0be",
            flex: 1,
            justifyContent: "center",
            paddingLeft: "35%"
        }
    })