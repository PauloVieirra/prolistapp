import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import firebase from '../Services/firebaseConnection';
import Listagem from './Listagem';



export default function components() {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {

        async function dados(){

          await firebase.database().ref('players').on('value', (snapshot)=> {
            
            setUsuarios([]);
            
            snapshot.forEach((chilItem) => {
              let data = {
                key: chilItem.key,
                nome: chilItem.val().nome,
                assit: chilItem.val().assit,
                pts: chilItem.val().pts,
                fall: chilItem.val().fall,
              };

              setUsuarios(oldArray => [...oldArray, data]);
              console.log(data);
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
                    renderItem={ ({item}) => ( <Listagem data={item} /> )  }
                    />
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