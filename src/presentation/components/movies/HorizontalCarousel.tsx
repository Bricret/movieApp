import {View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {globalTheme} from '../../../config/theme/globalTheme';
import { MoviePoster } from './MoviePoster';
import { useEffect, useRef } from 'react';

interface Props {
  movies:        Movie[];
  title?:        string;
  loadNextPage?: () => void;
}

export const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {

    const moviesWithoutFirst = movies.slice(1);

    const isLoading = useRef(false)

    useEffect( () => {

        setTimeout(() => {
            isLoading.current = false
        }, 200)

    }, [ movies ])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if ( isLoading.current ) return

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

        const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600 ) >= contentSize.width
        if ( !isEndReached ) return

        isLoading.current = true;

        loadNextPage && loadNextPage()

    }

  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && <Text style={globalTheme.title}>{title}</Text>}

      <FlatList 
        data={ moviesWithoutFirst }
        renderItem={ ({ item }) => (
            <MoviePoster movie={ item } width={140} height={200} />
        ) }
        keyExtractor={ (item, index) => `${item.id}-${index}` }
        horizontal
        showsHorizontalScrollIndicator={ false }
        onScroll={ onScroll }
      />


    </View>
  );
};
