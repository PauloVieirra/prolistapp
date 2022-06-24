import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    
    viewplayer: {
        flexDirection: 'row',
        width: 60,
        height: 60,
        borderRadius:12,
        margin: 4,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee:rgba(255,255,255,0.9)',
        borderWidth:1,
           borderBottomColor:"#787257"
    },
   
    viewpone: {
        width: "25%",
        height: "100%",
        alignItems:'center',
        justifyContent:'center',
    },
    viewppho: {
        width: "90%",
        height: "90%",
        borderRadius:100,
    },
    viewlogo:{
        width:40,
        height:40,
        position:'absolute',
        borderRadius:20,
        bottom:2,
        right:2
        
    },

    viewpthow: {
        width: "75%",
        height: "100%",
        marginLeft:6,
       
    },
    viewpgame: {
        flex: 1,
    },
    viewpname: {
        flex: 1,
    },
    viewpnow: {
        flexDirection:'row',
        flex: 1,
    },
    viewpnowg: {
        height:"10%"
    },
    textgame:{
        marginLeft:10,
        fontSize:14,
        color:"#fff"
    },
    textname:{
        fontSize:10,
        color:"#000"
    },
    textnow:{
        marginLeft:10,
        fontSize:14,
        color:"#fff"
    },
    textnowg:{
        marginLeft:4,
        fontSize:15,
        color:"#eee"
    },

    btnplay:{
        width:"100%",
        height:"100%",
        
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width:"90%",
        height:"90%",
        backgroundColor: "white",
        borderRadius: 20,
        padding:6,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 25,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        position: 'absolute',
        borderWidth:4,
        borderColor:"#fff",
        bottom:-20,
        width:50,
        height:50,
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        fontSize:20,
        
      },
      modalViewPhoto:{
        width: "100%",
        height: 150,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee:rgba(0,0,0,0.1)',
      },
      modalViewDados:{
        width: "100%",
        padding:10,
        backgroundColor:'#eee:rgba(0,0,0,0.6)',
      }
    




});

export default styles;