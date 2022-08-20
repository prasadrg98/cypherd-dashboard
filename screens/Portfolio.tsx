import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import { Checkbox } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { get_coins } from "../services/apis";
import { CoinType } from "../types";
const windowWidth = Dimensions.get("window").width;

const Portfolio = () => {

    const [Coins, setCoins] = useState<CoinType[]>([])
    const [verified, setVerified] = useState(true)

    const update_coins = () => {
        get_coins().then(
            (response) => {
                let chain_portfolios = response.data.record.chain_portfolios
                let coins_array: CoinType[] = [];

                for (let chain of chain_portfolios) {
                    for (let coin of chain.token_holdings) {
                        if (coin.is_verified === verified)
                            coins_array.push(coin)
                    }
                }
                setCoins(coins_array)
            }
        )
    }

    useEffect(() => {
        update_coins()
    }, [])

    useEffect(() => {
        update_coins()
    }, [verified])

    return (
        <View>
            <View style={styles.middleContainer}>
                <View style={styles.lastUpdatedContainer}>
                    <Text>Last Updated: 4 Mins Ago</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={verified ? 'checked' : 'unchecked'}
                        onPress={() => { setVerified(!verified) }}
                        color="black"
                    />
                    <Text style={styles.verifiedCoinText}>Only Verified Coins</Text>
                </View>
            </View>
            <View style={styles.coinsContainer}>
                {Coins.map((coin, index) => (
                    <View key={index} style={styles.singleCoin}>
                        <Image style={styles.logoImage} source={{uri: coin.logo_url}}></Image>
                        <View style={styles.coinNameSymbolContainer}>
                            <Text style={styles.coinName} >{coin.name}</Text>
                            <Text style={styles.coinSymbol} >{coin.symbol}</Text>
                        </View>
                        <View style={styles.coinPriceContainer}>
                            <Text style={styles.coinTotal} >{coin.total_value}</Text>
                            <Text style={styles.coinPrice} >{coin.price.toFixed(2)}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Portfolio

const styles = StyleSheet.create({
    middleContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: "10px",
        paddingBottom: "20px",
        justifyContent: "space-between",
        borderBottomColor: "lightgray",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderTopColor: "lightgray",
        backgroundColor: "white",
    },

    checkboxContainer: {
        flex: 1,
        flexDirection: 'row',
        right: "0px",
        position: "absolute",
        marginRight: "10px",
        padding: "1px",
        textAlign: 'right'

    },
    lastUpdatedContainer: {
        padding: "11px",
        flex: 1,
        justifyContent: "space-between"

    },
    verifiedCoinText: {
        paddingTop: "10px"
    },
    coinsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between",
        overflow: "scroll",
        bottom:"90px"
    },
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
        fontWeight: 'bold'
    },
    coinSymbol:{
        color: "gray",
        paddingLeft: "10px"
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
        color: "#b1b1b1",
        fontWeight: "bold"
    },
    coinPrice:{
        textAlign: "right",
    }
})