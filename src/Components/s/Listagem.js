import React from 'react';
import { View, Image, Text,FlatList } from 'react-native';
import styles from './styled';

export default function Listagem(){

    return (

        <View style={styles.viewplayer}>
            <Text>{data.nome}</Text>

            <View style={styles.viewpone}>
                  

                <View style={styles.viewppho}>
                    <Image style={styles.viewppho} source={require('../../assets/Kevin_Durant.png')}/>
                </View>

                <View style={styles.viewlogo}>
                <Image style={styles.viewlogo} source={require('../../assets/nets-logo.png')}/>
                </View>

            </View>
           
            <View style={styles.viewpthow}>
          
                <View style={styles.viewpgame}>
                       <Text style={styles.textgame}></Text>
                </View>

                <View style={styles.viewpname}>
                <Text style={styles.textname}>123</Text>
                </View>

                <View style={styles.viewpnow}>
                <Text style={styles.textnow}>PTS:</Text><Text style={styles.textnowg}>123</Text>
                <Text style={styles.textnow}>ASST:</Text><Text style={styles.textnowg}>85</Text>  
                <Text style={styles.textnow}>FALS:</Text><Text style={styles.textnowg}>50</Text>
                </View>

                <View style={styles.viewpnowg}>
                <Text style={styles.textnowg}></Text>
                </View>

           
            </View>
        </View>
        
    );

   
}