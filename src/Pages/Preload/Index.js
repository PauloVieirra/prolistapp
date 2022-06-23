import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styled';

export default function Preload() {
    const navigation = useNavigation();

   
 return (
   <View style={styles.container}>
     <Video
                    style={styles.video}
                    source={require("../../assets/bsk5.mp4")}
                    rate={0.7}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                />
    
    <View style={styles.viewssub}>
    <TouchableOpacity style={styles.btngohome} onPress={() => navigation.navigate('SignIn')}>
    <FontAwesome5 name="basketball-ball" size={40} color="black" />
    </TouchableOpacity>
    </View>
   
   </View>
  );
}