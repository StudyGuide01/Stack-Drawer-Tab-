import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const ProfileScreens = () => {
  return (
    <>
    <View style={styles.homeScreen}>
        <Text>Profile Screen</Text>
        {/* <Button title='Profile' onPress={()=>props.navigation.navigate('Profile')} /> */}

    </View>
    
    </>
  )
}

export default ProfileScreens

const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });