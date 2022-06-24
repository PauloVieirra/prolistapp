import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    contsup: {
        width: "100%",
        height: "60%",
        backgroundColor: "#000"
    },
    contsub: {
        position: 'absolute',
        bottom: 0,
        borderRadius: 25,
        width: "100%",
        height: "50%",
        backgroundColor: "#eee"
    },
    imgprof: {
        width: "100%",
        height: "100%",
    },
    contsubint: {
        width: "100%",
        height: "20%",
        marginTop: 20,
        flexDirection: "row",
    },
    contdados: {
        width: "50%",
        height: "100%",
        paddingLeft: 20,
        justifyContent: 'center',
    },
    contpro: {
        width: "100%",
        height: "35%",
        alignItems:'center',
    },
    contprotx:{
        padding:10,
        fontSize:12,
        width: "100%",
        height: "35%",
        alignItems:'center',
    },
    contlogout: {
        width: 70,
        height: 40,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff:rgba(0,0,0,0.6)',
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: 20, left: 10,
        backgroundColor: '#fff:rgba(0,0,0,0.1)',
        zIndex:10
    },
    btnpro:{
        width:"80%",
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff:rgba(255,255,2550,0.3)',
    }


});

export default styles;