import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import useSelector from "react-redux";lea
import {useSelector} from 'react-redux';
import {deleteTask} from '../../redux/taskSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const TodoList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.tasks);
  const navigation = useNavigation();

  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

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
            <MaterialIcons size={30} name="category" color={'#3177AB'} />
            <Text style={styles.complete}>{item.category}</Text>
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
            onPress={() => {
              navigation.navigate('ChangetoBook', {item});
              onDelete(item.id);
            }}>
            <AntDesign size={30} name="edit" color={'#3177AB'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      {books.length === 0 && (
        <Image
          resizeMode="contain"
          source={require('../../assets/images/basket.webp')}
          style={styles.imageW}
        />
      )}
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;
