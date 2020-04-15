import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const DetailDetail = ({ album }) => {
   return (
    
    <View style={styles.al}>

     <View style={[styles.on, styles.ba]}>
 

          <Image
            style={styles.pic}
            source={{uri: album.pic}}/>

        <View style={styles.Ca}>
        
        <Image
            style={styles.point}
            source={{uri: album.point}}/>

          <Image
            style={styles.camera}
            source={{uri: album.camera}}/>

        </View>
        <View style={styles.Text}>
            <Text style={styles.name}>{album.name}</Text>
            <Text style={styles.pa}>{album.pa}</Text>
            <Text style={styles.pb}>{album.pb}</Text>
        </View>
        <View>  
         <Image
            style={styles.searchbar}
            source={{uri: album.search}}/>
        </View>

     </View>
    </View>

  )};

const styles = StyleSheet.create({
    
  searchbar:{
   flexDirection:"row",
   justifyContent: "flex-start",
    width:350,
    height:35,
    marginTop:25,
    marginLeft:-68
    
  },

  on: {
    flexDirection: "row",
    justifyContent: "flex-start",
    
  },
  pic: {
    height: 60,
    width: 60,
    margin: 5,
  },
  

  al: {
    flexDirection:"column",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FFF"
  },
  ba: {
    padding: 5,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderBottomWidth: 1
  },
  srh:{
    marginLeft: 8,
    marginTop: 8,
    width:350,
    height:35
  },
  point:{
    width:8,
    height:8,
    marginLeft:228,
    marginTop:30

  },
  camera:{
      width:28,
      height:28,
      marginLeft:250,
      marginTop:-18

  },

  Text: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft:-270,
  },
  name:{
    //fontWeight:"bold",
    fontSize:15
    },
  pa:{
      marginTop:-20,
      fontSize:15,

      color:"#A9AAAA"
  },
  pb:{
    marginTop:-40,
    fontSize:15,

    color:"black"
}
});

export default DetailDetail;