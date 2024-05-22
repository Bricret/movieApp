import { View } from "react-native"
import { ActivityIndicator, Text } from "react-native-paper"
import { globalColors } from '../../../config/theme/globalTheme';



export const FullScreenLoaders = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: globalColors.background  }}>
        <Text style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'indigo',
            marginBottom: 10
        }}>
            Cargando...
        </Text>
        <ActivityIndicator size='large' color={ 'indigo' } />
    </View>
  )
}
