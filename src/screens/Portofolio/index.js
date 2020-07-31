import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar from '../../components/navbar';
import StatusBarCustom from '../../components/statusbar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//'rgb(147,42,255)'
class Portofolio extends React.Component {
  state = {
    modalVisible: false,
    search: '',
    dataApp: [
      {
        name: 'Catatan',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1200px-LINE_logo.svg.png',
      },
      {
        name: 'Catatan',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1200px-LINE_logo.svg.png',
      },
      {
        name: 'Mobile Legend',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1200px-LINE_logo.svg.png',
      },
      {
        name: 'Spotify',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1200px-LINE_logo.svg.png',
      },
    ],
  };
  renderListApp = () => {
    if (this.state.search == '') {
      return (
        <ScrollView style={styles.scrollIcons}>
          <Text style={styles.textTitle}>Aplikasi</Text>
          <View style={styles.wrapIcons}>
            {this.state.dataApp.map((value, key) => {
              return (
                <View key={key} style={styles.fieldIcons}>
                  <TouchableOpacity
                    style={styles.touchIcons}
                    activeOpacity={0.7}
                    delayPressIn={10}
                    onPress={() => this.setState({modalVisible: true})}>
                    <Image
                      source={{uri: value.image}}
                      style={styles.imageIcons}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textIcons}>{value.name}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      );
    } else {
      let newData = this.state.dataApp.filter(elemen => {
        let nameLowerCase = elemen.name.toLowerCase();
        let searchLowerCase = this.state.search.toLowerCase();
        return nameLowerCase.includes(searchLowerCase);
      });
      console.log(newData);
      return (
        <ScrollView style={styles.scrollIcons}>
          <Text style={styles.textTitle}>Aplikasi</Text>
          <View style={styles.wrapIcons}>
            {newData.map((value, key) => {
              return (
                <View key={key} style={styles.fieldIcons}>
                  <TouchableOpacity
                    style={styles.touchIcons}
                    activeOpacity={0.7}
                    delayPressIn={10}
                    onPress={() => this.setState({modalVisible: true})}>
                    <Image
                      source={{uri: value.image}}
                      style={styles.imageIcons}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textIcons}>{value.name}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      );
    }
  };
  cancel = () => {
    if (this.state.search != '') {
      return (
        <TouchableOpacity
          delayPressIn={10}
          activeOpacity={0.7}
          style={styles.buttonSearch}
          onPress={() => {
            this.setState({search: ''});
          }}>
          <Icon name="times" size={25} color="white" />
        </TouchableOpacity>
      );
    } else {
      return (
        <View
          style={{
            ...styles.buttonSearch,
            backgroundColor: 'rgba(255,255,255,0.7)',
          }}
        />
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBarCustom />
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          onRequestClose={() => this.setState({modalVisible: false})}
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.navbarContent}>
              <TouchableOpacity
                activeOpacity={0.5}
                delayPressIn={10}
                onPress={() => this.setState({modalVisible: false})}>
                <Icon name="arrow-left" size={25} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollContainerModal}>
              <View style={styles.headerModalContent}>
                <View style={styles.modalLogoWrap}>
                  <Image
                    source={require('../../assets/image/pp.png')}
                    style={styles.modalLogo}
                  />
                </View>
                <View style={styles.modalTitleWrap}>
                  <Text style={styles.modalTitle}>
                    Pondok Programmer Academy
                  </Text>
                </View>
              </View>
              <View style={styles.wrapButton}>
                <TouchableNativeFeedback>
                  <View style={styles.button}>
                    <Text style={styles.textButton}>Install</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
              <ScrollView horizontal={true}>
                <Image
                  source={require('../../assets/image/javascript.png')}
                  style={styles.imageHorizontal}
                />
              </ScrollView>
              <View style={styles.modalContentInfo}>
                <Text style={styles.titleInfo}>Tentang Aplikasi ini</Text>
                <Text>
                  LOREM IPSUM LOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUM
                  LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                  LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                  LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM v
                  v v v LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM
                  IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM
                  IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM
                  IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM
                  IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM v v v
                </Text>
              </View>
            </ScrollView>
          </View>
        </Modal>
        <NavBar name="Portofolio" />
        <ImageBackground
          source={require('../../assets/image/banner.jpg')}
          style={styles.banner}>
          <View style={styles.wrapSearch}>
            <TextInput
              placeholder="Cari Aplikasi"
              value={this.state.search}
              onChangeText={text => this.setState({search: text})}
              style={styles.textInputSearch}
            />
            {this.cancel()}
          </View>
        </ImageBackground>
        {this.renderListApp()}
      </View>
    );
  }
}
export default Portofolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
  navbarContent: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  scrollContainerModal: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerModalContent: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalLogoWrap: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  modalLogo: {
    height: 80,
    width: 80,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  modalTitleWrap: {
    height: '100%',
    width: '70%',
    justifyContent: 'center',
    padding: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  wrapButton: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    height: 40,
    width: '90%',
    backgroundColor: 'rgb(147,42,255)',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  imageHorizontal: {
    height: 150,
    width: 250,
    borderRadius: 10,
    margin: 10,
    resizeMode: 'contain',
  },
  modalContentInfo: {
    marginTop: 10,
    padding: 10,
  },
  titleInfo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  banner: {
    height: 150,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  wrapSearch: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputSearch: {
    height: 40,
    width: '60%',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  buttonSearch: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(147,42,255)',
  },
  scrollIcons: {
    flex: 1,
    backgroundColor: 'white',
  },
  textTitle: {
    width: '100%',
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    marginVertical: 10,
  },
  wrapIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fieldIcons: {
    width: width / 4,
    alignItems: 'center',
    height: 130,
    backgroundColor: 'white',
  },
  touchIcons: {
    height: '60%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcons: {
    height: '90%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  textIcons: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
