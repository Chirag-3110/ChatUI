import React,{useEffect, useRef} from 'react';
import {Text,View,Animated,TouchableOpacity, StyleSheet} from 'react-native';
import CustomButton from '../Components/CustomButton';
const Animation=()=>{
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const position=new Animated.ValueXY({x:0,y:0});
    const fadeIn=()=>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:1000,
            useNativeDriver:true
        }).start();
        // setTimeout(() => {
        //     fadeOut();
        // }, 1000);
    }
    const fadeOut=()=>{
        Animated.timing(fadeAnim,{
            toValue:0,
            duration:1000,
            useNativeDriver:true
        }).start();
        // setTimeout(() => {
        //     fadeIn();
        // }, 1000);
    }
    // Animated.timing(position,{
    //     toValue:{x:200,y:500},
    //     // duration:2000,
    //     bounciness:20,
    //     useNativeDriver:false
    // }).start();
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.fadeAnimation,{
                // transform:[
                //     {translateX:position.x},
                //     {translateY:position.y}
                // ]
                opacity:fadeAnim
            }]}>
                <Text>HEllo</Text>
            </Animated.View>
            <CustomButton
                title="Show Box"
                onpress={()=>fadeIn()}
            />
            <CustomButton
                title="Hide Box"
                onpress={()=>fadeOut()}
            />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        // flex:1,
        // justifyContent:"center",
        // alignItems:"center"
    },
    fadeAnimation:{
        width:100,
        height:100,
        backgroundColor:"#81E1FF",
        alignItems:"center",
        justifyContent:"center"
    }
})


export default Animation;