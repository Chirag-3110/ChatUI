import { StyleSheet,Dimensions } from "react-native";
const windowWidth=Dimensions.get('window').width;
const windowheight=Dimensions.get("window").height;
const ComponentStyles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },  
    inputBox:{
        backgroundColor:"#81E1FF",
        height:50,
        width:windowWidth-80,
        borderRadius:10,
        marginTop:10,
        paddingLeft:20,
        fontWeight:'bold',
        borderWidth:2,
        borderColor:"#00B9F3"
    },
    btnContainer:{
        width:windowWidth-120,
        height:45,
        backgroundColor:"#81E1FF",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        margin:20
    },
    btntext:{
        color:"black",
        fontWeight:"bold",
        fontSize:15,
    },
    imageIcon:{
        height:35,
        width:35,
        marginHorizontal:15
    }
})
export default ComponentStyles