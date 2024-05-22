import {Image, Text, View} from 'react-native';
import {globalColors, globalTheme} from '../../../../config/theme/globalTheme';
import {FullMovie} from '../../../../core/entities/movie.entity';
import {ReuseChip} from '../../shared/ReuseChip';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Formatter} from '../../../../config/helpers/formatter';
import {Cast} from '../../../../core/entities/cast.entity';
import { CastCard } from '../cast/CastCard';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <View style={{paddingLeft: 20, paddingTop: 20}}>
      <Text style={globalTheme.title}>Historia</Text>
      <Text style={globalTheme.information}>{movie.description}</Text>

      <Text style={globalTheme.title}>Presupuesto</Text>
      <Text style={globalTheme.information}>
        {Formatter.currency(movie.budget)}
      </Text>

      <Text style={globalTheme.title}>Géneros</Text>
      <ScrollView horizontal style={{flexDirection: 'row', marginBottom: 20}}>
        {movie.genres.map(genre => (
          <ReuseChip key={genre} label={genre} />
        ))}
      </ScrollView>

      <Text style={globalTheme.title}>Actores</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cast}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CastCard item={item} />
        )}
      />
    </View>
  );
};
