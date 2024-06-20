import { Text , TouchableOpacity, View , StyleSheet} from "react-native";

export default tabs = (props) => {
    const {seleccion, setSeleccion, setTiempo, setActivo, activo} = props;
    const opciones = ["Pomodoro" ,  "Descanso" , "Descancito"];

    const handlePress=(index)=>{
        setSeleccion(index);
                            // el "index === 0 ? 25" es un if
        const nuevotiempo =  index === 0 ? 25 : index === 1 ? 10 : 5;
        setTiempo(nuevotiempo * 60);
        setActivo(false);
    };


    return (
        <View style = {{flexDirection: 'row'}}>
            {opciones.map((item , index) => (
                <TouchableOpacity key = {index} style = {[styles.boton, seleccion!== index && {borderColor: "transparent"}]} onPress={()=> handlePress(index)}>
                    <Text>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))} 
        </View>
      );
};

const styles = StyleSheet.create({
    boton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        padding: 10,
        margin: 5,
        alignItems: center,
    }
})