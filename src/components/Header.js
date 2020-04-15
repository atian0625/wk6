import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
      <View style={styles.headerStyle}>
       <Image
        style={styles.hl}
        source={{
          uri: album.share1_image
        }}
       />
      </View>
      
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  hl: {
    height: 25,
    width: 25,
    marginLeft: 200,
    marginTop: 18
  }

});

export default Header;