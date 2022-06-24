import React, {useContext, useState} from 'react';
import { View, Image, Text,Modal, Pressable } from 'react-native';
import { AuthContext } from '../../Services/contexs/auth';
import Consulta from '../../Components/Consult/Consulta';

import styles from './styled';

export default function Stolk() {

   const {user} = useContext(AuthContext);
   
 return (
   <View style={styles.container}>
      <View style={styles.contsup}>
      <View style={styles.contsubint}>
               
                <Text style={{fontSize:20, fontWeight:'bold', margin:25}}>
                 Oi {user && user.nome} <Text style={{fontSize:16}}>aqui você pode visualizar os Times, Clubes e 
                Projetos que seguem nossa lista de atletas.</Text> </Text>
             
               
            </View>
       
    </View>
    <View style={styles.contsub}>
   
            
            <View style={styles.contprotx}>
                  <Consulta/>
            </View>
               
     </View>
    
   </View>
  );
}