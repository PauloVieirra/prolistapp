import React from 'react';
import { View,TouchableOpacity, ScrollView,Image } from 'react-native';
import styles from './styled';
import { LinearGradient } from 'expo-linear-gradient';

export default function Selos() {
 
    return (
        <View style={styles.conttabbar}>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            <LinearGradient
                colors={['rgba(10,13,13,0.8)', 'rgba(10,12,12,0.6)', 'rgba(10,13,13,0.8)']}
                style={styles.conttabbarlin}
                start={{ x: 1.0, y: 0.1 }}
                end={{ x: 0.1, y: 1.9 }}
            >
                <TouchableOpacity style={styles.tabint}  >
                    <Image source={require('../../../assets/m1.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                     <Image source={require('../../../assets/m2.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                        <Image source={require('../../../assets/m3.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                         <Image source={require('../../../assets/m4.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                           <Image source={require('../../../assets/m5.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                           <Image source={require('../../../assets/m6.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                            <Image source={require('../../../assets/m7.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                             <Image source={require('../../../assets/m8.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabint}  >
                             <Image source={require('../../../assets/m9.fw.png')} style={styles.imgselos}/>
                </TouchableOpacity>
               
            </LinearGradient>
            </ScrollView>
        </View>
    );
}