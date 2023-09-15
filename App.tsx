import React from 'react';
import { Tabs } from './navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
