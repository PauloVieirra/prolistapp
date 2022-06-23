import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    btngohome:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom:50,
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:3,
        borderColor:'rgba(84,35,129.0,3)',
        backgroundColor:"#F7D25A"
    },
    viewsup:{
        width:"100%",
        height:"80%",
        alignItems:'center',
        justifyContent:'center',
    },
    viewssub:{
        flex:1,
        alignItems:'center',
    },
    video:{
        position:"absolute",
        top:0,bottom:0,right:0,left:0,
        zIndex:0
    },


});

export default styles;