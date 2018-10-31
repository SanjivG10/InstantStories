import React from 'react'
import {Text,View, Dimensions, TouchableOpacity} from 'react-native'

import {Image} from '@shoutem/ui'

const width = Dimensions.get('window').width;

const styles= {
  iconStyle: {
    width: 32,
    height: 32
  },
  followPanelViewStyle: {
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: width
  },
  followTextStyle: {
    position: 'relative'
  },
  followingTextStyle: {
    position: 'relative'
  }
}

class FollowingPanel extends React.Component
{
  render()
  {
    return(
      <View style= {styles.followPanelViewStyle}>

        <TouchableOpacity>
          <Image style ={styles.iconStyle} source={require('./../following.png')} />
          <Text style= {styles.followTextStyle}>
            2.5k
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style ={styles.iconStyle} source={require('./../following_them.png')} />
          <Text style= {styles.followingTextStyle}>
            3.3m
          </Text>
        </TouchableOpacity>

      </View>

    )
  }
}


export default FollowingPanel
