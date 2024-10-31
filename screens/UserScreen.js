import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const UserScreens = () => {
  return (
    <>
    <View style={styles.homeScreen}>
        <Text>User Screen</Text>

    </View>
    
    </>
  )
}

export default UserScreens

const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });