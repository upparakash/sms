import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Modal, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TeacherLeave = () => {
  const navigation = useNavigation();
  const [employeeid, setEmployeeId] = useState('');
  const [purpose, setPurpose] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!employeeid.trim()) {
      newErrors.employeeid = 'Please enter your employee ID';
    }
    if (!purpose.trim()) {
      newErrors.purpose = 'Purpose is required';
    }
    if (!startdate.trim()) {
      newErrors.startdate = 'Enter start date';
    }
    if (!enddate.trim()) { // Corrected here
      newErrors.enddate = 'Enter end date';
    }
    if (!description.trim()) {
      newErrors.description = 'Explain your reason';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const Leave = async () => {
    if (validate()) {
      axios.post('http://10.0.2.2:3000/leave', {
        employeeid,
        purpose,
        startdate,
        enddate,
        description,
      })
      .then(response => {
        if (response.status === 200) {
          togglePopup();
        } else {
          console.error('Failed to send', response.status);
        }
      })
      .catch(error => {
        console.error('Axios error', error);
      });
    }
  };

  const clearError = (field) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.headding}>Employee Id</Text>
      <TextInput
        style={styles.text}
        value={employeeid}
        placeholder="Enter your employee ID here"
        onChangeText={(text) => { setEmployeeId(text); clearError('employeeid'); }}
      />
      {errors.employeeid && <Text style={styles.error}>{errors.employeeid}</Text>}
      <Text style={styles.headding}>Purpose</Text>
      <TextInput
        style={styles.text}
        value={purpose}
        placeholder="Purpose of Leave"
        onChangeText={(text) => { setPurpose(text); clearError('purpose'); }}
      />
      {errors.purpose && <Text style={styles.error}>{errors.purpose}</Text>}
      <Text style={styles.headding}>Start Date</Text>
      <TextInput
        style={styles.text}
        value={startdate}
        placeholder="Starting Date YYYY-MM-DD"
        onChangeText={(text) => { setStartDate(text); clearError('startdate'); }}
      />
      {errors.startdate && <Text style={styles.error}>{errors.startdate}</Text>}
      <Text style={styles.headding}>End Date</Text>
      <TextInput
        style={styles.text}
        value={enddate}
        placeholder="Ending Date YYYY-MM-DD"
        onChangeText={(text) => { setEndDate(text); clearError('enddate'); }}
      />
      {errors.enddate && <Text style={styles.error}>{errors.enddate}</Text>}
      <Text style={styles.headding}>Description</Text>
      <TextInput
        style={styles.description}
        value={description}
        multiline
        numberOfLines={18}
        placeholder="Explain the Leave Purpose"
        onChangeText={(text) => { setDescription(text); clearError('description'); }}
      />
      {errors.description && <Text style={styles.error}>{errors.description}</Text>}

      <TouchableOpacity style={styles.sendButton} onPress={Leave}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
      <Modal
        visible={showPopup}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          togglePopup();
        }}
      >
        <View style={styles.popup}>
          <Text style={styles.popupText}>Leave Letter Sent Successfully</Text>
          <TouchableOpacity
            onPress={() => {
              togglePopup();
              navigation.navigate('TeacherHomeScreen');
            }}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headding:{
    fontSize:18,
    color:'black',
    textAlign:'left',
    fontWeight:'bold',
  },
  text: {
    borderWidth: 1,
    borderColor: '#3F1175',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: 'black',
    marginVertical: 10,
  },
  description: {
    borderWidth: 3,
    borderColor: '#3F1175',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: 'black',
    textAlignVertical: 'top',
    marginVertical: 10,
  },
  sendButton: {
    backgroundColor: '#3F1175',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  popup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default TeacherLeave;
