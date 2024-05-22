import { Text, View } from "react-native"
import { globalColors } from "../../../config/theme/globalTheme"

export const SaveScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: globalColors.background,
      justifyContent: 'center',
      alignContent: 'center',
    }}>
      <Text style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'indigo',
          marginBottom: 10
      }}>
        Próximamente...
      </Text>
  </View>
  )
}
