//rncs
import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

export default class TambahKontak extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <Text style={styles.label}> Nama : </Text>
        <TextInput placeholder="Masukan Nama" style={styles.textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 50,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});
