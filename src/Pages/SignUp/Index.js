import React, {useState, useContext} from 'react';
import { AuthContext } from '../../Services/contexs/auth';
import { Platform, ScrollView,Text } from 'react-native';
import {Background,Container,TextLogin,AreaInput, Input,BtnLogin,Containg,ContImgPick} from './styled';
import styles from './SignCont/styled';


export default function SignUp() {

  const [nome,setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ano, setAno] = useState('');
  const [rg, setRg] = useState('');
  const [telefone, setTelefone] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome,ano,telefone, rg);
  }
 
  
 return (
   <Background
   behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
     <>
      <Containg>
        <ContImgPick></ContImgPick>
      </Containg>
     <ScrollView style={{marginTop:20}}>
       <Container>

            

          
  
           <AreaInput>
           <Input
           placeholder="Nome"
           autoCorrect={false}
           autoCapitalize="none"
           value={nome}
           onChangeText={(text) => setNome(text)}
           />
           <Input
           placeholder="E-mail"
           autoCorrect={false}
           autoCapitalize="none"
           value={email}
           onChangeText={(text) => setEmail(text)}
           />
           <Input
           placeholder="Senha"
           autoCorrect={false}
           autoCapitalize="none"
           value={password}
           onChangeText={(text) => setPassword(text)}
           />
           <Input
           placeholder="Telefone"
           autoCorrect={false}
           autoCapitalize="none"
           value={telefone}
           keyboardType="numeric"
           onChangeText={(text) => setTelefone(text)}
           />
           <Input
           placeholder="RG"
           autoCorrect={false}
           autoCapitalize="none"
           value={rg}
           keyboardType="numeric"
           onChangeText={(text) => setRg(text)}
           />
           
           <Input
           placeholder="Ano"
           autoCorrect={false}
           autoCapitalize="none"
           value={ano}
           onChangeText={(text) => setAno(text)}
           />


           </AreaInput>

        
         
        
           <BtnLogin onPress={handleSignUp}>
             <TextLogin>Cadastrar</TextLogin>
           </BtnLogin>
       </Container>
       </ScrollView>
       </>
   </Background>

  );
}