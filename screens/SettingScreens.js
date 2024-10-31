import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const SettingScreens = () => {
  return (
    <>
    <View style={styles.homeScreen}>
        <Text>Setting Screen</Text>
        {/* <Button title='Profile' onPress={()=>props.navigation.navigate('Profile')} /> */}

    </View>
    
    </>
  )
}

export default SettingScreens

const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });