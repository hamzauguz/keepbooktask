import {View, Text} from 'react-native';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import TodoList from './src/components/TodoList';
import Home from './src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangetoBook from './src/screens/changetobook';
import AddtoBook from './src/screens/addtobook';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChangetoBook" component={ChangetoBook} />
          <Stack.Screen name="AddtoBook" component={AddtoBook} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
