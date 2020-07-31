import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBarCustom from '../../components/statusbar';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    passwordVisible: true,
  };
  passwordVisible = () => {
    const {passwordVisible} = this.state;
    if (passwordVisible) {
      return (
        <View style={styles.passwordVisible}>
          <Icon name="eye" color="white" size={25} />
        </View>
      );
    } else {
      return (
        <View style={styles.passwordVisible}>
          <Icon name="eye-slash" color="white" size={25} />
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBarCustom />
        <View style={styles.content}>
          <Image
            source={require('../../assets/image/abdeveloperplank.png')}
            style={styles.logo}
          />
          <View style={styles.inputField}>
            <View style={styles.iconField}>
              <Icon name="user" color="white" size={25} />
            </View>
            <TextInput
              value={this.state.username}
              placeholder="Username"
              style={styles.textInputField}
              onChangeText={text => this.setState({username: text})}
              placeholderTextColor="rgb(147,42,255)"
            />
          </View>
          <View style={{...styles.inputField, marginBottom: 30}}>
            <View style={styles.iconField}>
              <Icon name="unlock-alt" color="white" size={25} />
            </View>
            <TextInput
              value={this.state.password}
              placeholder="Password"
              style={{...styles.textInputField, width: '70%'}}
              onChangeText={text => this.setState({password: text})}
              placeholderTextColor="rgb(147,42,255)"
              secureTextEntry={this.state.passwordVisible}
            />
            <TouchableNativeFeedback
              onPress={() =>
                this.setState({passwordVisible: !this.state.passwordVisible})
              }>
              {this.passwordVisible()}
            </TouchableNativeFeedback>
          </View>
          <TouchableNativeFeedback>
            <View style={styles.buttonPrimary}>
              <Text style={styles.textButton}>Sign In</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              this.props.navigation.navigate('GuestUserDashboard')
            }>
            <View style={styles.buttonSeccondary}>
              <Text style={styles.textButton}>Sign In As Guest User</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  inputField: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconField: {
    height: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(147,42,255)',
  },
  textInputField: {
    height: 50,
    width: '85%',
    borderWidth: 1,
    borderColor: 'rgb(147,42,255)',
    padding: 5,
  },
  passwordVisible: {
    height: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(147,42,255)',
  },
  buttonPrimary: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgb(147,42,255)',
    elevation: 3,
    marginBottom: 10,
  },
  buttonSeccondary: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgb(68,0,170)',
    elevation: 3,
    marginBottom: 10,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
