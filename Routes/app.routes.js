import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Home from "../src/Pages/Home/Index";
import Pageplayer from "../src/Pages/Pageplayer/Index"
import Profileuser from "../src/Pages/Profileuser/Index";
import Stolk from "../src/Pages/Stolk/Index";


const AppStack = createStackNavigator();

function AppRoutes(){
    return(
      
       <AppStack.Navigator>
        
           <AppStack.Screen name="Home" component={Home}options={{headerShown: false}}/>
           <AppStack.Screen name="Pageplayer" component={Pageplayer}options={{headerShown: false}}/>
           <AppStack.Screen name="Profileuser" component={Profileuser}options={{headerShown: false}}/>
           <AppStack.Screen name="Stolk" component={Stolk}options={{headerShown: false}}/>

           
       </AppStack.Navigator>
     
    );
}

export default AppRoutes;