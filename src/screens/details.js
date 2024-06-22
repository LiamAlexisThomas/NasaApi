import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Layout from "./layout";
import { useRoute } from "@react-navigation/native";

export default Detalle = ({ navigation }) => {
  const {
    params: { url, title, desc, date },
  } = useRoute();

  return (
    <Layout>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ color: "white" }}>{date}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.img}/>
      </View>
      <ScrollView style={{ marginVertical: 10, height: "100%" }}>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 8,
  },
  desc: {
    color: "white",
    fontSize: 15,
    textAlign: "justify",
  },
  img: {
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
  },
  descContainer: {
    paddingTop: 15,
    height: "100%",
  },
  imageContainer: {
    height: 350,
  },
});
