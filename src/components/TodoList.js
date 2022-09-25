import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import useSelector from "react-redux";lea
import {useSelector} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);
  // console.log(todos);

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
        <View style={styles.space}>
          <View style={styles.rows}>
            <AntDesign size={30} name="book" color={'#3177AB'} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.rows}>
            <MaterialIcons size={30} name="description" color={'#3177AB'} />
            <Text style={styles.desc}>{item.author}</Text>
          </View>
          <View style={styles.rows}>
            <MaterialIcons size={30} name="date-range" color={'#3177AB'} />
            <Text style={styles.complete}>{item.completeDate}</Text>
          </View>
        </View>
        <View style={styles.rightPlace}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}>
            <AntDesign size={30} name="delete" color={'#3177AB'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}>
            <AntDesign size={30} name="edit" color={'#3177AB'} />
          </TouchableOpacity>
        </View>
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

    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    alignItems: 'center',
  },
  space: {
    justifyContent: 'space-between',
  },
  name: {width: '60%', fontSize: 20},
  desc: {width: '60%', fontSize: 17},
  complete: {fontSize: 16, width: '75%'},
  rightPlace: {
    width: '25%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
