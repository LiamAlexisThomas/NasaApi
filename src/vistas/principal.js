import { Platform, SafeAreaView, View , StyleSheet} from "react-native"
import Tabs from "../componentes/tabs";
import Visor from "../componentes/visor";
import Boton from "../componentes/boton";
import { useEffect, useState } from "react";

export default Principal = ()=> {
    const colores = ["#FA2622", "#7957A", "#57FABD"];

    const [seleccion , setSeleccion] =  useState("P" | "S" | "L");
    const [tiempo, setTiempo] = useState(25*60)
    const [activo, setActivo] = useState(false)
    
    useEffect(() => {
        let interval = null;
        if (activo){
            interval = setInterval(() => {
                setTiempo(tiempo - 1)
            }, 1000)
        } else {
            clearInterval(interval);
        }
        if (tiempo === 0){
            setActivo(false);
            setTiempo(seleccion === 0 ? 1500 : seleccion === 1 ? 300 : 600);
            Alarma()
        }
        return ()  => clearInterval(interval)
    },[tiempo, activo])

    return(
        <SafeAreaView style = {[styles.principal, {backgroundColor: colore[seleccion]} ]}>
            <View style = {{marginTop : Platform.OS === 'android' && 30}}>
                <Tabs seleccion={seleccion} setSeleccion ={setSeleccion} setTiempo={setTiempo} setActivo={setActivo} activo = {activo} />
                <Visor tiempo={tiempo}/>
                <Boton/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    principal : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})