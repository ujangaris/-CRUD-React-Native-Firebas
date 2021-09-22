//rncs
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 50,
  },
});
