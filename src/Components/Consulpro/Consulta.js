import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import Listagem from './Listagem';



export default function components() {

    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {

        async function dados(){

          await firebase.database().ref('proff').once('value', (snapshot)=> {
            
            setTeam([]);
            
            snapshot.forEach((chilItem) => {
              let data = {
                key: chilItem.key,
                nome: chilItem.val().nome,
              };

              setTeam(oldArray => [...oldArray, data]);
              console.log(data);
            })

          })

        }

        dados();
        
      }, []);
    
 return (
    <View style={styles.container}>
  
        <FlatList style={{flex: 1}}
                    keyExtractor={item => item.key}
                    numColumns={1}
                    data={team}
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
   },
   containInfo:{
       marginLeft:5,
       borderRadius:22,
   }
});