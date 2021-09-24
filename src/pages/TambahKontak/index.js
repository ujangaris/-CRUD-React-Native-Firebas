//rncs
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export default class TambahKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomorHP: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.nama && this.state.nomorHP && this.state.alamat) {
      const kontakReferensi = FIREBASE.database().ref('Kontak');
      const kontak = {
        nama: this.state.nama,
        nomorHP: this.state.nomorHP,
        alamat: this.state.alamat,
      };

      kontakReferensi
        .push(kontak)
        .then(data => {
          Alert.alert('Sukses', 'Kontak Tersimpan');
          this.props.navigation.replace('Home');
        })
        .catch(error => {
          console.log('Error : ', error);
        });
    } else {
      Alert.alert('Error', 'Nama, Nomor HP, dan Alamat wajib diisi');
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama :"
          placeholder="Masukan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="No. HP :"
          placeholder="Masukan No. HP"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.nomorHP}
          namaState="nomorHP"
        />
        <InputData
          label="Alamat :"
          placeholder="Masukan Alamat"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
        />
        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
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
