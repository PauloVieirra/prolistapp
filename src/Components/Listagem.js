import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styled';




export default function Listagem({data}){
  const navigation = useNavigation();

  const handleopenplay =() => {
    navigation.navigate('Pageplayer',{
       key:data.key,
       nome:data.nome,
       pts:data.pts,
       assit:data.assit,
       fall:data.fall,
       idade:data.idade,
       peso:data.peso,
       estatura:data.estatura,
       cidade:data.cidade,
       position:data.position,
    });
  }
  

 return (
  <TouchableOpacity style={styles.viewplayer} onPress={handleopenplay} >
   

  <View style={styles.viewpone}>
        

      <View style={styles.viewppho}>
          <Image style={styles.viewppho} source={require('../assets/Kevin_Durant.png')}/>
      </View>

      <View style={styles.viewlogo}>
      <Image style={styles.viewlogo} source={require('../assets/nets-logo.png')}/>
      </View>

  </View>
 
  <View style={styles.viewpthow}>

      <View style={styles.viewpgame}>
             <Text style={styles.textgame}></Text>
      </View>

      <View style={styles.viewpname}>
      <Text style={styles.textname}>{data.nome}</Text>
      </View>

      <View style={styles.viewpnow}>
      <Text style={styles.textnow}>PTS:</Text><Text style={styles.textnowg}>{data.pts}</Text>
      <Text style={styles.textnow}>ASST:</Text><Text style={styles.textnowg}>{data.assit}</Text>  
      <Text style={styles.textnow}>FALS:</Text><Text style={styles.textnowg}>{data.fall}</Text>
      </View>

      <View style={styles.viewpnowg}>
      <Text style={styles.textnowg}></Text>
      </View>

 
  </View>
</TouchableOpacity>
  );
}