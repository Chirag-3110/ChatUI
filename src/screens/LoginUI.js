import React from 'react';
import {  Text,Dimensions, View ,TextInput,SafeAreaView, Image,TouchableOpacity} from 'react-native';
import styles from '../Style/styles';
import ComponentStyles from '../Style/ComponentStyle';
import CustomButton from '../Components/CustomButton';
import InputBox from '../Components/InputBox';
export default function LoginUI() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={{
            color:"black",
            fontWeight:"bold",
            fontSize:25,
          }}>
            Hello Again!
          </Text>
          <Text style={{color:"black",fontWeight:"bold",fontSize:15,marginTop:15}}>
            Welcome Back We are missing you!!
          </Text>
        </View>
        <View style={styles.backgroundDesign}/>
        <View style={styles.innnerCard}>
          <View>
            {/* <TextInput
              style={ComponentStyles.inputBox}
              placeholder={"Email"}
              placeholderTextColor={"black"}
            /> */}
            {/* <TextInput
              style={ComponentStyles.inputBox}
              placeholder={"Password"}
              placeholderTextColor={"black"}
            /> */}
            <InputBox 
                type="email"
                iconImageLink={require("../Assets/mail.png")}
            />
            <InputBox 
                type="Password"
                iconImageLink={require("../Assets/lock.png")}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text  style={{
              textAlign:"center",
              color:"black",
              fontWeight:"bold",
              fontSize:15,
              marginBottom:15
            }}>
              Forgot your password
            </Text>
            </TouchableOpacity>
            <CustomButton
              title="Login"
            />
          </View>
        </View>
        <View style={styles.bottomCard}>
            <View style={{flexDirection:"row",marginVertical:10}}>
              <Image  
                style={ComponentStyles.imageIcon}
                source={require('../Assets/google.png')}
              />
              <Image  
                style={ComponentStyles.imageIcon}
                source={require('../Assets/facebook.png')}
              />
              <Image  
                style={ComponentStyles.imageIcon}
                source={require('../Assets/twitter.png')}
              />
            </View>
            <Text style={{
              textAlign:"center",
              color:"black",
              fontWeight:"bold",
              fontSize:15,
              marginTop:15
            }}>
              Don’t Have an account ? 
              <Text style={{
                textAlign:"center",
                color:"#0659FA",
                fontWeight:"bold",
                fontSize:15,
              }}>Sign Up </Text> 
            </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

