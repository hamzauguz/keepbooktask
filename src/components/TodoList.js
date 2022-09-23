import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
//Ionicons

//import useSelector from "react-redux";lea
import {useSelector} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);
  // console.log(todos);
  const data = [
    {
      id: 1,
      title: 'Learn React Native',
    },
    {
      id: 2,
      title: 'Learn Redux Toolkit',
    },
  ];

  //delete item by checking if id is equal to the id of the item
  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

  //renderItem function with a delete button
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.author}</Text>
          <Text style={styles.title}>{item.completeDate}</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}>
          <Text>Del</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
});
