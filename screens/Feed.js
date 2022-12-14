import { StatusBar } from 'expo-status-bar'
import { View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from "react-native-gesture-handler";
import PostCard from './PostCard'

let posts = require("../temp_posts.json");

export default class Feed extends React.Component {
  constructor(props){
    super(props);
    this.State = {
      posts: [],
    }
  }
  
  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation}/>;
  };

  keyExtractor = (item, index) => index.toString();


  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Espectagrama</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  droidSafeArea: {
    marginTop: 20
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row'
  },
  appIcon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center'
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28)
  },
  cardContainer: {
    flex: 0.85
  }
})
