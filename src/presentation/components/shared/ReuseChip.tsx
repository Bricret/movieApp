import {Chip} from 'react-native-paper';
import { globalColors, globalTheme } from '../../../config/theme/globalTheme';

interface Props {
    styles?: Record<string, unknown>;
    label: string;
}

export const ReuseChip = ({ styles, label }: Props) => (
  <Chip 
    style={[{
        backgroundColor: globalColors.secondary,
        borderRadius: 20,
        marginRight: 15,
    }, styles]}
    textStyle={{ color: 'white', fontSize: 16, fontWeight: 400}}
   >
    {label}
</Chip>
);
