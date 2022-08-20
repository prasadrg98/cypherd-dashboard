import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export const LoadWalletComponent = () => {
  return (
    <View style={styles.topContainer}>
        <View style={styles.loadWalletSection}>
            <Text style={styles.totalBalanceDesc}>Total Balance</Text>
            <Text style={styles.totalBalancePrice}>$89.97</Text>
            <TouchableOpacity style={styles.LoadWalletButton}>
                <Text style={{marginLeft:17, paddingBottom:4, fontWeight: 'bold',}}>Load Wallet</Text>
            </TouchableOpacity>
        </View>
        {/* <View>
            
        </View> */}
        <View style={{...styles.walletImageSection}}>
            <Image style={styles.sideImage} source={require("../assets/images/wallet_image.png")}></Image>
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
        marginLeft: 15,
        backgroundColor: "#f5b445",
        justifyContent: 'center',
    },
    sideImage:{
        height: 161,
        width: 252
        // height: 161px;
        // width: 252px;
    },
    walletImageSection: {
        // width: 100,
        backgroundColor:'#f3e0be',
        paddingTop: 10,
        justifyContent: 'space-around'

    }

})