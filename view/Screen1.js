import React from 'react';
import {StyleSheet,View,Image, Text, SafeAreaView,  TouchableOpacity} from 'react-native';
import { Rating } from '@rneui/themed';
import { useFonts } from 'expo-font';


const Screen1 = ({navigation ,route}) => {
  const  {data}  = route.params || { data: require('../assets/vs_silver.png') };
  let [fontsLoaded] = useFonts({
    VT323: require('../assets/fonts/VT323-Regular.ttf'),
  });
  if (fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex:5}}>
          <Image 
            source={data}
            style={{resizeMode:'contain',flex:1}}  
          />
        </View>
        <View style={{flex:5}}>
          <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={{marginTop:20,width:'100%',height:35,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Rating showRating fractions="{1}" startingValue="{5}" imageSize={20}/>
            <Text style={styles.text}>(Xem 828 đánh giá)</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <Text style={{marginLeft:20,fontSize:20,fontWeight:700,width:'40%'}}>1.790.000đ</Text>
            <Text style={{fontSize:16,textDecorationLine:'line-through'}}>1.790.000đ</Text>
          </View>
          <View style={{width:'100%',height:25,marginTop:20,flexDirection:'row'}}>
            <Text style={{marginLeft:20,fontSize:14, color:'red',fontWeight:700,width:'50%',height:25}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require('../assets/chamhoi.png')}
              styles={{resizeMode:'contain',flex:1,width:10,height:10}}
            />
          </View>
          {/* 4 MÀU-CHỌN MÀU */}
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{borderRadius:20,width:'90%',height:40,flexDirection:'row',alignItems:'center',borderWidth:1,marginTop:30}}
               onPress={() => navigation.navigate('Screen2')}
            >
              <Text style={{marginLeft:'30%',fontSize:16,fontWeight:700,marginRight:70}}>4 MÀU-CHỌN MÀU</Text>
              <Image source={require('../assets/vector.png')}
                styles={{resizeMode:'contain',flex:1,width:10,height:10}}/>
            </TouchableOpacity>
          </View>
          <View style={{width:'90%',height:50,backgroundColor:'red',marginTop:50,borderRadius:20,marginLeft:20,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25,color:'white',fontWeight:700}}>CHỌN MUA</Text>
          </View>
        </View>
  
        
      </SafeAreaView>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft:20,
    fontFamily:'VT323'
  },
});

export default Screen1;