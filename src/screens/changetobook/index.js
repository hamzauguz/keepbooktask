import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux/taskSlice';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const ChangetoBook = ({route}) => {
  const categoryData = [
    'Bilim Kurgu',
    'Dünya Klasikleri',
    'Tarih',
    'Fantezi',
    'Psikoloji',
  ];

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [todo, setTodo] = useState(route.params.item.name);
  const [author, setAuthor] = useState(route.params.item.author);
  const [date, setDate] = useState(new Date(route.params.item.completeDate));
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const [selected, setSelected] = useState(route.params.item.category);
  const [hideText, setHideText] = useState(true);

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('You need to enter a task');
      setTodo('');
      setAuthor('');
      return;
    }
    navigation.navigate('Home');
    dispatch(
      addTask({
        task: todo,
        author: author,
        completeDate: date.toString(),
        category: selected,
      }),
    );
    setTodo('');
    setAuthor('');
  };

  return (
    <View style={styles.main}>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Book Name..."
          onChangeText={setTodo}
          value={todo}
        />
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.date}>
          <MaterialIcons size={30} name="date-range" color={'#3177AB'} />
          {hideText == true ? (
            <Text style={styles.leftPozitionChoose}>{date.toString()}</Text>
          ) : (
            <Text style={styles.leftPozition}>Please Choose a Date...</Text>
          )}
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setShowDate(true);
            setHideText(true);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View style={styles.selectOption}>
          <Ionicons size={30} name="options" color={'#3177AB'} />
          <SelectDropdown
            defaultValue={'sad'}
            data={categoryData}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem);

              setSelected(selectedItem);
            }}
            defaultButtonText={selected}
            buttonStyle={styles.optionButon}
          />
        </View>
        <TextInput
          style={styles.descInputStyle}
          placeholder="Description..."
          onChangeText={setAuthor}
          value={author}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.addTouch} onPress={onSubmitTask}>
        <Text style={styles.buton}>Add to Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangetoBook;
