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
        height: "80%",
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
    }


});

export default styles;