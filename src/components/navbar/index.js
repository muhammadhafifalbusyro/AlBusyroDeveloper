import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

const NavBar = ({name}) => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 10,
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
    </View>
  );
};
export default NavBar;
