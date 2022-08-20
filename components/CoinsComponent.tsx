import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { CoinType } from "../types";


export const CoinsComponent = ({coin}) => {
  return (
        <View style={styles.singleCoin}>
            <Image style={styles.logoImage} source={{uri: coin.logo_url}}></Image>
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
        fontSize: 13,
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