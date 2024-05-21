import { View } from "react-native"
import { AvatarImage } from "./AvatarImage"
import { SearchBottom } from "./SearchBotton"


export const HeaderBottomNavigation = () => {
  return (
    <View style={{
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        <AvatarImage />
        <SearchBottom />
      </View>
  )
}
