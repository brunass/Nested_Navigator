import React from 'react';
import {Button, View} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="Go to Stack Notifications"
        onPress={() => navigation.navigate('StackNotifications')}
      />
      <Button
        title="Go to Stack Account"
        onPress={() => navigation.navigate('StackAccount')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Settings;
