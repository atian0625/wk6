import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import albumData from "../json/albums.json";
import DetailDetail from "../components/DetailDetail";

const DetailScreen = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <FlatList
      data={albumData.detailList}
      renderItem={({ item }) => 
      <DetailDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      /> 

      <View style={styles.tabbottom}>
            <Image
                source={{uri :"https://i.imgur.com/ip54n0g.png"}}
                style={styles.camera}
            />
            <Text style={styles.text}>相機</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbottom:{
    flexDirection:"row",
    justifyContent:"flex-start",
    backgroundColor:'#FBFCFC',
    height:50,
    width:375,
    paddingLeft:140,
    paddingTop:13,

},
camera:{
    width:25,
    height:22
},
text:{
  color:'#56B1F4',
  marginLeft:12,
  marginTop:3,
  fontSize:16

}
  
});



export default DetailScreen;