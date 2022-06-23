import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabbar from './src/Components/Tabbar/Tabbar';
import AuthProvider from './src/Services/contexs/auth';
import firebase from './src/Services/firebaseConnection';

 import Routes from './Routes/index';


export default function App() {
  return (
   
    <NavigationContainer>
        <AuthProvider>
         <Routes/>
         </AuthProvider>
    </NavigationContainer> 
  );
}