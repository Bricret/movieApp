import { Text, View } from "react-native"
import { globalTheme, globalColors } from '../../../../config/theme/globalTheme';
import { FullMovie } from "../../../../core/entities/movie.entity";
import { Chip } from "react-native-paper";
import { ReuseChip } from "../../shared/ReuseChip";
import { ScrollView } from "react-native-gesture-handler";
import { Formatter } from '../../../../config/helpers/formatter';

interface Props {
    movie: FullMovie

}


export const MovieDetails = ({ movie }: Props) => {

    // const genres = movie.genres.join(', ')

  return (
    <View style={{ paddingLeft: 20, paddingTop: 20 }}>

        <Text style={ globalTheme.title }>Historia</Text>
        <Text style={ globalTheme.information }>
            { movie.description }
        </Text>

        <Text style={ globalTheme.title }>Presupuesto</Text>
        <Text style={ globalTheme.information }>
            { Formatter.currency(movie.budget) }
        </Text>

        <Text style={ globalTheme.title }>Géneros</Text>
        <ScrollView horizontal style={{ flexDirection: 'row', marginBottom: 20 }}>
        {
            movie.genres.map( genre => (
                <ReuseChip key={genre} label={genre} />
            ))
        }
        </ScrollView>

        <Text style={ globalTheme.title }>Actores</Text>
    </View>
  )
}
