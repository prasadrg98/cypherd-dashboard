import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export const LoadWalletComponent = ({coinChains}: any) => {

  const calculate_total_balance = () => {
    let total_balance = 0
    for (let chain of coinChains){
        total_balance += +(chain.total_value)
    }
    return total_balance
  }

  return (
    <View style={styles.topContainer}>
        <View style={styles.loadWalletSection}>
            <Text style={styles.totalBalanceDesc}>Total Balance</Text>
            <Text style={styles.totalBalancePrice}>${calculate_total_balance()}</Text>
            <TouchableOpacity style={styles.LoadWalletButton}>
                <Text style={{marginLeft:17, paddingBottom:4, fontWeight: 'bold',}}>Load Wallet</Text>
            </TouchableOpacity>
        </View>
        {/* <View>
            
        </View> */}
        <View style={{...styles.walletImageSection}}>
            <ImageBackground style={styles.sideImage} source={require("../assets/images/wallet_image.png")}/>
        </View>
        
      
    </View>
  )
}

const styles = StyleSheet.create({
    topContainer:{
        // flex: 1,
        flexDirection: 'row'
    },
    loadWalletSection:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f3e0be',
        paddingTop: '50px',
        paddingBottom: '30px',
        paddingLeft: '10px',
        justifyContent: "space-between",

    },
    totalBalanceDesc:{
        paddingBottom: '10px',
        marginLeft: 15,
        fontSize: 15,
    },
    totalBalancePrice:{
        fontWeight: 'bold',
        paddingBottom: '10px',
        marginLeft: 15,
        fontSize: 30,
    },
    LoadWalletButton:{
        height: 40,
        width: 115 ,
        borderRadius: 50,
        marginLeft: 10,
        backgroundColor: "#f5b445",
        justifyContent: 'center',
    },
    sideImage:{
        height: 161,
        width: 252
    },
    walletImageSection: {
        backgroundColor:'#f3e0be',
        paddingTop: 10,
        justifyContent: 'space-around',
        textAlign: 'right'

    }

})