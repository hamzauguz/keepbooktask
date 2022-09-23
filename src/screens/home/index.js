import {View, Text} from 'react-native';
import React from 'react';
import TodoHeader from '../../components/TodoHeader';
import TodoList from '../../components/TodoList';

const Home = () => {
  return (
    <View style={{marginTop: 100}}>
      <TodoHeader />
      <TodoList />
    </View>
  );
};

export default Home;
