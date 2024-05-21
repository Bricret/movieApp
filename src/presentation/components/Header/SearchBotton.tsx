import { Pressable } from "react-native";
import { globalTheme } from '../../../config/theme/globalTheme';
import { ReuseIcons } from "../../../config/Icons/ReuseIcon";


export const SearchBottom = () => (
  <Pressable 
    style={globalTheme.button}
    onPress={() => console.log('PressedSearch')}
  >
      <ReuseIcons iconName="search" size={20} color="white" />
      
  </Pressable>
);

