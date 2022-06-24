import React,{useState} from 'react';
import { View, Text, TouchableOpacity,Modal,Pressable,Image } from 'react-native';
import styles from './styled';

export default function Listagem({ data }){
  const [modalVisible, setModalVisible] = useState(false);

  const handlemodal =() => {
    setModalVisible(true,{
       key:data.key,
       nome:data.nome,
    });
  }

 return (<>
   <TouchableOpacity style={styles.viewplayer} onPress={() => setModalVisible(true)}>
     <Text style={styles.textname}>{data.nome}</Text>
   </TouchableOpacity>
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