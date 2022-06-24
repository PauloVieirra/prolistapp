import React, {useContext} from 'react';
import { View, Image, Text,TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Services/contexs/auth';
import styles from './styled';

export default function Profileuser() {

   const {user, signOut} = useContext(AuthContext);

  function handleout(){
    signOut(signOut);
  }

 return (
   <View style={styles.container}>
      <View style={styles.contsup}>
     
       <Image source={require('../../assets/Kevin.png')} style={styles.imgprof}/>
    </View>
    <View style={styles.contsub}>
    <TouchableOpacity style={styles.contlogout} onPress={handleout}>
       <Text style={{fontSize:18, fontWeight:'bold',color:'#fff:rgba(0,0,0,0.6)',}}>SAIR</Text>
        </TouchableOpacity>
            <View style={styles.contsubint}>
                <View style={styles.contdados}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>{user && user.nome}</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>{user && user.email}</Text>
                </View>
                <View style={styles.contdados}>
                    <Text>123</Text>
                </View>
            </View>
            <View style={styles.contprotx}>
                   <Text>ajshjasakjskajslkajklsjaljslajlsjalkjslakjslakjslakjslkajlk
                   ajshjasakjskajslkajklsjaljslajlsjalkjslakjslakjslakjslkajlk
                   ajshjasakjskajslkajklsjaljslajlsjalkjslakjslakjslakjslkajlk
                   ajshjasakjskajslkajklsjaljslajlsjalkjslakjslakjslakjslkajlk
                   ajshjasakjskajslkajklsjaljslajlsjalkjslakjslakjslakjslkajlk
                   </Text>
            </View>
            <View style={styles.contpro}>
                <TouchableOpacity style={styles.btnpro}><Text style={{fontSize:18, fontWeight:'bold'}}>Seja Premium</Text></TouchableOpacity>
                </View>
     </View>
   </View>
  );
}