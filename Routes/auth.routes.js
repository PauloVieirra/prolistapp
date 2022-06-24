import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Preload from "../src/Pages/Preload/Index";
import SignIn from "../src/Pages/SignIn/Index";
import SignUp from "../src/Pages/SignUp/index";
import Upteam from "../src/Pages/SignUp/Upteam";
import SignCont from "../src/Pages/SignUp/SignCont";


const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
      
       <AuthStack.Navigator>

<AuthStack.Screen 
           name="Preload" 
           component={Preload}
           options={{headerShown: false}}s
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
            <AuthStack.Screen 
           name="Upteam" 
           component={Upteam}
           options={{headerShown: false}}
           />

<AuthStack.Screen 
           name="SignCont" 
           component={SignCont}
           options={{headerShown: false}}
           />

       </AuthStack.Navigator>
      
    );
}

export default AuthRoutes;
