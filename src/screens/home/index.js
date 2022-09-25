import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TodoList from '../../components/TodoList';
import {useNavigation} from '@react-navigation/native';

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

const styles = StyleSheet.create({
  main: {
    height: '100%',
    justifyContent: 'space-between',
  },
  buton: {
    alignItems: 'center',
    backgroundColor: '#3177AB',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
  },
  bookTitle: {fontSize: 24, fontWeight: '600', color: 'white'},
});
