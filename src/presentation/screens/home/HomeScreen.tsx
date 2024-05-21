import { ScrollView, Text, View } from "react-native"

import { globalColors } from "../../../config/theme/globalTheme";
import { HorizontalCarousel, TopPrincipalMovie } from "../../components";
import { useMovies } from "../../hooks/useMovies"


export const HomeScreen = () => {

  const { 
    isLoading, nowPlaying, popular, 
    topRated, upComing, popularNextPage, 
    topRatedNextPage, upComingNextPage 
  } = useMovies()

  if (isLoading) return (<Text>Loading...</Text>)

  return (
    <ScrollView style={{ backgroundColor: globalColors.background }}>
    <View style={{ backgroundColor: globalColors.background, flex: 1, position: 'relative' }}>

      <TopPrincipalMovie movie={nowPlaying[0]} />

      <HorizontalCarousel 
        movies={ popular } 
        title="Peliculas Populares" 
        loadNextPage={ popularNextPage }
      />


      <HorizontalCarousel 
        movies={ topRated } 
        title="Mejor Catalogadas"
        loadNextPage={ topRatedNextPage }
      />


      <HorizontalCarousel 
        movies={ upComing }
        title="Proximamente" 
        loadNextPage={ upComingNextPage }
      />
    </View>
    </ScrollView>
  )
}
