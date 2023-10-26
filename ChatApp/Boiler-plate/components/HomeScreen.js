import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

export default function Homescreen({ navigation }) {
  const navigateToChat = (personality) => {
    navigation.navigate('Coach Preview', {
      name: personality.name,
      image: personality.image,
      desc:personality.desc
    });
  };

  const personalities = [
    { 
        name: 'Mel Robbins',
        image: require('../assets/images/melrobbins.jpg'),
        desc: "Mel Robbins is a renowned motivational speaker, author, and life coach. She's best known for her '5-Second Rule' and her powerful TEDx talk."
    },
    { 
        name: 'Kobe Bryant',
        image: require('../assets/images/bryant.jpg'),
        desc: "Kobe Bryant was a legendary NBA player, winning numerous championships with the Los Angeles Lakers and known for his dedication and work ethic."
    },
    { 
        name: 'Kevin Hart',
        image: require('../assets/images/kevinhart.jpg'),
        desc: "Kevin Hart is a popular comedian and actor known for his stand-up comedy and roles in various comedy films."
    },
    { 
        name: 'Tony Robbins',
        image: require('../assets/images/Tony_Robbins.jpg'),
        desc: "Tony Robbins is a life coach and author, known for his seminars and books on personal development and leadership."
    },
    { 
        name: 'David Goggins',
        image: require('../assets/images/David_Goggins.jpg'),
        desc: "David Goggins is a retired Navy SEAL and ultra-endurance athlete known for his incredible physical and mental feats."
    },
    { 
        name: 'Jordan Peterson',
        image: require('../assets/images/jordanpeterson.jpg'),
        desc: "Jordan Peterson is a clinical psychologist and author, best known for his discussions on free speech and cultural issues."
    },
    { 
        name: 'Serena Williams',
        image: require('../assets/images/williams.jpg'),
        desc: "Serena Williams is one of the greatest tennis players of all time, with numerous Grand Slam titles to her name."
    },
    { 
        name: 'Ray Lewis',
        image: require('../assets/images/ray.jpg'),
        desc: "Ray Lewis is a former NFL linebacker, a two-time Super Bowl champion, and known for his inspiring leadership on the field."
    },
    { 
        name: 'Deion Sanders',
        image: require('../assets/images/sanders.jpg'),
        desc: "Deion Sanders is a former NFL and MLB player, known for his versatility as a two-sport athlete and his flamboyant personality."
    },
    { 
        name: 'Jay Shetty',
        image: require('../assets/images/jay.jpg'),
        desc: "Jay Shetty is a former monk, motivational speaker, and author, sharing wisdom and inspiration through his content."
    },
    { 
        name: 'Oprah',
        image: require('../assets/images/oprah.jpg'),
        desc: "Oprah Winfrey is a media mogul and philanthropist, best known for 'The Oprah Winfrey Show' and her influence in the entertainment industry."
    },
    { 
        name: 'LeBron',
        image: require('../assets/images/lebron.jpg'),
        desc: "LeBron James is an NBA superstar, considered one of the greatest basketball players of all time, with multiple championships to his name."
    },
];

  // Helper function to group personalities into rows of three
  const groupIntoRows = (array, elementsPerRow) => {
    const result = [];
    for (let i = 0; i < array.length; i += elementsPerRow) {
      result.push(array.slice(i, i + elementsPerRow));
    }
    return result;
  };

  const personalitiesInRows = groupIntoRows(personalities, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SELECT YOUR COACH</Text>
      <ScrollView contentContainerStyle={styles.personalityContainer}>
        {personalitiesInRows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((personality, index) => (
              <TouchableOpacity
                onPress={() => navigateToChat(personality)}
                // onPress={()=>{navigation.navigate("Coach Preview")}}
                key={index}
                style={styles.personality}
              >
                <Image
                  source={personality.image}
                  style={styles.logo}
                />
                <Text style={styles.personalityText}>{personality.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  personalityContainer: {
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personality: {
    // backgroundColor: 'white',
    width: (width / 3) - 20,
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'column', // Display image and text stacked
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  personalityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: 60,

    borderWidth: 2,
  },
});
