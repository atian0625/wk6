import React from "react";
import { View, FlatList } from "react-native";
import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";
import App from "../../App";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.id}
      />
      
    </View>
  );
};

export default AlbumScreen;