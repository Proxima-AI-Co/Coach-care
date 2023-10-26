import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,Dimensions,FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH - 40; // Adjust as needed
const CARD_MARGIN = 20;

export default function Landing({ navigation }) {
  const personality = { name: 'coach care', image: require('../assets/images/bot.png') };

  const navigateToChat = (personality) => {
    navigation.navigate('Chat', {
      name: personality.name,
      image: personality.image
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 5, marginBottom: 10 }}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: "700" }}>Welcome Sergio</Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate("Personal Coach") }} style={styles.largeBox}>
        <View style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "500" }}>Personal Coach</Text>
          <Text style={{ fontSize: 12, color: "white", fontWeight: "500" }}>No Coach Assigned</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.smallBoxContainer}>
        <TouchableOpacity onPress={() => { navigateToChat(personality) }}>
          <ImageBackground
            source={require('../assets/images/coach.jpg')}
            style={{
              width: 150,
              height: 150,
              backgroundColor: '#e74c3c',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
              opacity: 0.8
            }}
          >
            <Text style={styles.boxText}>Coach Care</Text>
            <Text style={{ color: "white", fontSize: 12, width: "70%", fontWeight: "700" }}>Chat and ask questions to our AI</Text>
          </ImageBackground>
        </TouchableOpacity>
        <ImageBackground
          source={require('../assets/images/myou.jpg')}
          style={styles.smallBox}
        />
      </View>
      <View style={styles.smallBoxContainer}>
        <ImageBackground
          source={require('../assets/images/com.jpg')}
          style={styles.smallBox}
        />
        <ImageBackground
          source={require('../assets/images/growth.jpg')}
          style={styles.smallBox}
        >
          <Text style={styles.boxText}>Growth General</Text>
          <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Capture your thoughts</Text>
        </ImageBackground>
      </View>
      <View style={tabStyles.tab}>
        <TouchableOpacity style={tabStyles.tabButton}
          onPress={() => { navigation.navigate("Landing") }}>
          <Feather name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={tabStyles.tabButton}>
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  largeBox: {
    width: 320,
    height: 200,
    backgroundColor: '#3068c8',
    padding: 30,
    justifyContent: 'center',
    borderRadius: 20,
  },
  smallBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  smallBox: {
    width: 150,
    height: 150,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 5,
  },
  boxText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: "500",
    marginTop: 30,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabIcon: {
    padding: 10,
    color: '#3068c8'
  },
  container1: {
    flex: 1,
  },
  card1: {
    width: CARD_WIDTH,
    height: 200, // Adjust as needed
    margin: CARD_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3, // For shadow (Android)
    shadowColor: 'black', // For shadow (iOS)
    shadowOffset: { width: 0, height: 2 }, // For shadow (iOS)
    shadowOpacity: 0.2, // For shadow (iOS)
  },
  cardText1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const tabStyles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabButton: {
    padding: 10,
    backgroundColor: "#2c64cc",
    borderRadius: 20,
  },
});
