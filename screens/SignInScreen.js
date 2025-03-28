import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignInScreen = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleContinue = () => {
      if (phoneNumber) {
        navigation.navigate('EnterNumberScreen', { phoneNumber });
      }
    };
  
    const handleGoogleLogin = () => {
      navigation.navigate('EnterNumberScreen');
    };
  

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <View style={styles.imageContainer}>
      <Image source={require('../assets/signin-header.jpg')} style={styles.headerImage} />
      </View>
      {/* Title */}
      <Text style={styles.title}>Get your groceries with nectar</Text>
      
      {/* Phone Input */}
      <View style={styles.phoneContainer}>
        <Image source={require('../assets/bangladesh-flag.png')} style={styles.flag} />
        <Text style={styles.phoneCode}>+880</Text>
        <TextInput 
          style={styles.phoneInput} 
          placeholder="Enter your number" 
          keyboardType="phone-pad" 
          value={phoneNumber} 
          onChangeText={setPhoneNumber} 
        />
      </View>
      
      <Text style={styles.orText}>Or connect with social media</Text>
      
      {/* Social Login Buttons */}
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4285F4' }]} onPress={handleGoogleLogin}> 
        <FontAwesome name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}> 
        <FontAwesome name="facebook" size={20} color="white" style={styles.icon} />
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 613.36627197265625,
    height: 325,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerImage: {
    top: -80,
    left: 30,
    width: 727.3545158678589,
    height: 418.3118647421973,
    resizeMode: 'cover',
    transform: [{ rotate: '-141.29deg' }],
  },
  title: {
    width: 222,
    height: 63,
    font: 'Gilroy',
    fontSize: 26,
    fontWeight: 600,
    textAlign: 'left',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  flag: {
    width: 33.96815490722656,
    height: 23.696962356567383,
    marginRight: 10,
    borderRadius: 3
  },
  phoneCode: {
    fontSize: 16,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    width: 364,
    height: 39.550201416015625,
    top:517.24,
    left: 25,
    border: 1
  },
  orText: {
    color: '#828282',
    marginVertical: 10,
    font: 'Gilroy',
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 24
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    width: 364,
    height: 67,
    borderRadius: 19,
    
  },
  icon: {
    marginRight: 10,
  },
  socialText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;