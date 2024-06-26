import { StackScreenProps } from "@react-navigation/stack"
import { ScrollView } from "react-native-gesture-handler"

import { globalColors } from "../../../config/theme/globalTheme"
import { MovieHeader, MovieDetails, FullScreenLoaders } from "../../components"
import { RootStackParam } from "../../navigation/StackNavigation"
import { useMovie } from "../../hooks/useMovie"

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params
  const { movie, isLoading, cast } = useMovie( movieId )
  if ( isLoading ) return <FullScreenLoaders />

  const MovieHeaderData = {
    title: movie!.title,
    poster: movie!.poster,
    vote_average: movie!.vote_average,
    realaseDate: movie!.realaseDate,
    duration: movie!.duration,
    adult: movie!.adult
  }

  return (
    <ScrollView style={{ backgroundColor: globalColors.background }}>

      <MovieHeader MovieHeaderData={MovieHeaderData} />

      <MovieDetails movie={movie!} cast={cast!} />
    </ScrollView>
  )
}

