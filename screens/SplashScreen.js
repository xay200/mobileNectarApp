import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.replace('OnboardingScreen');
        }, 2000);
      }, [navigation]);
    
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/carrot-icon.png')} style={styles.carrotIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>nectar</Text>
          <Text style={styles.subtitle}>o n l i n e   g r o c e r i e s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'flex-start',
    marginTop: -5, 
  },
  carrotIcon: {
    width: 54.70069122314453,
    height: 63.60965347290039,
    marginRight: 10,
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 10,
    color: 'white',
    letterSpacing: 1,
    marginTop: -5, // Giảm khoảng cách giữa hai dòng chữ
  },
});

export default SplashScreen;