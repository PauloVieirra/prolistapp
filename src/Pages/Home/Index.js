import React from 'react';
import { View, Text,ScrollView, StyleSheet } from 'react-native';
import styles from './styled';
import Motoristas from '../../Components/Motoristas';


export default function Home() {

 


    return (

        <View style={styles.container}>

            <View style={styles.viewsup}>
           
              
           
              </View>

            <View style={styles.viewsub}>
            
            <Motoristas/>
            </View>

        </View>

    );
}