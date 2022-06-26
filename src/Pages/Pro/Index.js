import React, {useContext} from 'react';
import { View, Image, Text,TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Services/contexs/auth';
import Consulta from '../../Components/Consulpro/Consulta';
import styles from './styled';

export default function Pro() {

   const {user, signOut} = useContext(AuthContext);

  function handleout(){
    signOut(signOut);
  }

 return (
   <View style={styles.container}>
      <View style={styles.contsup}>
     
      
    </View>
    <View style={styles.contsub}>
             <Consulta/>
     </View>
   </View>
  );
}