import { StyleSheet,Dimensions } from "react-native";
const windowWidth=Dimensions.get('window').width;
const windowheight=Dimensions.get("window").height;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"white",
    },
    backgroundDesign:{
        width:windowWidth,
        height:windowheight/2,
        backgroundColor:"#81E1FF",
        position:"absolute",
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        zIndex:-5,
        top:0
    },
    innnerCard:{
        backgroundColor:"white",
        padding:45,
        width:windowWidth-50,
        // height:windowheight/2.5,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    titleView:{
        alignItems:"center",
        marginTop:15
    },
    bottomCard:{
        alignItems:"center"
    }
})
export default styles