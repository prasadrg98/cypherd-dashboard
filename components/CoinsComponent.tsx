import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


export const CoinsComponent = ({coin}: any) => {
  return (
        <View style={styles.singleCoin}>
            <View>
                <Image style={styles.logoImage} source={{uri: coin.logo_url}}></Image>
            </View>
            <View style={styles.coinNameSymbolContainer}>
                <Text style={styles.coinName} >{coin.name}</Text>
                <Text style={styles.coinSymbol} >{coin.symbol}</Text>
            </View>
            <View style={styles.coinPriceContainer}>
                <Text style={styles.coinTotal} >${coin.total_value}</Text>
                <Text style={styles.coinPrice} >{coin.price.toFixed(2)}</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    singleCoin: {
        flexDirection: 'row',
        backgroundColor: "white",
        padding: "10px",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "lightgray",
    },
    logoImage:{
        height: "50px",
        width: "50px",
        borderRadius: 100,
        marginTop: 5
        
    },
    coinName:{
        color: "black",
        padding: "10px",
        fontWeight: 'bold',
        paddingLeft: '16px'
    },
    coinSymbol:{
        color: "gray",
        paddingLeft: "16px",
    },
    coinNameSymbolContainer:{
        paddingLeft:6
    },
    coinPriceContainer:{
        flex:1,
        justifyContent: "space-between",
        right: 0,
        // position: 'absolute',
        marginRight: "10px"
    },
    coinTotal:{
        textAlign: "right",
        fontWeight: "bold",
        fontSize: 17,
        paddingTop: 7,
        paddingBottom: 7
    },
    coinPrice:{
        textAlign: "right",
        color: "#b1b1b1",
        paddingBottom: 10
    }
})