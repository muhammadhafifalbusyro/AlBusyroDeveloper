import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import NavBar from '../../components/navbar';
import StatusBarCustom from '../../components/statusbar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Contact extends React.Component {
  state = {
    socialMediaIcons: [
      {
        link: 'https://wa.me/qr/5JTJKHXEH2R3M1',
        image: 'https://pngimg.com/uploads/whatsapp/whatsapp_PNG15.png',
      },
      {
        link: 'https://facebook.com/muhammadhafifalbusyro',
        image:
          'https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png',
      },
      {
        link: 'https://instagram.com/muhammadhafifalbusyro',
        image:
          'https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png',
      },
      {
        link: 'https://github.com/muhammadhafifalbusyro',
        image:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        link: 'https://linkedin.com/in/muhammad-hafif-al-busyro-8bb248187',
        image:
          'https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBarCustom />
        <NavBar name="Contact" />
        <Text style={styles.socialmediaTitle}>Social Media</Text>
        <View style={styles.contactWrap}>
          {this.state.socialMediaIcons.map((value, key) => {
            return (
              <View key={key} style={styles.iconsWrap}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(value.link);
                  }}
                  style={styles.boxIcons}
                  activeOpacity={0.7}
                  delayPressIn={10}>
                  <Image
                    source={{uri: value.image}}
                    style={styles.imageIcons}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  socialmediaTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
    width: '100%',
    paddingLeft: 10,
    marginVertical: 10,
  },
  contactWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconsWrap: {
    width: width / 4,
    height: 100,
    alignItems: 'center',
  },
  boxIcons: {
    height: '95%',
    width: '95%',
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcons: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
  },
});
