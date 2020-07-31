import React from 'react';
import {View, Text} from 'react-native';
import StatusBarCustom from '../../components/statusbar';

class Blog extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBarCustom />
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            elevation: 5,
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Blog</Text>
        </View>
      </View>
    );
  }
}
export default Blog;
