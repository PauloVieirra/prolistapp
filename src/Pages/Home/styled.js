import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewsup: {
        width: "100%",
        height: "20%",
        alignItems:'center',
        alignContent:'center',
        backgroundColor: "#eee"
    },
    viewsub: {
        width: "100%",
        height: "70%",
        alignItems: 'center',
        backgroundColor: "#000",
    },
    viewplayer: {
        flexDirection: 'row',
        width: "100%",
        height: 100,
        marginTop: 6,
        backgroundColor: "#eee"
    },
    viewplayers: {
        width: "100%",
        height: "100%",
        padding: 4,
    },
    viewpone: {
        width: "25%",
        height: "100%",
        backgroundColor: "#fff",
        alignItems:'center',
        justifyContent:'center',
    },
    viewppho: {
        width: "90%",
        height: "90%",
        backgroundColor: "#eee",
        borderRadius:"100%",
    },

    viewpthow: {
        width: "75%",
        height: "100%",
        backgroundColor: "#fff"
    },
    viewpgame: {
        flex: 1,
        backgroundColor: "#eee"
    },
    viewpname: {
        flex: 1,
        backgroundColor: "#fff"
    },
    viewpnow: {
        flex: 1,
        backgroundColor: "#eee"
    },
    video:{
        position:"absolute",
        top:0,bottom:0,right:0,left:0,
        zIndex:0
    },
    anaunce:{
        width:"100%",
        height:"100%",
        position:"absolute",
        alignItems:'center',
        justifyContent:'center',
        zIndex:9
    },
    texteanounce:{
        fontSize:30,
        color:"#91F579",
        
    },
    texteanouncethow:{
        fontSize:30,
        color:"#fff",
        opacity: 0.7
    },
    context:{
        flexDirection:'row',
        marginTop:30,
        width:"100%",
    },
    conttabbar:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        width:"100%",
        height:60,
        backgroundColor:"#fff",
        zIndex:10
        
    }


});

export default styles;