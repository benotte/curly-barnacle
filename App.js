import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './screens/Home';
import VideoScreen from './screens/VideoScreen';

import Video from 'react-native-video';

export default class App extends React.Component{
  state = {
      page: 'Home',
  };

  pickPageToRender = () => {
      if (this.state.page === 'VideoScreen') {
        return <VideoScreen goToPage={(page) => this.setState({ page })} />;
      } else {
        return <Home goToPage={(page) => this.setState({ page })} />;
      }
  };

  render() {
      return <View style={styles.container}>{this.pickPageToRender()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
});
