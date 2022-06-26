import React, { useState } from 'react';
import { View, Text, Modal, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styled';

export default function Listagem({ data }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handlemodal = () => {
    setModalVisible(true, {
      key: data.key,
      nome: data.nome,
    });
  }

  return (<>

    <Pressable style={styles.viewplayer} onPress={() => handlemodal(true)}>
      <LinearGradient
        colors={['rgba(63,73,109,0.5)', 'rgba(65,75,110,0.5)', 'rgba(41,48,76,0.5)']}
        style={styles.linearGradient}
        start={{ x: 1.0, y: 0.1 }}
        end={{ x: 1.0, y: 1.0 }}
      >

        <View style={styles.modalViewone}>
          <View style={styles.contviewphott}>
                   <Image source={require('../../assets/Rond.jpg')} style={styles.contviewphott}/>
          </View>
        </View>
        <View style={styles.modalViewthow}>

          <View style={styles.conint}>
            <Text style={{fontSize:24}}>{data.nome}</Text>
          </View>
          <View style={styles.conintcont}>
            <Text style={styles.conintcont}>Preparador fisico</Text>
          </View>
          <View style={styles.conintcont}>
            <Text style={styles.conintcont}>Condicionamento - Musculacao </Text>
          </View>


        </View>








      </LinearGradient>
    </Pressable>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          <View style={styles.modalViewPhoto}>
            <Image source={require('../../assets/tibulogo.png')}></Image>
          </View>
          <View style={styles.modalViewDados}>
            <Text style={styles.modalText}>{data.nome}</Text>
            <Text>Cidade - Bairro - Numero</Text>
            <Text>Telefone</Text>
            <Text></Text>
            <Text>dgfdfgdfhgdfghdgdfgdfdfgdfgdfgsdgfsdfgdsflgakdsgflajlksdjflkjalksjdlfjakljdslkfjalksjdlkfjalkjsdlkfjlakjslkdjflkajdslkdfalsdjfljalksjdlkfjalskdjflkajsdlkjflakjsdlfkjalskdjdflkgjlskjdflgkjsldfkjglkdnasfibvjaofdslgjlkafdsjglkjsldfkjglkjdsflkgjsldkjgflkjfdslgjlksdjflgj</Text>
          </View>










          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  </>
  );
}