import React from 'react'

import {Text,View, Image,TouchableOpacity} from 'react-native'

import {ListView} from '@shoutem/ui'


const styles = {
  profileImageStyle: {
    width:64,
    height:64,
    backgroundColor:'#fff',
    borderRadius:100,
    marginLeft: 5,
    marginRight: 10,
  }
}

class TopUsersPost extends React.Component
{

  constructor(props)
  {
    super(props);
    this.renderRow= this.renderRow.bind(this)

    this.state = {
        data: {
          userID1: {
            profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/30656299_1694434053984616_6806551844421107712_n.jpg?_nc_cat=103&_nc_ht=scontent.fktm3-1.fna&oh=9d944287993e0640943e7a868cb1170d&oe=5C3CBF08',
            image: ''
          },
          userID2: {
            profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/37985168_1074561986033799_385421169618059264_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=c6dd709beb65206ad84e423deab58296&oe=5C7ACFE1',
            image: ''
          },
          userID3: {
            profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/36490791_1986500211680309_6316150150691553280_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=de7d68132b1912e45d856bc3ddade968&oe=5C3CE576',
            image: ''
          },
          userID4: {
            profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/44921181_2240545526007773_7696147637094842368_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=866531206b1f970d11e6bf566b43f56a&oe=5C85BDC3',
            image: ''
          },
          userID5: {
            profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/37312674_1573863209386432_5762780040219590656_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=f697f72263dd4784dbdbbcb57dc6e8af&oe=5C80C0F0',
            image: ''
          },
          userID6: {
            profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/31357916_2109296032683585_7254354746838876160_n.jpg?_nc_cat=107&_nc_ht=scontent.fktm3-1.fna&oh=99ea8c88df6b6a29a270e8a4ecdb1328&oe=5C82D47C',
            image: ''
          },
          userID7: {
            profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/42200197_1491046844374116_7599554097485709312_n.jpg?_nc_cat=100&_nc_ht=scontent.fktm3-1.fna&oh=722bcd5f601c877a16954fad3b8f8b85&oe=5C7AE662',
            image: ''
          }
        }
    }
  }

  renderRow (data)
  {
    return(
      <TouchableOpacity style= {{marginTop: 20}}>
        <Image style= {styles.profileImageStyle} styleName="small" source= {{  uri:data.profileImage }} />
      </TouchableOpacity>
    )
  }

  render()
  {
    return(
      <View>

        <Text style= {{marginTop: 20, marginLeft: 20, fontFamily: 'monospace', color: '#000'}}>
          Top Users Post
        </Text>

        <ListView  horizontal data= {this.state.data} renderRow= {this.renderRow} >

        </ListView>
      </View>
    )
  }
}

export default TopUsersPost
