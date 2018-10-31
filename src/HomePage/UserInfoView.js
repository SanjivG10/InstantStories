import React from 'react'
import {Text, View, TouchableOpacity, Dimensions} from  'react-native'
import {Screen, Image, Button, ListView, Card} from '@shoutem/ui'


import FollowingPanel from './followingPanel'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles= {
  cardStyle: {
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    width: width,
    alignItems: 'center',
    backgroundColor: '#ececec'
  },
  profileDetailImageStyle: {
    borderColor:'rgba(0,0,0,0.2)',
    width:200,
    marginTop: 10,
    height:200,
    backgroundColor:'#fff',

  },
  profileDetailUsernameStyle: {
    fontFamily: 'monospace',
    marginTop: 10,
    size: 30
  },
  profileDetailFollowStyle: {

  }
}

const ImageID = "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/42247263_499791153765567_8151577168774692864_n.jpg?_nc_cat=103&_nc_ht=scontent.fktm3-1.fna&oh=3c57b985c3b715ffdeaafbd0c49fd5df&oe=5C3FD2A3"

class UserInfoView extends React.Component
{

  constructor(props)
  {
    super(props);
  }


  render() {
    return(
      <Card userid= {this.props.id}  style= {styles.cardStyle}  >
        <Image
          style= {styles.profileDetailImageStyle}
          source={{ uri: ImageID }}
        />

        <Text style= {styles.profileDetailUsernameStyle}>
          @abhayRaut
        </Text>

        <FollowingPanel />

      </Card>

    )
  }
}

export default UserInfoView
