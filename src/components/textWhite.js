import { Text , View } from "react-native"

export default TextWhite = ({texto, size}) => {
    return (
        <View>
            <Text style = {{color : "white" , fontSize : size || 25}}></Text>
        </View>
    )
}