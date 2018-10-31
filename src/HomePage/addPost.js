import React from  'react'
import {Text,View, Image, TouchableOpacity} from 'react-native'

const styles= {

}

class AddPost extends React.Component
{
  render()
  {
    return(
      <TouchableOpacity>
        <Image style ={{ width: 32, height: 32, marginBottom: 20, marginRight: 20, padding: 20 }}  source={require('./../plus.png')} />
      </TouchableOpacity>
    )
  }
}

export default AddPost
