import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/onboarding-bg.jpg')} 
      style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 50 }}
    >
      <View style={{ alignItems: 'center', padding: 20, borderRadius: 10, width: '90%' }}>
      <Image 
          source={require('../assets/carrot-icon.png')} 
          style={{ width: 48.47049331665039, height: 56.3647575378418, marginBottom: 15 }} 
        />
        <Text style={{ fontSize: 48, fontWeight: 'bold', color: 'white', textAlign: 'center', font:'gilory' }}>Welcome to our store</Text>
        <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginVertical: 10, font:'Gilroy-Medium' }}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignIn')} 
          style={{ marginTop: 20, backgroundColor: '#6CCF7A', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: 18 , fontWeight: 'bold', font: 'Gilroy' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen;

