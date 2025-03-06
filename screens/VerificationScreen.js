import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.topSection}>
        <Text style={styles.title}>Enter your 4-digit code</Text>
        <Text>Code</Text>
        <TextInput
          style={styles.input}
          placeholder='- - - -'
          keyboardType='number-pad'
          maxLength={4}
          value={otp}
          onChangeText={setOtp}
        />
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => console.log('Verify OTP:', otp)}>
          <Ionicons name="chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  topSection: {
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  resendButton: {},
  resendText: {
    color: '#6CCF7A',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#6CCF7A',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});

export default VerificationScreen;
