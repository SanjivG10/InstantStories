import {Dimensions} from 'react-native'

const config = {
    apiKey: "AIzaSyBGNGiOzT4feTYyx_3q1TUh18hqHt85V1k",
    authDomain: "instant-stories-f41b1.firebaseapp.com",
    databaseURL: "https://instant-stories-f41b1.firebaseio.com",
    projectId: "instant-stories-f41b1",
    storageBucket: "",
    messagingSenderId: "982151406789"
  };

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

 export { config, width, height }
