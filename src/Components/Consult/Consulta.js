import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import Listagem from './Listagem';



export default function Consulta() {
  const [nome, setNome] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(()=> {

    async function dados(){

      await firebase.database().ref('usuarios').on('value', (snapshot)=> {
       
        snapshot.forEach((chilItem) => {
          let data = {
            key:chilItem.key,
            nome:chilItem.val.nome
          };
          setUsuarios([...usuarios, data])
        })    


        })


      }
      dados();
    
      }, []);
    
    return (
      <View style={styles.container}>
           <FlatList
        keyExtractor={item => item.key}
        data={usuarios}
        renderItem={ ({item}) => ( <Listagem data={item} /> )  }/>
        
      </View>
    );
  }

const styles = StyleSheet.create({
   container:{
    width:"96%",
    height:"100%",
    padding:2, 
    margin:6,
   },
   containImg:{
       width:90,
       height:90,
       borderRadius:22,
       backgroundColor:"#eee"
   },
   containInfo:{
       marginLeft:5,
       borderRadius:22,
       backgroundColor:"#eee"
   }
});