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
      <View>
        <UserInfoView showPanel= {false} editable />
      </View>
    )
  }
}

export default UserSettings
