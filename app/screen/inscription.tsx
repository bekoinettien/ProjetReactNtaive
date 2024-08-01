import { StyleSheet, Text, View,Image,TextInput,ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';


const inscription = () => {
  return (
    <View style={styles.general}>
        
    <View style={styles.container}>
      <Image style={styles.image} source={require("@/assets/images/edhec.png")}></Image>
     
        <Text style={styles.textaff}>INSCRIPTION</Text>
          <TextInput style={styles.input}
          placeholder='bekoinettien@gmail.com'> 
          </TextInput>
          <TextInput style={styles.input1}
             placeholder='Nom '> 
          </TextInput>
          <TextInput style={styles.input1}
          placeholder='Mot de passe'> 
          </TextInput>
          <TextInput style={styles.input1}
          placeholder='Confirmation'> 
          </TextInput>
          <TextInput style={styles.input1}
          placeholder='Fonction'> 
          </TextInput>
          <Link href="/screen/connexion" style={styles.link}>Inscription</Link>
          
          </View>
              
          
    </View>
  )
}

export default inscription

const styles = StyleSheet.create({
  general:{
    backgroundColor:'blue',
    borderBottomStartRadius:30,
    borderBottomEndRadius:30,
  },
  container:{
    height:100,
    width:80,
    alignItems:'center',
    justifyContent:'center',

  },
  image:{
      height: "100%",
      width:100,
      alignContent:"center",
      justifyContent:"center",
      marginTop:550,
      marginLeft: 250,
      borderRadius:50,
      

  },
  input:{
    borderRadius:20,
    elevation: 5,
    alignContent:'center',
    width:300,
    height:40,
    backgroundColor:"#fff",
    marginLeft:280,
    paddingLeft:50,
    fontSize:20,
    justifyContent:'center',
    marginTop:18,
    
  },
  input1:{
    borderRadius:20,
    elevation: 5,
    alignContent:'center',
    width:300,
    height:40,
    fontSize:20,
    backgroundColor:"#fff",
    marginLeft:280,
    paddingLeft:50,
    justifyContent:'center',
    marginTop:18,
  },
  textaff:{
    marginTop:30 ,
    fontSize:20,
    color:'#000',
    alignContent:'center',
    justifyContent:'center',
    width:300,
    height:30,
    
    marginLeft:300,
    textAlign:'center',
  },
 
  link:{
    width:150,
    height:40,
    borderRadius: 40,
    color:'#fff',
    backgroundColor:'blue',
    alignContent:'center',
    justifyContent:"center",
    marginLeft:250,
    marginTop: 30,
    fontSize:25,
    textAlign:'center'
    
  }
})