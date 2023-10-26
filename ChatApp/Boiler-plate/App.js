import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from './components/ChatScreen';
import Landing from './components/Landing';
import Upgrade from './components/Upgrade';
import CoachPreview from './components/CoachPreview';
const Stack = createNativeStackNavigator();
export default function App() {

  return (
    // <View className="flex-1 justify-center items-center">
    //   <Text>Hello world</Text>
    // </View>
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Coach Care"  component={Landing} />
      <Stack.Screen name="Find A Coach"  component={HomeScreen} />
      <Stack.Screen name="Chat"  component={ChatScreen} />
      <Stack.Screen name="Personal Coach"  component={Upgrade} />
      <Stack.Screen name="Coach Preview"  component={CoachPreview} />



    </Stack.Navigator>
  </NavigationContainer>
  );
}