import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

    container:{
        flex:1,
    },

    viewsup:{
         width: "100%",
         height:"80%",
         backgroundColor:"#fff",
    },
    viewsub:{
        flexDirection:'row',
        width: "100%",
        height:"20%",
        backgroundColor:"#fff",
        justifyContent:'space-around',
    },
    viewsubint:{
        width:100,
        height:100,
        backgroundColor:"#eee",
    }

});

export default styles;