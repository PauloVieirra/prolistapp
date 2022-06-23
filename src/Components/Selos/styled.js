import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    conttabbar:{
        flexDirection:'row',
        width:"100%", 
        height:60,
        margin:5,
        backgroundColor:'rgba(150,120,120,0.3)',
   
    },
    conttabbarlin:{
       flex:1,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
    },
    tabint:{
        width:54,
        height:54,
        marginLeft:12,
        marginRight:12,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.2)',
    },
    imgselos:{
        width:50,
        height:50,
    }

});

export default styles;