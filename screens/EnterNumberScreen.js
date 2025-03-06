import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EnterNumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.topSection}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text weight={600} size={16} font = 'Gilory' color= '#7C7C7C'  >Mobile Number</Text>
      <View style={styles.inputContainer}>
        
        <Image source={require('../assets/bangladesh-flag.png')} style={styles.flag} />
        <TextInput
          style={styles.input}
          placeholder='+880'
          keyboardType='number-pad'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Verification')}>
      <Ionicons name="chevron-forward-sharp" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  topSection: {
    marginTop: 100
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 20,
    font: 'Gilroy',
    height: 40
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#6CCF7A',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});

export default EnterNumberScreen;

