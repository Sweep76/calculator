import { useContext } from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { Styles } from '../styles/GlobalStyles';

interface ButtonProps {
    onPress: () => void;
    title: string;
    isOrange?: boolean;
    isGray?: boolean;
    isGreen?: boolean;
}

export default function Button({ title, onPress, isOrange, isGreen, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={
                isOrange
                ? Styles.btnOrange
                : isGray
                ? Styles.btnGray
                : theme === 'light'
                ? Styles.btnLight
                : Styles.btnDark
            }
            onPress={onPress}>
            <Text
                style={
                    isOrange || isGray
                    ? Styles.smallTextLight
                    : theme === 'dark'
                    ? Styles.smallTextLight
                    : Styles.smallTextDark
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}