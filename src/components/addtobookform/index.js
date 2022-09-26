import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

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
        <View style={styles.iconStyle}>
          <Ionicons size={30} name="options" color={'#3177AB'} />
          <SelectDropdown
            data={data}
            onSelect={onSelect}
            buttonStyle={styles.selectbutonStyle}
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
