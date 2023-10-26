
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

export default function CoachPreview({ route, navigation }) {
    const { name, image, desc } = route.params
    const hashtags = ["#Motivation", "#Success", "#Inspiration", "#Leadership", "#Coaching", "#Mindfulness", "#Health", "#Achievement", "#Mentorship", "#SelfImprovement"];
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.centeredContainer}>
                    <View style={styles.card}>
                        <View style={styles.circleView}>
                            <Image
                                source={image}
                                style={styles.logo}
                            />
                        </View>
                        <View style={{alignItems:"flex-end"}}>
                            <TouchableOpacity style={{backgroundColor:"#2c64cc",padding:8,borderRadius:10}} >
                           <Text style={{color:"white",fontWeight:"700"}}>
                           Upgrade
                           </Text>
                        </TouchableOpacity>
                        </View>
                       
                       
                        
                        <Text style={{ textAlign: "center", margin: 5, fontWeight: "700" }}>
                            {'\n\n'}
                            {name}
                        </Text>
                        <Text style={{ fontWeight: "500", marginBottom: 3 }}>
                            {desc}
                        </Text>
                        <View style={styles.hashtagsView}>
                            {hashtags.map((hashtag, index) => (
                                <Text key={index} style={styles.hashtag}>{hashtag}</Text>
                            ))}
                        </View>
                        <Text style={{ textAlign: "center", margin: 0, fontWeight: "700" }}>

                            Example D.O.S.E. videos you’d get from me
                        </Text>
                        <View style={styles.smallCardsContainer}>
                            <Swiper
                                showsPagination={false}
                            >
                                <View style={styles.smallCard}>

                                    <Text style={{ textAlign: "center" }}>
                                        Add Videos
                                    </Text>
                                </View>
                                <View style={styles.smallCard}>
                                    <Text style={{ textAlign: "center" }}>
                                        Add Videos
                                    </Text>

                                </View>
                                <View style={styles.smallCard}>
                                    {/* Small Card 3 content */}
                                    <Text style={{ textAlign: "center" }}>
                                        Add Videos
                                    </Text>
                                </View>
                            </Swiper>

                        </View>
                        <Text style={{ textAlign: "center", marginTop: 5, fontWeight: "700" }}>

                            Optional Packages I offer on top of MYou
                        </Text>
                        <View style={{
                            marginTop: 20,
                            backgroundColor: '#EFEFEF',
                            borderRadius: 20,
                            width: '90%',
                            height: 150, // You can adjust the height as per your preference
                            margin: 10,
                            padding: 20,
                            position: 'relative',
                        }}>

                            <Text style={{ marginTop: 2, fontWeight: "700" }}>

                                Individual
                            </Text>
                            <Text style={{ marginTop: 2, fontSize: 32, fontWeight: "bold", color: "#20E5EF" }}>

                                100$/Hr
                            </Text>
                            <Text style={{ marginTop: 2, fontWeight: "500" }}>

                                Enter the text here as description
                            </Text>
                        </View>
                        <View style={{
                            marginTop: 20,
                            backgroundColor: '#EFEFEF',
                            borderRadius: 20,
                            width: '90%',
                            height: 150, // You can adjust the height as per your preference
                            margin: 10,
                            padding: 20,
                            position: 'relative',
                        }}>

                            <Text style={{ marginTop: 2, fontWeight: "700" }}>

                               Business
                            </Text>
                            <Text style={{ marginTop: 2, fontSize: 32, fontWeight: "bold", color: "#20E5EF" }}>

                                200$/Hr
                            </Text>
                            <Text style={{ marginTop: 2, fontWeight: "500" }}>

                                Enter the text here as description
                            </Text>
                        </View>
                        <View style={{
                            marginTop: 20,
                            backgroundColor: '#EFEFEF',
                            borderRadius: 20,
                            width: '90%',
                            height: 150, // You can adjust the height as per your preference
                            margin: 10,
                            padding: 20,
                            position: 'relative',
                        }}>

                            <Text style={{ marginTop: 2, fontWeight: "700" }}>

                                Speaking Events
                            </Text>
                            <Text style={{ marginTop: 2, fontSize: 32, fontWeight: "bold", color: "#20E5EF" }}>

                                300$/Hr
                            </Text>
                            <Text style={{ marginTop: 2, fontWeight: "500" }}>

                                Enter the text here as description
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
            {/* Tab at the bottom */}
            <View style={tabStyles.tab}>
                <TouchableOpacity style={tabStyles.tabButton}
                    onPress={() => { navigation.navigate("Coach Care") }}>
                    <Feather name="home" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={tabStyles.tabButton}
                >
                    <Feather name="user" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginTop: 120,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        height: 1150,
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
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 60,
        borderWidth: 2,
    },
    hashtagsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        flexWrap: 'wrap',
    },
    hashtag: {
        padding: 3,
        backgroundColor: 'white',
        color: 'black',
        margin: 4,
        borderWidth: 1.5,
        borderColor: "#2c64cc",
        borderRadius: 10,
    },
    smallCardsContainer: {
        marginTop: 20,
        height: 160, // Adjust the height as needed
    },
    smallCard: {
        width: 150, // Adjust the width as needed
        height: 150, // Adjust the height as needed
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
    },
});
const tabStyles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        padding: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tabButton: {
        padding: 10,
        backgroundColor: "#2c64cc",
        borderRadius: 20
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
