import React from  'react'
import {Text,View, Image, TouchableOpacity} from 'react-native'

import UserInfoView from './UserInfoView'

const styles= {

}



class UserSettings extends React.Component
{
  render()
  {
    return(
        <UserInfoView showPanel= {false} editable />
    )
  }
}

export default UserSettings
