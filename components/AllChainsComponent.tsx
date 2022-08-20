import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'

export const AllChainsComponent = ({coinChains, setCategory}: any) => {

  const setChainCategory = (value: any) =>{
    
    console.log(value)
    setvalue(value.label)
    setCategory(value.label)
  }

  const getCategoriesFromCoinchains = () => {
     let categories = []
     for( let chain of coinChains){
        categories.push({label: chain.chain_id, value:chain.chain_id, image: {
            uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
          }})
     }
     categories.push({label: "ALL CHAINS", value:"ALL CHAINS"})
     return categories
  }

  const [value, setvalue] = useState("")
  return (
    
    <View style={styles.topContainer}>
       <Dropdown style={styles.dropdown}
                data={getCategoriesFromCoinchains()}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'ALL CHAINS'}
                value={value}
                onChange={(value)=>setChainCategory(value)}
                containerStyle={{backgroundColor:'#f5c35a'}}
                
                ></Dropdown>
    </View>
  )
}

const styles = StyleSheet.create({
    topContainer:{
        backgroundColor: '#f3e0be',
        textAlign: 'right',
        flex:1,
        alignItems: 'center',
        paddingTop: 10,
    },
    dropdown:{
        backgroundColor: "#f5c35a",
        width: "134px",
        left: "107px",
        borderRadius: 50,
        fontSize:12,
        padding:2,
        textAlign:"center"
    },
    imageStyle:{
        width: "13px",
        height: "13px",

    }

})
