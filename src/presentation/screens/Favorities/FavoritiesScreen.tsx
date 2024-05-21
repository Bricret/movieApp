import { Text, View } from "react-native"
import { globalTheme, globalColors } from "../../../config/theme/globalTheme"

export const FavoritiesScreen = () => {
  return (
    <View style={[
      globalTheme.container, {
        backgroundColor: globalColors.background
      }]}>
        <Text>FavoritiesScreen</Text>
    </View>
  )
}
