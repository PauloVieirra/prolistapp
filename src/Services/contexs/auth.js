import React, {useState, createContext, useEffect } from "react";
import firebase from '../../Services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [amigao, setAmigao] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');

    useEffect(()=> {

        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');
 
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
 
            setLoading(false);
        }
        
        loadStorage()
        
     }, []);


    //Logar usuario
    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                  uid: uid,
                  nome: snapshot.val().nome,
                  veiculo: snapshot.val().veiculo,
                  modelo: snapshot.val().modelo,
                  cor: snapshot.val().cor,
                  ano: snapshot.val().ano,
                  revisao: snapshot.val().revisao,
                  selo: snapshot.val().selo,
                  gps: snapshot.val().gps,
                  telefone: snapshot.val().telefone,
                  rg: snapshot.val().rg,
                  tipo: snapshot.val().tipo,
                  email: value.user.email,
                };
                 
                setUser(data);
                storageUser(data); 
            })
        })
        .catch((error)=> {
            alert(error.code);
        });
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
           setUser(null); 
        })

    }


    //Cadastrando usuario
    async function signUp(email, password, nome, ano, telefone,rg){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                nome: nome,
                ano: ano,
                telefone: telefone,
                rg: rg
                
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    telefone: telefone, 
                    rg: rg,
                    ano: ano, 
                };
                setUser(data);
                storageUser(data);
            })
        })
    }


    //Cadastrando clube
    async function signUpTeam(email, password, nome, ano, telefone,rg){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('teams').child(uid).set({
                nome: nome,
                email: email,
                telefone: telefone,
                rg: rg,
                ano: ano,
                
                
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    telefone: telefone, 
                    rg: rg,
                    ano: ano,
                   
                  
                };
                setUser(data);
                storageUser(data);
            })
        })
    }

      //Cadastrando Profissionais
      async function signUpProff(email, password, nome, cidade, ano, telefone,rg){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('proff').child(uid).set({
                nome: nome,
                cidade: cidade,
                email: email,
                telefone: telefone,
                
                
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    cidade:cidade,
                    email: value.user.email,
                    telefone: telefone, 
                    rg: rg,
                   
                    ano: ano, 
                };
                setUser(data);
                storageUser(data);
            })
        })
    }


    //Cadastro Amigão
    async function cadAmigao(nome,telefone, cidade){
        if(nome !== '' & telefone !== '' & cidade !== ''){
          let amigao = await firebase.database().ref('amigao');
          let chave = amigao.push().key;
    
          amigao.child(chave).set({
            nome: nome,
            telefone: telefone,
            cidade: cidade
          });
    
          alert('Cadastrado com sucesso!');
          setTelefone('');
          setNome('');
          setCidade('');
        }
      }

    return(
        <AuthContext.Provider value={{ signed: !!user , user, signUp, signUpTeam,signUpProff, signIn, loading,signOut,cadAmigao,  }}>
            {children}
        </AuthContext.Provider>  
       );
       
}

export default AuthProvider;