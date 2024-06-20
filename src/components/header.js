import { Text, Image, View, StyleSheet } from "react-native"
import TextWhite from "./textWhite"

export default Header = (props) => {
    const {texto , url} = props

    return(
        <View>
            <TextWhite texto = {texto} size = {20} />
            <Image style = {styles.img} source={require('../../assets/IMAGENES/NASA_logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    }
})