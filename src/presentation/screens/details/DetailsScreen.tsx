import { useRoute } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text, View } from "react-native"
import { RootStackParam } from "../../navigation/StackNavigation"
import { useMovie } from "../../hooks/useMovie"

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params

  const movie = useMovie( movieId )

  return (
    <View>
        <Text>
            Details Screen
        </Text>
    </View>
  )
}
