import React, { useState } from 'react';
import { ScrollView ,View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function InboundList() {
  const [senderName, setSenderName] = useState('');
  const [senderMobileNumber, setSenderMobileNumber] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverMobileNumber, setReceiverMobileNumber] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [dispatchType, setDispatchType] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
 
 
 
 
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <Text style={styles.label}>Sender Name:</Text>
      <TextInput
        style={styles.input}
        value={senderName}
        onChangeText={setSenderName}
      />

      <Text style={styles.label}>Sender Mobile Number:</Text>
      <TextInput
        style={styles.input}
        value={senderMobileNumber}
        onChangeText={setSenderMobileNumber}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Sender Email:</Text>
      <TextInput
        style={styles.input}
        value={senderEmail}
        onChangeText={setSenderEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Sender Address:</Text>
      <TextInput
        style={styles.input}
        value={senderAddress}
        onChangeText={setSenderAddress}
        multiline
      />

      <Text style={styles.label}>Receiver Name:</Text>
      <TextInput
        style={styles.input}
        value={receiverName}
        onChangeText={setReceiverName}
      />

      <Text style={styles.label}>Receiver Mobile Number:</Text>
      <TextInput
        style={styles.input}
        value={receiverMobileNumber}
        onChangeText={setReceiverMobileNumber}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Receiver Email:</Text>
      <TextInput
        style={styles.input}
        value={receiverEmail}
        onChangeText={setReceiverEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Receiver Address:</Text>
      <TextInput
        style={styles.input}
        value={receiverAddress}
        onChangeText={setReceiverAddress}
        multiline
      />

      <Text style={styles.label}>Dispatch Type:</Text>
      <Picker
        selectedValue={dispatchType}
        onValueChange={(itemValue, itemIndex) => setDispatchType(itemValue)}>
        <Picker.Item label="Select Dispatch Type" value="" />
        <Picker.Item label="Type 1" value="Type 1" />
        <Picker.Item label="Type 2" value="Type 2" />
      </Picker>

      <Text style={styles.label}>Courier Reference Number:</Text>
      <TextInput
        style={styles.input}
        value={referenceNumber}
        onChangeText={setReferenceNumber}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
  },
});