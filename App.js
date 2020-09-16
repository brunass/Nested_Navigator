import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsRouting from './src/routes/routes';

const App = () => {
  return (
    <NavigationContainer>
      <TabsRouting />
    </NavigationContainer>
  );
};

export default App;
