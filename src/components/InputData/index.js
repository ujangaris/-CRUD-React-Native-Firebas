//rnfes
import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
//reusable component/ component yang bisa dipakai berkali2
const InputData = ({label, placeholder, keyboardType, isTextArea}) => {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}> {label} </Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          style={styles.textInputArea}
          keyboardType={keyboardType}
        />
      </>
    );
  }
  return (
    <>
      <Text style={styles.label}> {label} </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
