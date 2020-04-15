import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const AlbumDetail = ({ album }) => {
   return (
      <View style={styles.cardContainerStyle}>

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: album.thumbnail_image}}/>

          <View style={styles.headerContentStyle}>
            <Text style={styles.w}>{album.title}</Text>
          </View>
          
          <Image
            style={styles.more}
            source={{uri: album.more}}/>
        </View>

        <View style={styles.cardSectionStyle}>
       
            <Image
              style={styles.imageStyle}
              source={{uri: album.image}}/>

        </View> 

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.like}
            source={{uri: album.likeimg}}/>
          <Image
            style={styles.mas}
            source={{uri: album.masimg}}/>
           <Image
            style={styles.share}
            source={{uri: album.shareimg}}/>
           <Image
            style={styles.sa}
            source={{uri: album.rimg}}/>
        </View>

        <View style={styles.a}>
            <Text style={styles.likes}>{album.likes}</Text>
        </View>
        <View style={styles.b}>
            <Text style={styles.id}>{album.id}</Text>
            <Text style={styles.con}>{album.content}</Text>
        </View>

      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 40,
    width: 40,
    margin: 5
  },
  more: {
    height: 25,
    width: 25,
    marginLeft: 208,
    marginTop: 18
  },
  like: {
    height: 26,
    width: 26,
    marginLeft: 15,
    marginTop: 4
  },

  mas: {
    height: 28,
    width: 28,
    marginLeft: 10,
    marginTop: 4
  },
  share: {
    height: 26,
    width: 26,
    marginLeft: 10,
    marginTop: 4
  },
  sa: {
    height: 26,
    width: 26,
    marginLeft: 210,
    marginTop: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 5,

  },
  cardContainerStyle: {
    flexDirection:"column",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FFF",
    shadowColor: "#FFF",

  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 350,
    width: null
  },
  a:{
    backgroundColor:"#FFF",
    paddingLeft: 20,
    paddingTop:5,
    paddingBottom:5,

  },
  b:{
    flexDirection:"row",
    backgroundColor:"#FFF",
    paddingLeft: 20,
    paddingTop:3,
    paddingBottom:10,

  },
  likes:{
   fontWeight:"bold",
   fontSize:14
    },
    
  id:{
    fontWeight:"bold"
    },
  con:{
    paddingLeft:10,
  }

});

export default AlbumDetail;