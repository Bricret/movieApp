import { Button } from 'react-native-paper';
import {Alert, Image, Pressable, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { globalColors } from '../../../../config/theme/globalTheme';
import { IconButtons } from '../../shared/IconButtons';
import { ReuseIcons } from '../../../../config/Icons/ReuseIcon';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  MovieHeaderData: {
    title: string;
    poster: string;
    vote_average: number;
    realaseDate: Date;
    duration: number;
    adult: boolean;
  }
}

export const MovieHeader = ( { MovieHeaderData } : Props) => {

  const { title, poster, vote_average, realaseDate, duration, adult } = MovieHeaderData;
  const {height: screenHeight} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: globalColors.background }}>
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        <View style={ styles.imageBorder }>
            <Image
                source={{ uri: poster }}
                style={ styles.posterImage }
            />
        </View>
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.title }>{ title }</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={[styles.voteText, { color: (vote_average >= 6) ? 'green' : 'red' }]}>
                { vote_average.toFixed(1) }/10
            </Text>
            <Text style={ styles.voteText }>
                { new Date(realaseDate).getFullYear() }
            </Text>
            <Text style={ styles.voteText }>
                { duration } min
            </Text>
            <Text style={ styles.voteText }>
                { adult ? 'R' : 'PG' }
            </Text>
            <Text style={ styles.voteText }>
                HD
            </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15,   }}>
          <Button 
            mode='contained'
            icon={ () => <ReuseIcons iconName='play' size={18} color='white' /> }
            style={{ backgroundColor: globalColors.secondary, width: '78%' }}
            labelStyle={{ fontSize: 17 }}
            onPress={() => Alert.alert('Muy pronto', 'Esta funcionalidad estará disponible en la próxima actualización')}   
          >
            <Text>Reproducir</Text>
          </Button>
          <IconButtons iconName='heart' size={25} color='white' />
          <IconButtons 
            iconName='cloud-download-outline' 
            size={25} 
            color='white' 
            styles={{ marginLeft: -2}}
            colorSelected='green'
          />
        </View>
      </View>
        <View style={ styles.backButton }>
          <Pressable onPress={ () => navigation.goBack() }>
            <Text style={ styles.backButtonText }>
              <ReuseIcons iconName='arrow-back-outline' size={30} color={globalColors.gray} />
            </Text>
          </Pressable>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 20,
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
