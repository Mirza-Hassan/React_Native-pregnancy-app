import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from './component/InitialScreen';
import SignInScreen from './component/SignInScreen';
import SignUpScreen from './component/SignUpScreen';
import NameScreen from './component/NameScreen'; 
import DateScreen from './component/DateScreen'; 
import WorkoutScreen from './component/WorkoutScreen'; 
import SuccessScreen from './component/SuccessScreen'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="UserScreen">
        <Stack.Screen name="UserScreen" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NameScreen" component={NameScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DateScreen" component={DateScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
