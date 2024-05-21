import { useRoute } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"
import { Text, View } from "react-native"
import { RootStackParam } from "../../navigation/StackNavigation"
import { useMovie } from "../../hooks/useMovie"
import { MovieHeader } from "../../components/movies/movie/MovieHeader"

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params

  const { movie, isLoading } = useMovie( movieId )

  if ( isLoading ) return <Text>Loading...</Text>

  return (
    <View>

      <MovieHeader movie={ movie! } />
    </View>
  )
}

