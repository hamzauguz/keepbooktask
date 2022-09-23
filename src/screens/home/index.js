import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import TodoList from '../../components/TodoList';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 100}}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'gray',
          height: 50,
          display: 'flex',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('AddtoBook')}>
        <Text>Kitap Ekle</Text>
      </TouchableOpacity>
      <TodoList />
    </View>
  );
};

export default Home;
