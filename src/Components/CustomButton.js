import { TouchableOpacity,Text,View } from "react-native";
import ComponentStyles from "../Style/ComponentStyle";
const CustomButton=(props)=>{
    return(
       <View style={ComponentStyles.container}>
         <TouchableOpacity style={ComponentStyles.btnContainer} onPress={props.onpress}>
            <Text style={ComponentStyles.btntext}>{props.title}</Text>
        </TouchableOpacity>
       </View>
    )
}
export default CustomButton;