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
import {useDispatch, useSelector} from 'react-redux';
import {editTask} from '../../redux/taskSlice';

const ChangetoBook = ({route}) => {
  const categoryData = [
    'Bilim Kurgu',
    'Dünya Klasikleri',
    'Tarih',
    'Fantezi',
    'Psikoloji',
  ];

  console.log('examplea..... ', route);
  console.log('examplea..... ', route.params.item.name);
  console.log('examplea..... ', route.params.item.author);
  console.log('examplea..... ', route.params.item.category);
  console.log('examplea..... ', route.params.item.completeDate);

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const editTaskFromList = task => {
    const taskToEdit = tasks.find(item => item.id === task.id);
    const taskIndex = tasks.indexOf(taskToEdit);
    setEditingTaskIndex(taskIndex);
    setInputValue(taskToEdit.title);
  };

  const handleSubmit = () => {
    const editingItem = tasks[editingTaskIndex];
    editingItem.name = todo;
    dispatch(editTask(editingTaskIndex, editingItem));
  };

  const [inputValue, setInputValue] = useState(route.id);
  const [todo, setTodo] = useState(route.params.item.name);
  const [author, setAuthor] = useState(route.params.item.author);
  const [date, setDate] = useState(new Date(route.params.item.completeDate));
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [data, setData] = useState([]);
  const [bookData, setBookData] = useState('');
  const [selected, setSelected] = useState(route.params.item.category);
  const [hideText, setHideText] = useState(true);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const onSubmitTask = () => {
    setOpen(true);
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

      <TouchableOpacity style={styles.addTouch} onPress={handleSubmit}>
        <Text style={styles.buton}>Add to Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangetoBook;

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
  selectOption: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#B8C4CC',
    margin: 10,
    height: 40,
    borderRadius: 5,
  },
  optionButon: {
    backgroundColor: '#B8C4CC',
    height: 40,
    margin: 10,
  },
});
