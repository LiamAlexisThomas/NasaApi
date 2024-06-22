import { View, Text } from "react-native";

export default TextWhite = ({ texto, size }) => {
  return (
    <View>
      <Text style={{ color: "white", fontSize: size || 20 }}>{texto}</Text>
    </View>
  );
};