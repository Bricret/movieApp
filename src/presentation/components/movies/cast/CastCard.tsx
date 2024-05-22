import { View, Image, Text } from "react-native"
import { globalColors } from "../../../../config/theme/globalTheme"
import { Cast } from "../../../../core/entities/cast.entity"

interface Props {
  item: Cast
}

export const CastCard = ({ item }: Props) => {
  return (
    <View
            style={{
              marginRight: 30,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: item.avatar}}
              style={{width: 80, height: 80, borderRadius: 50}}
            />
            <Text
              style={{
                color: 'white',
                paddingTop: 10,
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Text style={{color: globalColors.gray}}>{item.character}</Text>
          </View>
  )
}
