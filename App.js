import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/Services/firebaseConnection';

 import Routes from './Routes/index';


export default function App() {
  return (
   
    <NavigationContainer>
   
         <Routes/>

    </NavigationContainer> 
  );
}