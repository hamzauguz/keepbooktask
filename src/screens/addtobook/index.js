import {View, Text, Alert} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux/taskSlice';
import AddtoBookForm from '../../components/addtobookform/index.js';
import axios from 'axios';
import {useEffect} from 'react';

const AddtoBook = () => {
  const navigation = useNavigation();
  const [todo, setTodo] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [data, setData] = useState([]);
  const [bookData, setBookData] = useState('');
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();

  const categoryData = [
    'Bilim Kurgu',
    'Dünya Klasikleri',
    'Tarih',
    'Fantezi',
    'Psikoloji',
  ];
  const getData = () => {
    axios
      .get(
        'https://res.cloudinary.com/drxffezfe/raw/upload/v1661977358/book-categories_qbktat.json',
      )
      .then(res => {
        console.log('theres: ', res.data.data);
        const filter = res.data.data;

        setBookData(filter);
      });
  };

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

  useEffect(() => {
    //getData();

    getData();
  }, []);

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
        data={categoryData}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem);
          setSelected(selectedItem);
        }}
      />
    </View>
  );
};

export default AddtoBook;
