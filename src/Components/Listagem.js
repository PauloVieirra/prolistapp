import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styled';




export default function Listagem({data}){
 return (
  <View style={styles.viewplayer}>

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
</View>
  );
}