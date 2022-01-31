import React from 'react';
import ProfileScreen from './src/screens/profile.screen';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import {
  useFonts,
  KumbhSans_400Regular,
  KumbhSans_700Bold,
} from '@expo-google-fonts/kumbh-sans';
export default function App() {
  const [fontsLoaded] = useFonts({
    KumbhSans_400Regular,
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
    <ThemeProvider theme ={theme}>
      <ProfileScreen />
    </ThemeProvider>
    </>
  );
}
