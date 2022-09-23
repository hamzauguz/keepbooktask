import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const AddtoBookForm = ({
  value,
  onChangeText,
  onPress,
  value2,
  onChangeText2,
  open,
  onPressCompleteDate,
  onConfirm,
  onCancel,
  date,
  hideText,
}) => {
  const [showDate, setShowDate] = useState(false);
  console.log(date);
  return (
    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Book Name..."
        onChangeText={onChangeText}
        value={value}
      />
      {hideText && <Text>{date.toString()}</Text>}
      <TouchableOpacity onPress={onPressCompleteDate} style={styles.date}>
        <Text style={{color: 'white', fontWeight: '600'}}>Completed Date</Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <TextInput
        style={styles.descInputStyle}
        placeholder="Description..."
        onChangeText={onChangeText2}
        value={value2}
      />

      <TouchableOpacity style={styles.addTouch} onPress={onPress}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddtoBookForm;

const styles = StyleSheet.create({
  todoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  textInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
  },
  descInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '90%',
    height: 200,
    borderRadius: 5,
  },
  textInputView: {
    alignItems: 'center',
    height: '100%',
  },
  addTouch: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
  },
  date: {
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#554C4A',
  },
});
