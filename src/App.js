import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AppRegistry,Alert, StyleSheet } from 'react-native';
import { Text, TextInput, Button, View } from 'react-native';
import { Image } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: this.props.url//'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.idCode}!</Text>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'powderblue' }}>
          <Greeting idCode='012' />
          <Greeting idCode='013' />
          <Greeting idCode='0156' />
          <Blink idCode='0156' text='1234' />
          <Text style={styles.red}>just red</Text>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: 'steelblue' }}>
          <Bananas url='https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' />
        </View>
        <View style={{
          flexDirection: 'row', flex: 1, backgroundColor: 'steelblue'
        }}>
          <PizzaTranslator />
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={{
            flex: 1, backgroundColor: 'powderblue'
          }} />
          <View style={{
            flex: 1, backgroundColor: 'skyblue'
          }} />
          <View style={{
            flex: 1, backgroundColor: 'steelblue'
          }} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <View style={{ width: 10, height: 10, backgroundColor: 'powderblue' }} />
          <View style={{ width: 10, height: 10, backgroundColor: 'skyblue' }} />
          <View style={{ width: 10, height: 10, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}


export default LotsOfGreetings;

//export default App;
