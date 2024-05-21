import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {FullMovie} from '../../../../core/entities/movie.entity';
import {useNavigation} from '@react-navigation/native';
import { globalColors } from '../../../../config/theme/globalTheme';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  movie: FullMovie;
}

export const MovieHeader = ({movie}: Props) => {
  const {height: screenHeight} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: globalColors.background }}>
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        <View style={ styles.imageBorder }>
            <Image
                source={{ uri: movie.poster }}
                style={ styles.posterImage }
            />
        </View>
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.title }>{ movie.title }</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={[styles.voteText, { color: (movie.vote_average >= 6) ? 'green' : 'red' }]}>
                { movie.vote_average.toFixed(1) }/10
            </Text>
            <Text style={ styles.voteText }>
                { new Date(movie.realaseDate).getFullYear() }
            </Text>
            <Text style={ styles.voteText }>
                { movie.duration } min
            </Text>
            <Text style={ styles.voteText }>
                { movie.adult ? 'R' : 'PG' }
            </Text>
            <Text style={ styles.voteText }>
                HD
            </Text>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 10,
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },

  voteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalColors.gray,
  }
});
