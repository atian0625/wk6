import React from 'react';
import { StyleSheet,View, FlatList, Image,TouchableOpacity, Linking,Text} from "react-native";
import { NavigationContainer ,StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import albums from './src/json/albums.json';

import { navigationRef } from './RootNavigation';



const Stack = createStackNavigator();

const App = (params) => {
  return (
  
    <NavigationContainer ref={navigationRef}> 
      <Stack.Navigator>
        <Stack.Screen name="ig" component={AlbumScreen} options={{ 
          headerLeft:()=> 
          <Image style={styles.cam} source={require('./src/img/camera.png')}/> ,
          headerTitleImage:()=>
          <Image style={styles.tit} source={require('./src/img/title.png')}/>,
          headerRight:()=> 
        <TouchableOpacity 
           onPress={() => navigationRef.current.navigate("Detail",params)}>
            <Image style={styles.share} source={require('./src/img/share.png')}/>
        </TouchableOpacity>,

        headerTintColor:'#000',
        headerStyle:{backgroundColor:'#fff'},
        headerTitle:(
        <Image style={styles.tit} 
          source={{ uri: albums.albumtitle[0].titleimg}}
           />)
         }}/>

        <Stack.Screen name="Detail" component={DetailScreen} options={{
          headerLeft:()=> 
            <TouchableOpacity 
               onPress={() => navigationRef.current.navigate("ig",params)}>
               <Image style={styles.cam} source={require('./src/img/back.png')}/>
            </TouchableOpacity>,

            
            headerRight: () =>  
            <View style={styles.all}>
            <Image style={styles.ved} source = {require('./src/img/vedio.png')}/>
            <Image style={styles.mes} source= {require('./src/img/message.png')}/>
            </View>,
           title: 'mt_625625',
           headerTintColor: '#000'
           
        }}/>     
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles =  StyleSheet.create({
  tit:{
    width:110,
    height:35,
    left:5,
    top:40
  
  },
  cam:
  {
    width:24,
    height:23,
    left:18
  },
 share:
  {
    width:25,
    height:23,
    right:15
  },
  all:
 {flexDirection:"row",},
  ved:
  {
    width:25,
    height:23,
    right:45
  },
  mes:
  {
    width:25,
    height:25,
    right:25
  }
});

export default App;