import { StyleSheet, Text , View} from "react-native";

export default visor = ({tiempo}) => {
  const tiempoConFormato = `${Math.floor(tiempo/60)
    .toString()
    .padStart(2, "0")} : ${(tiempo%60)}.toString().padStart(2, "0")};`

    return (
        <View style={styles.contenedor}>
          <Text style={styles.texto}>
            {tiempo}
          </Text>
        </View>
      );
}

  const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#eafa57",
    height: 200,
    margin: 15,
    borderRadius: 10,
    justifyContent: "center", //Centra los objetos de manera horizontal
    alignItems: "center" // Centra los objetos de manera vertical
  },
  texto: {
    fontSize: 70,
    fintWeight: 'bold',
    alignSelf: "center"
  }
})