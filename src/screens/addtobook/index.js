import {View, Text, Alert} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux/taskSlice';
import AddtoBookForm from '../../components/addtobookform/index.js';

const AddtoBook = () => {
  const navigation = useNavigation();
  const [todo, setTodo] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const dispatch = useDispatch();

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
      }),
    );
    setTodo('');
    setAuthor('');
  };

  return (
    <View>
      <AddtoBookForm
        onChangeText={setTodo}
        value={todo}
        onPress={onSubmitTask}
        onChangeText2={setAuthor}
        value2={author}
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setShowDate(true);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        onPressCompleteDate={() => setOpen(true)}
        hideText={showDate == true}
      />
    </View>
  );
};

export default AddtoBook;
