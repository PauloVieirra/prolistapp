import { FontDisplay } from 'expo-font';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000 rgba(0,0,0,0.8)',
    },

    contsup: {
        width: "100%",
        height: "65%",
        flexDirection: 'row'
    },
    contsupint: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        alignItems: 'center',
    },
    contsupintr: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    contsub: {
        width: "100%",
        height: "35%",
        backgroundColor: "#000"
    },
    texteplayer: {
        fontSize: 36,
        color: "#fff"
    },
    texteplayerscor:{
        fontSize: 14,
        color: "#fff"
    },
    texteplayerscorc:{
        fontSize: 13,
        color: "#fff"
    },
    backgroundImage: {
        width: "100%",
        height: "110%",
        marginTop: "60%",
        marginLeft: "85%"
    },
    contintbar:{
        width:"100%",
        height:"15%",
    },
    contintbartop:{
        width:"100%",
        height:"15%",
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        marginTop:10,
        marginLeft:20
    },
    contintbard:{
        width:"100%",
        height:"30%",
        paddingLeft:30,
    },
    contintflet:{
        width:"100%",
        height:"100%",
       
        backgroundColor: '#000 rgba(13,13,13,0.5)',
    },
    boxview:{
        width:"100%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor: '#000 rgba(13,13,13,0.5)',
    },
    boxviews:{
        width:"100%",
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#fff rgba(255,255,255,0.3)',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor: '#000 rgba(13,13,13,0.5)',
    },
    boxint:{
        fontSize:20,
        color:"#eee"
    },
    boxselos:{
       flex:1,
       position:'absolute',
       bottom:0
    }

});

export default styles;