import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import StackRouting from './stackRouting.routes';

const Tab = createBottomTabNavigator();

const TabsRouting = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={StackRouting} />
    </Tab.Navigator>
  );
};

export default TabsRouting;
