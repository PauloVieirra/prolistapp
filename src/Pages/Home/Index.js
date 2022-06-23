import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import styles from './styled';
import Motoristas from '../../Components/Motoristas';
import Tabbar from '../../Components/Tabbar/Tabbar';
import { LinearGradient } from 'expo-linear-gradient';
import { Video, AVPlaybackStatus } from 'expo-av';


export default function Home() {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.viewsup}>
                <Video
                    style={styles.video}
                    source={require("../../assets/istockphoto.mp4")}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                />

                <View style={styles.anaunce}>
                    <LinearGradient
                        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.6)']}
                        style={styles.anaunce}
                        start={{ x: 1.2, y: 0.1 }}
                        end={{ x: 0.1, y: 1.4 }}
                    >
                        <View style={styles.context}>
                            <Text style={styles.texteanounce}>PRO</Text>
                            <Text style={styles.texteanouncethow}>LISTED</Text>
                        </View>

                    </LinearGradient>
                </View>
            </View>


            <View style={styles.viewsub}>

                <Motoristas />
            </View>

       
            <Tabbar/>

        </SafeAreaView>

    );
}