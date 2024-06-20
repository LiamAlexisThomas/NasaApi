import { Text , View, StyleSheet, TouchableOpacity} from "react-native";
import {Audio} from "expo-av";

export default boton = (props) => {
  const handleComenzar = () =>{
    setActivo(!activo);
    playSonido() 
  }
  
  const playSonido = async () => {
    const {sound} = await Audio.Sound.createAsync(
      require("../../assets/Audios/click.mp3")
    );
    await sound.playAsync();
  }

  const {activo, setActivo} = props

    return (
        <TouchableOpacity style={style.boton} onPress={()=>handleComenzar()} >
          <Text style={style.texto} >{activo ? "Detener" : "Empezar"}</Text>
        </TouchableOpacity>
      );
}

const style = StyleSheet.create({
  boton: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {

  },

})