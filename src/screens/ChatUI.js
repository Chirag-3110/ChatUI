import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  Image
} from 'react-native';
import ChatStyle from '../Style/ChatStyle';
import chatData from '../data';
const ChatUI=()=>{

    const user="takchirag828@gmail.com"
    const renderItem = ({ item }) => (
        <>
        <Text style={[ChatStyle.time,{alignSelf:item.userUserMessageId===user?'flex-end':'flex-start',}]}>
            {item.createdAt}
        </Text>
        <View 
            style={[
                ChatStyle.messageContainer,
                {
                    alignSelf:item.userUserMessageId===user?'flex-end':'flex-start',
                }
            ]}    
        >
            <Text style={[ChatStyle.title,{
                alignSelf:item.userUserMessageId===user?'flex-end':'flex-start',
                }]}>
            {item.message}
            </Text>
        </View >
        
        </>
    );

    return (
        <View style={ChatStyle.container}>
            <View style={ChatStyle.groupTitle}>
                <View style={ChatStyle.titleView}>
                    <Image 
                    style={ChatStyle.image}
                    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imXJMeK9b42t8JBjKxYP2zJd8MVrbVNEAg&usqp=CAU"}}
                    />
                    <Text style={ChatStyle.title}>
                    Name
                    </Text>
                </View>
            </View>
            <FlatList
                inverted
                data={[...chatData]}
                renderItem={renderItem}
                keyExtractor={item => Math.random()*10000}
            />
            <View  style={ChatStyle.chatIPStyle}>
                <TextInput
                    placeholder={"Message..."}
                    placeholderTextColor={"black"}
                    style={ChatStyle.chatInput}
                />
            <TouchableOpacity>
                <Image
                    style={ChatStyle.sentIcon}
                    source={require('../Assets/send.png')}
                />
            </TouchableOpacity>
            </View>    
        </View>
    );
};
export default ChatUI;
