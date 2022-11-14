import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class PostCard extends React.Component {
  render() {
    return (
      <View style={styles.continer}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.profileImage}
              ></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(30)} colors={'white'} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: 13,
    backgroundColor: '#2f345d',
    borderRadius: 20,
    padding: 10
  },
  cardContainerLight: {
    margin: 13,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 10
  },
  titleTextContainer: {
    flex: 1
  },
  titleContainer: {
    paddingLeft: 10,
    justifyContent: 'center'
  },
  postTitleText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 20,
    color: 'white'
  },
  postTitleTextLight: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 20,
    color: '#2f345d'
  },
  postAuthorText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 18,
    color: 'white'
  },
  postAuthorTextLight: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 18,
    color: '#2f345d'
  },
  descriptionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: 'white',
    padding: 10
  },
  descriptionTextLight: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: '#2f345d',
    padding: 10
  },
  actionContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  likeButtonLiked: {
    backgroundColor: '#eb3948',
    borderRadius: 30,
    width: 160,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center'
  },
  likeButtonDisliked: {
    borderColor: '#eb3948',
    borderRadius: 30,
    borderWidth: 2,
    width: 160,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center'
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: 25,
    marginLeft: 5,
    marginTop: 6
  },
  likeTextLight: {
    color: '#2f345d',
    fontFamily: 'Bubblegum-Sans',
    fontSize: 25,
    marginLeft: 5,
    marginTop: 6
  },
  likeButton: {
    borderColor: '#eb3948',
    borderRadius: 30,
    borderWidth: 2,
    width: 160,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center'
  },
})
