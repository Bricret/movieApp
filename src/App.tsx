import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { PaperProvider } from 'react-native-paper';
import BottomTabsNavigation from './presentation/navigation/BottomTabsNavigation';

export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabsNavigation />
      </NavigationContainer>
    </PaperProvider>
  )
}
