import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyASQWPRWq3EgKLXFBcmXaxbO9IUL0TbPXI',
  authDomain: 'test-5fe1c.firebaseapp.com',
  databaseURL: 'https://test-5fe1c.firebaseio.com',
  projectId: 'test-5fe1c',
  storageBucket: 'test-5fe1c.appspot.com',
  messagingSenderId: '659378443697',
}

firebase.initializeApp(config)

export default firebase
