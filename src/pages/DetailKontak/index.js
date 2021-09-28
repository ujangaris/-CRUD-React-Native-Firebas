//rncs
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class DetailKontak extends Component {
  render() {
    return (
      <View>
        <Text> Detail Kontak {this.props.route.params.id} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
