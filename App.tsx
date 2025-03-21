import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
        <StatusBar style="auto" />
        {/* <Switch 
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        /> */}
      <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
});
