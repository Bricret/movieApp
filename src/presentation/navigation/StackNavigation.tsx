import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { HeaderBottomNavigation } from '../components';

export type RootStackParam = {
    Home: undefined;
    Details: { movieId: number };
}

const Stack = createStackNavigator<RootStackParam>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        header: () => (
          <HeaderBottomNavigation />
        ),
        headerTransparent: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" options={{ headerShown: false }} component={DetailsScreen} />
    </Stack.Navigator>
  );
}