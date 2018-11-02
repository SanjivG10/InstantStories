import React from  'react'
import {Text,View,TouchableOpacity, FlatList, Image, Dimensions} from 'react-native'
import {Divider} from '@shoutem/ui'

const width = Dimensions.get('window').width;


const styles = {
  flatListStyle: {
    marginTop: 20,
    fontFamily: 'monospace'
  },
  eachFlatListViewStyle: {
    flexDirection: 'row',
    width: width,
    marginBottom: 10,
    marginLeft: 20
  },
  eachImageStyle: {
    width: 80,
    height: 80,
    borderRadius: 100
  },
  eachFollowerNameStyle: {
    alignSelf: 'center',
    marginLeft: 20
  }
}

const fakeData= {
  userID1: {
    profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
    username: 'sanjivg10'
  },
  userID2: {
    profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/42247263_499791153765567_8151577168774692864_n.jpg?_nc_cat=103&_nc_ht=scontent.fktm3-1.fna&oh=3c57b985c3b715ffdeaafbd0c49fd5df&oe=5C3FD2A3',
    username: 'abhayRaut',
  },
  userID3: {
    profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p240x240/42564389_545276039265864_5020092530163712000_n.jpg?_nc_cat=104&_nc_ht=scontent.fktm3-1.fna&oh=b08b0823a6ffd16ec337d2075e82b1a7&oe=5C41D1DD',
    username: 'sandeshDon'
  },
  userID4: {
    profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p240x240/40633630_1372785896186143_5607141630982225920_n.jpg?_nc_cat=107&_nc_ht=scontent.fktm3-1.fna&oh=60c2ddce0cf3cb2ba76710bd55e566e3&oe=5C79BF04',
    username: 'asimMahat'
  },
  userID5: {
    profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p240x240/28168829_1307261296085655_1184919219242380719_n.jpg?_nc_cat=103&_nc_ht=scontent.fktm3-1.fna&oh=46c0547f28b686e725f44d4c220fb599&oe=5C4D95E2',
    username: 'bhattuDon'
  },
  userID6: {
    profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/42147790_1715093665268110_8743276297540599808_n.jpg?_nc_cat=108&_nc_ht=scontent.fktm3-1.fna&oh=775f040d5c16573f0d7eb7be2cc1914c&oe=5C3F47B7',
    username: 'CHELSEA_kamal'
  },

}

export default class FollowersList extends React.Component
{
  render()
  {
    const arrayOfData = Object.values(fakeData);

    return(
        <FlatList
          style= {styles.flatListStyle}
          data={
              arrayOfData
          }
          renderItem={
            ({item}) =>
              {
                return (
                  <View>
                    <TouchableOpacity style={styles.eachFlatListViewStyle}>
                      <Image style= {styles.eachImageStyle} source = {{  uri: item.profileImage }} />
                      <Text style = {styles.eachFollowerNameStyle} >{item.username}</Text>
                    </TouchableOpacity>

                    <Divider styleName="line" />
                  </View>
                )
              }
            }
          />
    )
  }
}
