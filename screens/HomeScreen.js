import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
    <View style={styles.homeScreen}>
        <Text>Home Screen</Text>
        {/* <Button title='Profile' onPress={()=>props.navigation.navigate('Profile')} /> */}
        <Button  title='Go to settings' onPress={()=>navigation.navigate('Settings')}/>
    </View>
    
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });