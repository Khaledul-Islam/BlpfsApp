// HomeScreen.jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeScreen = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Tab1Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Parking"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Parking',
          tabBarIcon: ({ color, size }) => (
            <Icon name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cafeteria"
        component={Tab3Screen}
        options={{
          tabBarLabel: 'Cafeteria',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cutlery" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={Tab4Screen}
        options={{
          tabBarLabel: 'Ticket',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ticket" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Tab1Screen = () => (
  <View style={styles.tabContent}>
    <Text>Tab 1 Content</Text>
  </View>
);

const Tab2Screen = () => (
  <View style={styles.tabContent}>
    <Text>Tab 2 Content</Text>
  </View>
);

const Tab3Screen = () => (
  <View style={styles.tabContent}>
    <Text>Tab 3 Content</Text>
  </View>
);

const Tab4Screen = () => (
  <View style={styles.tabContent}>
    <Text>Tab 4 Content</Text>
  </View>
);

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default HomeScreen;
