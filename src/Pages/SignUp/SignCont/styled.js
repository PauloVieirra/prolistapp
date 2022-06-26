import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#000",
        alignItems:'center',
        justifyContent:'center',
    },
    cont:{
        width:280,
        height:"80%",
        margin:8,
        borderWidth:1,
        borderColor:"#fff",
        alignItems:'center',
        borderRadius:12
    },
    scrollView: {
        height:"100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
      },
    
    viewsub:{
        flexDirection:'row',
       flex:1,
        marginTop:60,
        justifyContent:'center',
        alignItems:'center',
    },
    viewsubint:{
        width:180,
        height:45,
        position:'absolute',
        bottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:"#fff",
        backgroundColor:'#000:rgba(255,255,255,0.1)',
        borderRadius:12
    },
    subintvintv:{
        width:"35%",
        height:"80%",
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:12
    }

});

export default styles;