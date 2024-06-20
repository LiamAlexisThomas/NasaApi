import {View , StyleSheet} from "react-native"
import { primaryColor } from "../constants/colors"

export default Layout = ({children}) => {
    return <SafeAreaView style={styles.container}>
        <View style={{paddingTop : plataform.OS === "android" && 30}}>{children}</View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container : {backgroundColor : primaryColor , flex : 1 , paddingHorizontal : 15} 
})
