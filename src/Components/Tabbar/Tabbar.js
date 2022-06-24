import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import styles from './styled';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Tabbar() {
    const navigation = useNavigation();

    const handlegohome =() => {
        navigation.navigate('Home');
    }
    const handlegouser =() => {
        navigation.navigate('Profileuser');
    }

    const handlegoteam =() => {
        navigation.navigate('Stolk');
    }

    return (
        <View style={styles.conttabbar}>
            <LinearGradient
                colors={['rgba(10,13,13,0.8)', 'rgba(10,12,12,0.6)', 'rgba(10,13,13,0.8)']}
                style={styles.conttabbarlin}
                start={{ x: 1.0, y: 0.1 }}
                end={{ x: 0.1, y: 1.9 }}
            >
                <TouchableOpacity style={styles.tabint} onPress={handlegohome} >
                    <Ionicons name="basketball" size={35} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint} onPress={handlegoteam} >
                <Octicons name="feed-heart" size={35} color="white" />
                </TouchableOpacity>

                <View style={styles.tabint}>
                    <MaterialCommunityIcons name="weight-kilogram" size={35} color="white" />
                </View>
                
                <TouchableOpacity style={styles.tabint} onPress={handlegouser} >
                <Ionicons name="person-circle-sharp" size={35} color="white" />
                </TouchableOpacity>
              
            </LinearGradient>

        </View>
    );
}