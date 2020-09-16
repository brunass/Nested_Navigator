import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../container/Settings/';
import Account from '../components/Account/';
import Notifications from '../components/Notifications/';

const Stack = createStackNavigator();

const StackRouting = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" headerMode="none">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="StackAccount" component={Account} />
      <Stack.Screen name="StackNotifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default StackRouting;
