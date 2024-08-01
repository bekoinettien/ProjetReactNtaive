import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import { TouchableOpacity } from 'react-native-gesture-handler'

const connexion = () => {
  return (
    <View style={styles.general}>
        <Text style={styles.textaff}>WELCOME</Text>
    <View style={styles.container}>
              

     
      <Image style={styles.image} source={require("@/assets/images/edhec.png")}></Image>
          <TextInput style={styles.input}
          placeholder='bekoinettien@gmail.com'> 
          </TextInput>
          <TextInput style={styles.input1}
          placeholder='Mot de passe'> 
          </TextInput>
          <View style={styles.btn}>
          <Link href="/Accueil" style={styles.link}>Se Connecter</Link>
          
          <Link href="/screen/inscription" style={styles.link2}>Inscription</Link>
          </View>
          
          </View>
            
          
    </View>
  )
}

export default connexion

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
      marginTop:320,
      marginLeft: 250,
      borderRadius:50,
      

  },
  input:{
    borderRadius:20,
    elevation: 5,
    alignContent:'center',
    width:300,
    height:50,
    backgroundColor:"#fff",
    marginLeft:280,
    paddingLeft:50,
    fontSize:20,
    justifyContent:'center',
    marginTop:50,
    
  },
  input1:{
    borderRadius:20,
    elevation: 5,
    alignContent:'center',
    width:300,
    height:50,
    fontSize:20,
    backgroundColor:"#fff",
    marginLeft:280,
    paddingLeft:50,
    justifyContent:'center',
    marginTop:20,
  },
  textaff:{
    marginTop:30 ,
    fontSize:60,
    color:'#fff',
    alignContent:'center',
    justifyContent:'center',
    marginLeft:35,
  },
  btn:{
    
    flexDirection:'row',
  },
  link:{
    width:170,
    height:40,
    borderRadius: 40,
    color:'#fff',
    backgroundColor:'blue',
    alignContent:'center',
    justifyContent:"center",
    marginLeft:370,
    marginTop: 40,
    fontSize:25,
    textAlign:'center',
    marginRight:10,
    
  },
  link2:{
    width:150,
    height:40,
    borderRadius: 40,
    color:'#fff',
    backgroundColor:'blue',
    alignContent:'center',
    justifyContent:"center",
    marginRight:100,
    marginTop: 40,
    fontSize:25,
    textAlign:'center',
    marginLeft:10,
    
  }
})