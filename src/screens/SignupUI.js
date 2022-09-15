import React from 'react';
import {  Text, View ,TextInput,SafeAreaView, Image,TouchableOpacity} from 'react-native';
import styles from '../Style/styles';
import ComponentStyles from '../Style/ComponentStyle';
import CustomButton from '../Components/CustomButton';
export default function SignupUI() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={{
            color:"black",
            fontWeight:"bold",
            fontSize:30,
          }}>
            Welcome
          </Text>
        </View>
        <View style={styles.backgroundDesign}/>
        <View style={styles.innnerCard}>
          <View>
            <Text style={{color:"black",fontWeight:"bold",fontSize:15,marginTop:15}}>
                Welcome Back We are missing you!!
            </Text>
            <TextInput
              style={ComponentStyles.inputBox}
              placeholder={"UserName"}
              placeholderTextColor={"black"}
            />
            <TextInput
              style={ComponentStyles.inputBox}
              placeholder={"Email"}
              placeholderTextColor={"black"}
            />
            <TextInput
              style={ComponentStyles.inputBox}
              placeholder={"Password"}
              placeholderTextColor={"black"}
            />
          </View>
          <View style={{marginTop:20}}>
            <CustomButton
              title="SignUp"
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
              Already Have an account ? 
              <Text style={{
                textAlign:"center",
                color:"#0659FA",
                fontWeight:"bold",
                fontSize:15,
              }}>Login</Text> 
            </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

