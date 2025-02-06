import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { Styles } from '../styles/GlobalStyles';

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
}