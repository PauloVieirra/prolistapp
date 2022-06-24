import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    contsup: {
        width: "100%",
        height: "60%",
        backgroundColor: "#fff"
    },
    contsub: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: "50%",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor: '#fff:rgba(0,0,0,0.8)',
    },
    imgprof: {
        width: "100%",
        height: "100%",
    },
    contsubint: {
        width: "100%",
        height: "100%",
        padding: 10,
        marginTop: 60,
        flexDirection: "row",
    },
    contdados: {
        width: "100%",
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
        height: "100%",
        alignItems:'center',
    },
    
});

export default styles;