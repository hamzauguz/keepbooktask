import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import TodoList from '../../components/todolist';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TodoList />
      <TouchableOpacity
        style={styles.buton}
        onPress={() => navigation.navigate('AddtoBook')}>
        <Text style={styles.bookTitle}>Add to Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
