import React from 'react'
import {Text, View, TouchableOpacity, Dimensions,TextInput,Alert} from  'react-native'
import {Screen, Image, Button, ListView, Card} from '@shoutem/ui'
import ImagePicker from 'react-native-image-picker';



import FollowingPanel from './followingPanel'
import FollowersList from './followersList'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const styles= {
  cardStyle: {
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
  usernameEditStyle: {
    borderWidth: 1,
    borderColor: '#000',
    elevation: 2,
    marginTop: 20,
    padding: 5,
    width: width,
    marginLeft: 10,
    marginRight: 10
  },
  buttonStyle:{
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  userSettingsSaveButtonTextStyle: {
    padding: 10
  }
}

class UserInfoView extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state= {
      image: null
    }
  }

  openGallery()
  {
    ImagePicker.showImagePicker(null, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.warn('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };



        this.setState({
          image: source,
          username: ''

        });
      }
    });
  }

  saveNewUserData(username,image)
  {
    console.warn()
  }


  render() {

    return(
      <Card userid= {this.props.id}  style= {styles.cardStyle}  >
        <TouchableOpacity onPress= { ()=> this.openGallery()   }
>
            <Image
              style= {styles.profileDetailImageStyle}
              source={this.state.image || require('./../icons/user.png')}
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

        {  this.props.editable ?
          <Button  style= {styles.buttonStyle} onPress = { () => this.saveNewUserData( this.state.username, this.state.image )} >
            <Text style= {styles.userSettingsSaveButtonTextStyle}> Save </Text>
          </Button>
           : null }


           { this.props.editable ?
             <Text style= {{alignSelf: 'center', marginTop: 10, fontFamily: 'monospace'  }}>
              Followers
             </Text>:
              null
            }

           {
             this.props.editable ?
             <FollowersList /> :
             null
           }


      </Card>

    )
  }
}

export default UserInfoView
