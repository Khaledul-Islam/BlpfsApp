// HomeScreen.jsx
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, BackHandler, Alert, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeScreen = (props) => {
  //for Android
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit App', 'Do you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Exit',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  // for iOS
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        props.navigation.goBack();
        return true;
      };

      if (Platform.OS === 'ios') {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
      }

      return () => {
        if (Platform.OS === 'ios') {
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }
      };
    }, [props.navigation])
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Tab1Screen}
        options={{
          tabBarLabel: 'Dashboard',
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
        name="Profile"
        component={Tab4Screen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
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
    alignItems: 'center',
  },
});

export default HomeScreen;
