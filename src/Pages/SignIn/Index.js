import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../Services/contexs/auth';
import { LinearGradient } from 'expo-linear-gradient';
import {Background,
   Container,
   TextLogin,
    AreaInput,
     Input,
     AreRecovUp,
     RecoveryText, 
     SingUpText,
     Logo,
     BtnLogin,
     CadText} from './styled';



export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }
 
 return (
   <Background>
        <LinearGradient
          colors={['#1D1D38', '#1D1D25', '#1D1D25' ]}
          style={{flex:1}}
          start={{ x: 1.2, y: 0.5 }}
          end={{ x: 0.5, y: 1.8 }}
        >
       <Container>
      
            
            
  
           <AreaInput>
           <Input
           placeholder="E-mail"
           autoCorrect={false}
           autoCapitalize="none"
           value={email}
           onChangeText={(text) => setEmail(text)}
           />
           </AreaInput>

           <AreaInput>
           <Input
           placeholder="Senha"
           autoCorrect={false}
           autoCapitalize="none"
           value={password}
           onChangeText={(text) => setPassword(text)}
           secureTextEntry={true}
           />
           </AreaInput>

           <BtnLogin>
             <TextLogin onPress={handleLogin}>Login</TextLogin>
           </BtnLogin>

           <AreRecovUp>
             <CadText onPress={() => navigation.navigate('SignCont')}>
             <SingUpText>Criar minha conta</SingUpText>
             </CadText>
             <RecoveryText onPress={() => navigation.navigate('Recovery')}>
             <SingUpText>Não consigo entrar</SingUpText>
             </RecoveryText>
           </AreRecovUp>
                  

                 
       </Container>
       </LinearGradient>
   </Background>
  );
}