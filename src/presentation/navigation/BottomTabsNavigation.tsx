import { BottomNavigation, Text } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavoritiesScreen, SaveScreen } from '../screens';
import { globalColors } from '../../config/theme/globalTheme';
import { HeaderBottomNavigation } from '../components';
import { ReuseIcons } from '../../config/Icons/ReuseIcon';
import { StackNavigation } from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
        style={{ backgroundColor: globalColors.background }}
        activeColor={globalColors.white}
        inactiveColor={globalColors.secondary}
        navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          renderLabel={({ route, color }) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: color,
                textAlign: 'center',
              }}>
              {route.name}
            </Text>
          )}
        />
      )}      
    >
      <Tab.Screen
        name="Movies"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({ color, size, focused }) => {
            return <ReuseIcons color={ focused ? 'black' : color} size={size} iconName="videocam" />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritiesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size, focused }) => {
            return <ReuseIcons color={ focused ? 'black' : color} size={size} iconName="heart" />;
          },
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={SaveScreen}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ color, size, focused }) => {
            return <ReuseIcons color={ focused ? 'black' : color} size={size} iconName="download" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
