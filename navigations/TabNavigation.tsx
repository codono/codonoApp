import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MyPage } from '../screens';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabIcon = ({ color, size }: any) => (
  <View style={{ backgroundColor: color, width: size, height: size }} />
);

const option = {
  tabBarIcon: ({ color, size }: any) => <TabIcon color={color} size={size} />,
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} options={option} />
      <Tab.Screen name="MyPage" component={MyPage} options={option} />
    </Tab.Navigator>
  );
};
