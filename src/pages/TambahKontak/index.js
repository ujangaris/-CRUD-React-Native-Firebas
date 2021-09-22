//rncs
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {InputData} from '../../components';

export default class TambahKontak extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <InputData label="Nama :" placeholder="Masukan Nama" />
        <InputData
          label="No. HP :"
          placeholder="Masukan No. HP"
          keyboardType="number-pad"
        />
        <InputData
          label="Alamat :"
          placeholder="Masukan Alamat"
          isTextArea={true}
        />
        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 50,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
