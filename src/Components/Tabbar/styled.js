import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    conttabbar:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        width:"100%",
        backgroundColor:'rgb(150,120,120)',
        height:60,
        zIndex:10,
    },
    conttabbarlin:{
       flex:1,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
    },
    tabint:{
        width:"12%",
        height:"80%",
        marginLeft:12,
        marginRight:12,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(150,105,105,0.3)',
    }

});

export default styles;