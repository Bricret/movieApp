import Icon from 'react-native-vector-icons/Ionicons';

interface useIconsProps {
    iconName: string;
    size?:     number;
    color?:    string;
}

export const ReuseIcons = ( { color = '#000', size = 24, iconName }: useIconsProps ) => {
  return (
    <Icon
      name={iconName}
      size={size}
      color={color}
    />
  )
}
