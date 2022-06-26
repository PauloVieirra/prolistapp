import React from 'react';
import { View, Text, TouchableOpacity, Animated,Dimensions } from 'react-native';
import styles from './styled';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.7;
const SPACING_FOR_CARD_INSET = width * 0.1 -10;

export default function SignCont() {

  const _scrollView = React.useRef(null);
  const navigation = useNavigation();



  return (
    <View style={styles.container}>

      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{ // iOS only
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
        }}
       >


        <View  style={styles.viewsub}>
         
           <View style={styles.cont}>
            <TouchableOpacity style={styles.viewsubint} onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ color: "#fff" }}>Cadastro</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.cont}>
            <TouchableOpacity style={styles.viewsubint} onPress={() => navigation.navigate('Upteam')}>
              <Text style={{ color: "#fff" }}>Cadastro de Equipes</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.cont}>
            <TouchableOpacity style={styles.viewsubint} onPress={() => navigation.navigate('Upfisicalpro')}>
              <Text style={{ color: "#fff" }}>Cadastro de Proffisionais</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.cont}>
            <TouchableOpacity style={styles.viewsubint} onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ color: "#fff" }}>Patrocinadores</Text>
            </TouchableOpacity>
            </View>
      

        </View>

      </Animated.ScrollView>





    </View>




  );
}