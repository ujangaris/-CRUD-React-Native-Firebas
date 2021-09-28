//rncs
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontak: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Kontak/' + this.props.route.params.id)
      .once('value', quertSnapShot => {
        let data = quertSnapShot.val() ? quertSnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontak: kontakItem,
        });
      });
  }
  render() {
    const {kontak} = this.state;
    return (
      <View>
        <Text> Detail Kontak {kontak.nama} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
