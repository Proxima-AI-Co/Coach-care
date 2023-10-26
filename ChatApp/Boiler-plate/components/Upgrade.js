import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
export default function Upgrade({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 24, textAlign: "center", margin:20 }}>
        Personal Coach
      </Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.centeredContainer}>
          <View style={styles.card}>
            <View style={styles.circleView}>
              
            </View>
            <Text style={{ textAlign: "center", margin: 5, fontWeight: "700" }}>
              {'\n\n'}
              No Coach Assigned
            </Text>
            <Text style={{ fontWeight: "500", marginBottom: 3 }}>
              With a personal coach, you'll get:
            </Text>
            <Text style={{ paddingLeft: 8 }}>
              • 1-hour sessions twice a month
              {'\n\n'}
              • A growth action plan
              {'\n\n'}
              • Daily personal D.O.S.E videos
            </Text>
            <Text style={{ marginTop: 10 }}>
              Note that personal coaches are locked behind our Achiever plan, but feel free to look at our amazing coaches!
            </Text>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("Find A Coach")}}
            style={tabStyles.button}>
              <Text style={tabStyles.buttonText}>
                Find your Match
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginTop: 50,
            backgroundColor: 'white',
            borderRadius: 20,
            width: '80%',
            height: 300, // You can adjust the height as per your preference
            margin: 10,
            padding: 20,
            position: 'relative',
          }}>
            <Text style={{ fontWeight: "500", marginBottom: 3 }}>
              Need a refresher on our Achiever plan?
            </Text>
            <Text>
              For just $19.99/mo, get full access to:
            </Text>
            <Text style={{ paddingLeft: 8 }}>
              • 10+ AI Coaches
              {"\n"}
              • Real-life coach (twice a month)
              {"\n"}
              • A growth action plan
              {"\n"}
              • Daily personal D.O.S.E. videos
              {"\n"}
              • MYou Library
              {"\n"}
              • Community page
              {"\n"}
              • Growth Journal
            </Text>
            <TouchableOpacity style={tabStyles.button}>
              <Text style={tabStyles.buttonText}>
                Upgrade
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* Tab at the bottom */}
      <View style={tabStyles.tab}>
        <TouchableOpacity style={tabStyles.tabButton}
        onPress={()=>{navigation.navigate("Coach Care")}}>
          <Feather name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={tabStyles.tabButton}
        >
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  card: {
    marginTop: 120,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: 350, // You can adjust the height as per your preference
    margin: 10,
    padding: 20,
    position: 'relative',
  },
  circleView: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    top: -40,
    left: '50%',
    marginLeft: -30,
  },
  cardText: {
    fontSize: 16,
  },
});
const tabStyles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    padding: 10,
    backgroundColor:"white",
    borderTopLeftRadius:20,
      borderTopRightRadius:20,
  },
  tabButton: {
    padding: 10,
    backgroundColor:"#2c64cc",
    borderRadius:20
  },
  button: {
    margin: 20,
    marginLeft: 50,
    marginRight: 50,
    padding: 8,
    backgroundColor: "#2c64cc",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
