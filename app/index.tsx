import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/oussama-aouini.jpg";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={Logo} /> */}
      {/* here the first braces indicate a dynamic value the second ones are for the object syntax */}
      <Text style={{ marginTop: 10, marginBottom: 15 }}>Inline syles</Text>
      <Text style={[styles.title, {color: 'red'}]}>mutilpe styles</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
