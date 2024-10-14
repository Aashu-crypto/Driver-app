import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, FontFamily, width } from '../../../GlobalStyles'
import { Button, OtpInput } from 'react-native-zaptric-ui'
import { LinearGradient } from "expo-linear-gradient";
const OtpStartRide = () => {
  return (
    <LinearGradient  colors={["white", "rgba(255,255,255,0.8)", "#DCE5F3"]}
    style={{flex:1}}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}>
    <View style={{width:width*0.9,alignItems:'center',alignSelf:'center',marginTop:10}}> 
      <View style={styles.elevatedContainer}>
      <Text style={styles.title}>Enter OTP</Text>
          <Text style={styles.subtitle}>
          We’ve sent an OTP to your customer’s mobile
          </Text>
          <OtpInput/>
          <Button title="Verify Otp" btnWidth={width*0.8}/>
          <Text style={styles.resendText}>
            Didn’t receive OTP yet?{" "}
            <Text style={styles.resendLink}>Resend OTP</Text>
          </Text>
      </View>
    </View>

    </LinearGradient>
  )
}

export default OtpStartRide

const styles = StyleSheet.create({
  elevatedContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 10,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: "#4A4A4A",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 20,
    fontWeight: "400",
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: "#998383",
  },
  resendText: {
    textAlign: "left",
    color: "#888",
    fontSize: 10,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  resendLink: {
    color: "#1C4BF4",
  },
})