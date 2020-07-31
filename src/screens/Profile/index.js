import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/navbar';
import StatusBarCustom from '../../components/statusbar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//'rgb(147,42,255)'
class Profile extends React.Component {
  state = {
    skills: [
      {
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      },
      {
        uri:
          'https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png',
      },
      {
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png',
      },
      {
        uri:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--LS4X9NFz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png',
      },
      {
        uri:
          'https://lh3.googleusercontent.com/proxy/mc3RIkArhfebaWw0Kt8VRaD-uR2gxpW2Ne6kV2kYGmWPfrujPjXoDrUdQVf3-8GNDk4vCJ6M85qUxhPTzAqPcw',
      },
      {
        uri: 'https://miro.medium.com/max/1024/1*bqyQAveJwFK6Zct6kKoqfw.png',
      },
    ],
    experience: [
      {
        company: 'PT TOSURO INDONESIA',
        workingField: 'CNC Operator',
        uri:
          'https://lh3.googleusercontent.com/BaNATF_j9odrNoJ4_G4wpPn-yrS45MI9pIvyuuhYIajhl5-41QEQp-Q6i5Z0-Vf3BZ6IDeRB=w1080-h608-p-no-v0',
      },
      {
        company: 'PONDOK PROGRAMMER',
        workingField: 'CEO and Programming Teacher',
        uri:
          'data:image/png;base64,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',
      },
      {
        company: 'SUPERCAMP PROGRAMMER',
        workingField: 'CEO',
        uri:
          'data:image/jpeg;base64,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',
      },
      {
        company: 'PROJECTS.CO.ID',
        workingField: 'Freelancer',
        uri:
          'https://pbs.twimg.com/profile_images/558523765420589056/aquz-EaA_400x400.png',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBarCustom />
        <NavBar name="Profile" />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <View style={styles.field}>
              <Image
                source={require('../../assets/image/hafifPhoto.jpg')}
                style={styles.photo}
              />
            </View>
            <View style={styles.field}>
              <Text style={styles.textName}>Muhammad Hafif Al Busyro</Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.textDivision}>Software Developer</Text>
            </View>
            <Text style={styles.textSkills}>Skills</Text>
            <View style={styles.iconsWrap}>
              {this.state.skills.map((value, key) => {
                return (
                  <View key={key} style={styles.iconsField}>
                    <View style={styles.boxIcons}>
                      <Image
                        source={{uri: value.uri}}
                        style={styles.imageIcons}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
            <Text style={styles.textSkills}>Experience</Text>
            {this.state.experience.map((value, key) => {
              return (
                <View style={styles.boxList} key={key}>
                  <View style={styles.subBoxList1}>
                    <Image source={{uri: value.uri}} style={styles.imageList} />
                  </View>
                  <View style={styles.subBoxList2}>
                    <Text style={styles.textList}>{value.company}</Text>
                    <Text>{value.workingField}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(147,42,255)',
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 120,
    elevation: 5,
  },
  field: {
    width: '100%',
    alignItems: 'center',
  },
  photo: {
    height: 100,
    width: 100,
    bottom: 50,
    borderRadius: 100,
  },
  textName: {
    bottom: 35,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textDivision: {
    bottom: 30,
    color: 'grey',
  },
  textSkills: {
    width: '100%',
    paddingLeft: 10,
    color: 'grey',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconsWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  iconsField: {
    height: 100,
    width: width / 4,
    alignItems: 'center',
  },
  boxIcons: {
    height: '90%',
    width: '90%',
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: 'white',
  },
  imageIcons: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  boxList: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 5,
    elevation: 5,
    flexDirection: 'row',
  },
  subBoxList1: {
    height: '100%',
    width: '30%',
  },
  imageList: {
    height: '100%',
    width: '100%',
  },
  subBoxList2: {
    height: '100%',
    width: '70%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textList: {
    fontWeight: 'bold',
  },
});
