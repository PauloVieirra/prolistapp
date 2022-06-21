import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "../src/Pages/Home/Index";
import SignIn from "../src/Pages/SignIn/Index";
import SignUp from "../src/Pages/SignUp/Index";
import Motorista from "../src/Pages/Motorista/Index";


const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
      
       <AuthStack.Navigator>

<AuthStack.Screen 
           name="Home" 
           component={Home}
           options={{headerShown: false}}
           />

           <AuthStack.Screen 
           name="Motorista" 
           component={Motorista}
           options={{headerShown: false}}
           />
           
    
          <AuthStack.Screen 
           name="SignIn" 
           component={SignIn}
           options={{headerShown: false}}
           />
           
          <AuthStack.Screen 
           name="SignUp" 
           component={SignUp}
           options={{headerShown: false}}
           />

       </AuthStack.Navigator>
      
    );
}

export default AuthRoutes;
