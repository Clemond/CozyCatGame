import { Image, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Room background */}
      <Image
        source={require("../../assets/images/cozy-cat-background.png")}
        style={{
          width: "100%",
          height: "100%"
        }}
        resizeMode="contain"
      />

      {/* Cat will go here later */}

      {/* Interactive objects will go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8DCC8"
  }
});
