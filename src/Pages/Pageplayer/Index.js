import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import Selos from '../../Components/Selos/Selos';
import styles from './styled';


export default function Pageplayer() {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    key: route.params.key,
    nome: route.params.nome,
    pts: route.params.pts,
    assit: route.params.assit,
    fall: route.params.fall,
    idade: route.params.idade,
    estatura: route.params.estatura,
    peso: route.params.peso,
    cidade: route.params.cidade,
    position: route.params.position,
  });
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.contsup}>


        <View style={styles.contsupintr}>
          <ImageBackground source={require('../../../assets/Lebron.png')} style={styles.backgroundImage}>

          </ImageBackground>
          <View style={styles.contsupint}>
            <View style={styles.contintbartop}>
              <EvilIcons name="share-google" size={40} color="white" />
            </View>
            <View style={styles.contintbar}></View>
            <View style={styles.contintbar}></View>
            <View style={styles.contintbard}>
              <Text style={styles.texteplayer}>{userInfo.nome}</Text>
              <Text style={styles.texteplayerscorc}>Cid: {userInfo.cidade}   </Text>
              <Text style={styles.texteplayerscorc}>Est: {userInfo.estatura}   </Text>
              <Text style={styles.texteplayerscorc}>Peso: {userInfo.peso}   </Text>
              <Text style={styles.texteplayerscorc}>Nasc: {userInfo.idade}   </Text>
              <Text style={styles.texteplayerscorc}>Posi: {userInfo.position}   </Text>
            </View>
           
            <View style={styles.boxselos}>
              <Selos />
            </View>
          </View>

        </View>

      </View>

      <View style={styles.contsub}>
      <View style={styles.contintflet}>
              <View style={styles.boxviews}>
                <View style={styles.boxint}>
                  <Text style={styles.texteplayerscor}>Ptos: </Text>
                </View>
                <View style={styles.boxint}>
                  <Text style={styles.texteplayerscor}>Asst:   </Text>
                </View>
                <View style={styles.boxint}>
                  <Text style={styles.texteplayerscor}>Asst:   </Text>
                </View>
                <View style={styles.boxint}>
                  <Text style={styles.texteplayerscor}>Fall:  </Text>
                </View></View>
              <View style={styles.boxview}>

                <View style={styles.boxint}>
                  <Text style={styles.boxint}> {userInfo.pts}   </Text>
                </View>
                <View style={styles.boxint}>
                  <Text style={styles.boxint}> {userInfo.assit}  </Text>
                </View>
                <View style={styles.boxint}>
                  <Text style={styles.boxint}> {userInfo.assit}  </Text>
                </View>
                <View style={styles.boxint}>
                  <Text style={styles.boxint}> {userInfo.fall} </Text>
                </View>
              </View>
            </View>
      </View>

    </SafeAreaView>

  );
}