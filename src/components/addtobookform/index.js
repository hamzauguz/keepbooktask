import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  data,
  onSelect,
}) => {
  const [showDate, setShowDate] = useState(false);
  const categoryData = [
    'Bilim Kurgu',
    'Dünya Klasikleri',
    'Tarih',
    'Fantezi',
    'Psikoloji',
  ];
  console.log(date);
  return (
    <View style={styles.main}>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Book Name..."
          onChangeText={onChangeText}
          value={value}
        />
        <TouchableOpacity onPress={onPressCompleteDate} style={styles.date}>
          <MaterialIcons size={30} name="date-range" color={'#3177AB'} />
          {hideText ? (
            <Text style={styles.leftPozitionChoose}>{date.toString()}</Text>
          ) : (
            <Text style={styles.leftPozition}>Please Choose a Date...</Text>
          )}
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',
            backgroundColor: '#B8C4CC',
            margin: 10,
            height: 40,
            borderRadius: 5,
          }}>
          <Ionicons size={30} name="options" color={'#3177AB'} />
          <SelectDropdown
            data={categoryData}
            onSelect={onSelect}
            buttonStyle={{
              backgroundColor: '#B8C4CC',
              height: 40,

              margin: 10,
            }}
          />
        </View>
        <TextInput
          style={styles.descInputStyle}
          placeholder="Description..."
          onChangeText={onChangeText2}
          value={value2}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.addTouch} onPress={onPress}>
        <Text style={styles.buton}>Add to Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddtoBookForm;

const styles = StyleSheet.create({
  main: {height: '100%'},
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
    height: '90%',
  },
  addTouch: {
    backgroundColor: '#3177AB',
    padding: 10,

    width: '100%',
    height: '10%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    width: '90%',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#B8C4CC',
    flexDirection: 'row',
  },
  buton: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  leftPozition: {
    left: 40,
    color: 'black',
    fontWeight: '400',
    fontSize: 17,
  },
  leftPozitionChoose: {
    left: 30,
    color: 'black',
    fontWeight: '600',
  },
});
