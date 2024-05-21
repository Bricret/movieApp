import {View, Image, useWindowDimensions} from 'react-native';
import {ReuseIcons} from '../../../config/Icons/ReuseIcon';
import {globalColors} from '../../../config/theme/globalTheme';
import {Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { Movie } from '../../../core/entities/movie.entity';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParam } from '../../navigation/StackNavigation';

export const TopPrincipalMovie = ({ movie }: { movie: Movie }) => {

  const { height: screenHeight } = useWindowDimensions();

  const navigation = useNavigation<NavigationProp<RootStackParam>>();

  return (
    <>
      <View
        style={{
          height: screenHeight * 0.7,
          position: 'relative',
        }}>
        <Image
          source={{ uri: movie.poster }}
          style={{flex: 1
          }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(23, 23, 25, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </View>
      <Button
        icon={() => <ReuseIcons iconName="play" color="white" size={18} />}
        mode="contained"
        style={{
          backgroundColor: globalColors.secondary,
          width: 120,
          alignSelf: 'center',
          marginBottom: 30,
        }}
        labelStyle={{fontSize: 16}}
        onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      >
        Ver mas
      </Button>
    </>
  );
};
