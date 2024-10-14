import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily } from '../../../GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
const safetyOptions = [
  {
    id: 1,
    label: 'Contact 112',
    icon: 'warning',
    color: '#e74c3c',
  },
  {
    id: 2,
    label: 'Call Safety Support',
    icon: 'call',
    color: '#3498db',
  },
  {
    id: 3,
    label: 'Record Audio',
    icon: 'mic',
    color: '#e74c3c',
  },
  {
    id: 4,
    label: 'Share Trip Status',
    icon: 'location',
    color: '#27ae60',
  }
];

const SafetyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      
      <LinearGradient colors={["transparent", "#C6CEED"]} style={{flex:1}}>
      <View style={styles.gridContainer}>
        {safetyOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.gridItem}
            onPress={() => console.log(`${option.label} pressed`)}
          >
            <Ionicons name={option.icon} size={40} color={option.color} />
            <Text style={styles.gridItemText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.gridItemFull}> 
      <Ionicons name={"alert-circle"} size={40} color={"#f39c12"} />
      <Text>Report other issues</Text>
      </View>
      <View style={{paddingHorizontal:10}}> 
      <Text style={styles.protectedTitle}>How you're protected</Text>
      <View style={styles.protectedContainer}>
      <Text style={styles.activeLabel}>Active</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View>
        <Text style={styles.protectedText}>How you’re protected</Text>
        <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e</Text>
        </View>
        <Ionicons name={"chevron-forward"} size={25} color={Color.appDefaultColor} />
      </View>
      </View>
      {/* <View style={styles.protectedContainer}>
       
       <TouchableOpacity style={styles.protectedButton}>
         <Text style={styles.activeLabel}>Active</Text>
         <View>
         <Text style={styles.protectedText}>How you're protected</Text>
         <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e</Text>
         </View>
         
         <Ionicons name="chevron-forward" size={20} color="#000" />
       </TouchableOpacity>
     </View> */}
      </View>
     
     </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  gridItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical:30,
    alignItems: 'center',
    width: '45%',
    marginBottom: 20,
   
    borderWidth:1,
    borderColor:Color.borderColor
  },
  gridItemFull: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    
    borderWidth:1,
    borderColor:Color.borderColor,
    alignSelf:'center'
    
  },
  gridItemText: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '500',
    lineHeight:19.5,
    fontFamily:FontFamily.poppinsRegular,
    color:Color.gray
    
  },
  protectedContainer: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,

   
    borderWidth:1,
    borderColor:Color.borderColor,
  },
  protectedTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight:24,
    fontFamily:FontFamily.poppinsRegular,
    color:Color.gray,marginTop:30
  
  },
  protectedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  activeLabel: {
    color: '#fff',
    fontWeight: '400',
    marginRight: 10,
    backgroundColor:Color.appDefaultColor,
    width:50,
    textAlign:'center',
    borderRadius:10,
    fontSize:12
  },
  protectedText: {
    fontSize: 14,
    fontFamily:FontFamily.poppinsRegular,
    fontWeight:'500',
  },
  subTitle:{
    fontSize:12,
    fontFamily:FontFamily.poppinsRegular,
    fontWeight:'400',
    lineHeight:18,
    maxWidth:150
  }
    
  
});

export default SafetyScreen;
