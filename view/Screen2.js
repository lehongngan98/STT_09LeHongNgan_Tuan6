import { View, Text,SafeAreaView,Image, TouchableOpacity } from 'react-native'

import { StyleSheet } from 'react-native'
import React ,{ useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Screen1 from './Screen1';

const Screen2 = ({navigation}) => {
    const [image, setImage] = useState(require('../assets/vs_silver.png'))
    
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:3,flexDirection:'row'}}>
            <Image source={image}
                style={{resizeMode:'contain',flex:4,height:'100%'}}
            />
            <Text style={{fontSize:16,fontWeight:700,marginLeft:20,flex:6,marginTop:50}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
        <View style={{flex:7,backgroundColor:'#C4C4C4'}}>
            <View style={{width:'100%',height:40,justifyContent:'center',marginLeft:20}}>
                <Text style={{fontSize:20,fontWeight:500}}>Chọn một màu bên dưới:</Text>
            </View>
            <View style={{alignItems:'center',marginTop:15}}>
                <TouchableOpacity style={{width:80,height:80,borderWidth:1,marginTop:10,backgroundColor:'#C5F1FB'}}
                    onPress={() => {
                        setImage(require('../assets/vs_silver.png'))
                    }}
                />
                <TouchableOpacity style={{width:80,height:80,borderWidth:1,marginTop:10,backgroundColor:'#F30D0D'}}
                    onPress={() => {
                        setImage(require('../assets/vs_red.png'))
                    }}
                />
                <TouchableOpacity style={{width:80,height:80,borderWidth:1,marginTop:10,backgroundColor:'black'}}
                    onPress={() => {
                        setImage(require('../assets/vs_black.png'))
                    }}
                />
                <TouchableOpacity style={{width:80,height:80,borderWidth:1,marginTop:10,backgroundColor:'#234896'}}
                    onPress={() => {
                        setImage(require('../assets/vs_blue.png'))
                    }}
                />
            </View>
            <View style={{width:'100%',height:50,marginTop:35,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{borderRadius:20,width:'70%',height:50,backgroundColor:'#1952E2',justifyContent:'center',alignItems:'center'}}
                   onPress={() => navigation.navigate('Screen1', { data: image})}
                >
                    <Text style={{fontSize:25,fontWeight:700,color:'white'}}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </SafeAreaView>
  )
}

export default Screen2
