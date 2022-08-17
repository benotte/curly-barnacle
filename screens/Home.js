import * as React from 'react';
import { Text, View, Pressable, StyleSheet, Image, TouchableOpacity, BackHandler} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>HLS Home</Text>
        <TouchableOpacity onPress={() => this.props.goToPage('VideoScreen')}
          style = {{padding: 10, backgroundColor: '#ff3c3b', width: 80, borderRadius: 5, marginTop: 10, activeOpacity: 2,}}>
          <Text style = {{color: 'black', textAlign: 'center'}}>CNN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  pageTitle: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});