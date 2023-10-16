import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import Button from "./button";

const Header = ({ onListPress, onArticlePress, drawer }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
        {/* <Image
          source={require("../assets/menu.png")}
          style={{ width: 18, height: 18 }}
        /> */}
      </TouchableOpacity>
      <View>
        <View style={styles.iconsView}>
          <Image
            source={require("../assets/facebook.png")}
            style={styles.icons}
          />
          <Image
            source={require("../assets/youtube.png")}
            style={styles.icons}
          />
          <Image
            source={require("../assets/twitter.png")}
            style={styles.icons}
          />
          <Image
            source={require("../assets/search.png")}
            style={styles.icons}
          />
        </View>
      </View>
      <View style={styles.buttonsView}>
        <Button text="List" onPress={onListPress} />
        <Button text="Article" onPress={onArticlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AA0002",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 35,
  },
  iconsView: {
    flexDirection: "row",
  },
  icons: {
    width: 36,
    height: 16,
    resizeMode: "contain",
    marginRight: 10,
  },
  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14, // Ubah ukuran teks di sini
  },
  drawerButton: {
    marginLeft: 10,
  },
});

export default Header;
