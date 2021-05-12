import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';
export default class FbScreen extends React.Component{

  render(){
   
   return(
   <View>
   <Text style={styles.header}>Facebook</Text>
   <TouchableOpacity onPress={()=>
     Linking.openURL("https://www.facebook.com/")
   }>
   <Text style={styles.text}>Facebook</Text>
   </TouchableOpacity>
   </View>

   )

  }

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    textAlign:"center",
    marginTop:200,
    backgroundColor:'cyan',
    fontWeight:'bold',
    fontFamily:'britannic',
    fontSize:20
  },
  header:{
    backgroundColor:'pink',
    textAlign:"center",
    fontWeight:'Bold',
    fontSize:32
}
});