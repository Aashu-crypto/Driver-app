import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../GlobalStyles'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Route } from '../../routes';
import SafetyIcon from '../../assets/icons/safety-icon.svg'
const Safety = () => {
    const navigation = useNavigation()
  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate(Route.SAFETYSCREEN)}>
      <SafetyIcon/>
    </Pressable>
  )
}

export default Safety

const styles = StyleSheet.create({
    container:{
        width:50,height:50,backgroundColor:Color.appDefaultColor,position:'absolute',zIndex:10,borderRadius:25,
        alignItems:'center',justifyContent:'center',right:25,top:45
    }
})