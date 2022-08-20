import { View, Text, StyleSheet, Dimensions, ScrollView, Image, SafeAreaView } from 'react-native'
import { Checkbox } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { get_coins } from "../services/apis";
import { CoinType } from "../types";
import { CoinsComponent } from '../components/CoinsComponent';
import { LoadWalletComponent } from '../components/LoadWalletComponent';
const windowWidth = Dimensions.get("window").width;

const Portfolio = () => {

    const [Coins, setCoins] = useState<CoinType[]>([])
    const [verified, setVerified] = useState(true)
    const [coinChains, setcoinChains] = useState([])

    const update_coins = (coinChainsArr) => {
        let coins_array: CoinType[] = [];
        for (let chain of coinChainsArr) {
            for (let coin of chain.token_holdings) {
                if (coin.is_verified === verified)
                    coins_array.push(coin)
            }
        }
        console.log(coins_array)
        setCoins(coins_array)
    }

    const load_coins = () => {
        get_coins().then(
                (response) => {
                    setcoinChains(response.data.record.chain_portfolios)
                    update_coins(response.data.record.chain_portfolios)
                }
            )
    }

    useEffect(() => {
        load_coins()
    }, [])

    useEffect(() => {
        update_coins(coinChains)
    }, [verified])

    return (
        <View>
            <LoadWalletComponent/>
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
            <View style={{height: "77.5vh"}}>
                <View style={styles.coinsContainer}>
                {
                    Coins.map((coin, index) => (
                        <CoinsComponent key={index} coin={coin}/>
                    ))
                }
                </View>
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
        paddingBottom: "10px",
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
        // justifyContent: "space-between",
        overflow: "scroll",
        flexGrow: 1 ,
        // padding: "10px"
        // bottom:"90px"
    }
})