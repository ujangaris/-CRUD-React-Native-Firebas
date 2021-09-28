// rnfe
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailKontak, EditKontak, Home, TambahKontak} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TambahKontak" component={TambahKontak} />
      <Stack.Screen name="DetailKontak" component={DetailKontak} />
      <Stack.Screen name="EditKontak" component={EditKontak} />
    </Stack.Navigator>
  );
};

export default Router;
