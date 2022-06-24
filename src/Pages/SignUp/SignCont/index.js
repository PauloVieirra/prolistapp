import React, { useState } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import styles from './styled';

import SignUp from '../index';
import Upfisicalpro from '../Upfisicalpro';
import Upteam from '../Upteam';


export default function SignCont() {

  const [cadUser, setCaduser] = useState('');
  const [cadPro, setCadpro] = useState('1');
  const [cadTeam, setCadteam] = useState('1');

  const showsignin =() => {
    setCadpro('1');
    setCadteam('1');
    setCaduser('');
  }
  const showsphisicalpro =() => {
    setCadteam('1');
    setCaduser('1'); 
    setCadpro('');
  }
  const showupteam =() => {
    setCadpro('1');
    setCaduser('1');
    setCadteam('');
  }

 

  return (
    <View style={styles.container}>

<View style={styles.viewsup}>
      
       
         {!cadUser &&
           <SignUp />
         }
       
       
         {!cadPro &&
           <Upteam />
         }

         {!cadTeam &&
           <Upfisicalpro />
         }

        


      </View>

      <View style={styles.viewsub}>
        <TouchableOpacity style={styles.viewsubint} onPress={showsignin} >
                 <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewsubint} onPress={showsphisicalpro}>
        <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewsubint} onPress={showupteam}>
        <Text>3</Text>
        </TouchableOpacity>
      </View>




    </View>




  );
}