import * as React from 'react';
import { Text, View, Pressable, StyleSheet, Image, TouchableOpacity, Dimensions, BackHandler} from 'react-native';
import Video from 'react-native-video';
import FullscreenVideo from 'react-native-fullscreen-video';

var {height, width} = Dimensions.get('window');

export default class VideoScreen extends React.Component {
  backAction = () => {
    this.props.goToPage('Home')
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View style={styles.page}>
        <Video
          source={{ uri: 'http://vpn.videopropulsion.net:3141/stream_2/playlist.m3u8'}}
          style={styles.video}
          controls={false}
          resizeMode="cover"
          ref={(ref) => {
              this.player = ref
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    alignSelf: 'center',
    width: width,
    height: height,
  },
  pageTitle: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

