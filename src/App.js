import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Config from '../config/'; 

class App extends Component {

  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp(Config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 40 }}>
            <Button onPress={() => firebase.auth().signOut()} >
              Log out
            </Button>
          </View>
          );
      case false:
        return <LoginForm />;
      default:
        return <View><Spinner size={'large'} /></View>;
    }
  }
  
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        { this.renderContent() }
      </View>
    );
  }
}


export default App;
