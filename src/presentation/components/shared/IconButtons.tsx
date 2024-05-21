import { useState } from "react";
import { ReuseIcons } from "../../../config/Icons/ReuseIcon"
import { IconButton } from 'react-native-paper'

interface Props {
  iconName: string;
  size?: number;
  color?: string;
  styles?: Record<string, unknown>;
  colorSelected?: string;
}


export const IconButtons = ({ iconName, color = 'white', size = 24, styles, colorSelected = 'red' }: Props) => {

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(!isPressed);
  };

  return (
    <IconButton 
      icon={ () => <ReuseIcons iconName={iconName} size={size} color={isPressed? colorSelected : color} /> }
      onPress={handlePressIn}
      animated
      selected={isPressed}
      style={styles}
    />
  )
}
