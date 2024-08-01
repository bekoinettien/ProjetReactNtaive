import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const {container,textstyle,tiles} =Styles
  return ( 
    <ScrollView>
      {[1,2,3,4,5].map((item)=>(
        <View key={item} style={container}>
            <Text style={textstyle}>category {item}</Text>
           <ScrollView horizontal={true}>
              {[1,2,3,4,5,6].map((tile)=>(
                <View style={tiles}>
                 <Text style={textstyle}>titre {tile}</Text>
                </View>
             ))}
       
            </ScrollView>
        </View>
      ))}
    </ScrollView>
    
  );
  
};
const Styles = StyleSheet.create({
  container:{
     backgroundColor:'#ddd',
     marginBottom:5,
     height:300,
     padding:10,
     marginTop:5,
  },
  textstyle:{
    fontSize:30,
    color:'#000', 
    marginTop:10,
  }, 
  tiles:{
    width:150,
    height:100,
    backgroundColor:'orange',
    marginRight:5,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10,

  }
})


