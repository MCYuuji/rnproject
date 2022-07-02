import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from './app/Screen/Auth/index';
import OTP from './app/Screen/Auth/Otp';
import Main from './app/Screen/MainScreen';

const AuthStack= createAppContainer(
 
  createStackNavigator(
    {
      SignIn : SignIn,
      OTP : OTP,
      Main : Main
    },
    {
     headerMode: "none",
     initialRouteName: "SignIn"
    }
  )
);


const App = () => {
  return(
     <AuthStack />
  )
};

export default App;