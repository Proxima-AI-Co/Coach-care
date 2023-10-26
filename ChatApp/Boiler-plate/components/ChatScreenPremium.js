import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

export default function ChatScreenPremium({route,navigation}) {
    const {name,image} = route.params
    const isDarkMode = useColorScheme() === 'dark';
    const [inputText, setInputText] = useState('');
    const [botmesssage, setBotMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);
    useEffect(() => {
        fetch("https://32fa-111-68-111-216.ngrok-free.app/get_chats",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },body:JSON.stringify({
                user_id:"xyz",
                coach:name
            })

        }).then(res=>res.json()).then((data)=>setMessages(data))
    }, []);

    const buyPreimium=()=>{
        const botResponse = {
            id: messages.length + 1,
            content: "Please Buy premium to proceed",
            isUser: false,
        };

        setMessages(prevMessages => [...prevMessages, botResponse]);

    }

    const handleSendMessage = () => {
        if (inputText) {
            const newMessage = {
                id: messages.length,
                content: inputText,
                isUser: true,
            };

            setMessages(prevMessages => [...prevMessages, newMessage]);

            fetch('https://32fa-111-68-111-216.ngrok-free.app/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: "xyz",
                    prompt: inputText,
                    coach:name,
                    system:`you are ${name} act like  ${name} your task is to motivate people making  ${name} a inspiration keep your answer small`
                }),
            }).then(res => res.json()).then(data => {
                const botResponse = {
                    id: messages.length + 2,
                    content: data.message.content,
                    isUser: false,
                };

                setMessages(prevMessages => [...prevMessages, botResponse]);
            }).catch(err => {
                console.log(err);
            });

            setInputText('');
        }
    };
    const renderMessages = () => {
        return messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.role === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={message.role === "user" ? styles.messageText : {}}>
              {message.content}
            </Text>
          </View>
        ));
      };
      
    // const renderMessages = () => {
    //     return messages.map((message) => (
    //         <View
    //             key={message.id}
    //             style={[
    //                 styles.messageContainer,
    //                 message.isUser ? styles.userMessage : styles.botMessage,
    //             ]}>
    //             <Text style={message.isUser?styles.messageText:{}}>{message.text}</Text>
    //         </View>
    //     ));
    // };

    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'white' : 'white',
        backgroundColor2: isDarkMode ? '#121212' : 'white',
    };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
    <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor2}
    />
      <View style={styles.header}>
        <Text style={styles.coachCareText}>Coach Care</Text>
        <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
    </View>
   
    <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.messageContainer}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.messageScrollView}>
        {renderMessages()}
    </ScrollView>
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={()=>{
            handleSendMessage()}
        }>
        <Icon name="send" size={20} color="#3A78D5" /> 
        </TouchableOpacity>
    </KeyboardAvoidingView>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageScrollView: {
        flex: 1,
        marginBottom: 80,
    },
    messageContainer: {
        padding: 10,
    },
    botMessage: {
        alignItems: "center",
        alignSelf: 'flex-start',
        backgroundColor: '#EFEFEF',
        margin: 10,
        borderRadius: 10,
    },
    userMessage: {
        alignItems: "right",
        margin: 3,
        backgroundColor: '#3A78D5',
        borderRadius: 10,
        margin: 10,

    },
    messageText: {
        fontSize: 16,
        color: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    textInput: {
        color: "black",
        flex: 1,
        marginRight: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        fontSize: 16,
    },
    sendButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 60, // Increase the size of the logo
        height: 60, // Increase the size of the logo
        marginRight: 10,
        borderRadius: 50,
        borderColor: 'red',
        borderWidth:3
    },
    coachCareText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    upgradeButton: {
        backgroundColor: '#2c64cc',
        padding: 14,
        borderRadius: 10,
    },
    upgradeButtonText: {
        color: 'white',
        fontWeight: '700',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
});