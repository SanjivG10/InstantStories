import React from 'react'
import {Text, View, TouchableOpacity, Dimensions,TextInput,Alert} from  'react-native'
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
    backgroundColor:'#ececec',

  },
  profileDetailUsernameStyle: {
    fontFamily: 'monospace',
    marginTop: 10,
    size: 30
  },
  profileDetailFollowStyle: {

  },
  usernameEditStyle: {
    borderWidth: 1,
    borderColor: '#000',
    elevation: 2,
    marginTop: 20,
    padding: 5,
    width: width,
    marginLeft: 10,
    marginRight: 10
  }
}


class UserInfoView extends React.Component
{

  constructor(props)
  {
    super(props);
  }

  alertOpen()
  {
    if (this.props.editable)
      {
        Alert.alert(
          'Upload Your Profile Photo',
          'Choose From Gallery or Camera',
          [
            {text: 'Camera', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Gallery', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: true }
        )
      }
  }


  render() {
    return(
      <Card userid= {this.props.id}  style= {styles.cardStyle}  >
        <TouchableOpacity onPress= { ()=> this.alertOpen()   }
>
            <Image
              style= {styles.profileDetailImageStyle}
              source={require('./../user.png')}
            />
        </TouchableOpacity>


        { this.props.editable ?
          <TextInput style = {styles.usernameEditStyle}
            placeholder={'username'}
            maxLength= {12}
          />
          :
          <Text style= {styles.profileDetailUsernameStyle}>
            @abhayRaut
          </Text>
        }


        {  this.props.showPanel ? <FollowingPanel /> : null }
      </Card>

    )
  }
}

export default UserInfoView
