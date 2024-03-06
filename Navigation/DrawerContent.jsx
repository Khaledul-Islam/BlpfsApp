// DrawerContent.jsx
import React from 'react';
import {StyleSheet, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useAuthState } from './AuthContext';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const authState = useAuthState();

  const renderMenuItems = () => {
    return authState.DynamicMenu.map((rootNode, index) => (
      <View key={index}>
        <DrawerItem
          // icon={({ color, size }) => <Icon name={rootNode.RootIcon} color={color} size={size} />}
          label={rootNode.RootTitle}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        {rootNode.ChildNodes && rootNode.ChildNodes.length > 0 && (
          <View style={styles.childContainer}>
            {rootNode.ChildNodes.map((childNode, childIndex) => (
              <DrawerItem
                key={childIndex}
                // icon={({ color, size }) => <Icon name={childNode.ChildIcon} color={color} size={size} />}
                label={childNode.ChildTitle}
                onPress={() => {
                  navigation.navigate('Home');
                }}
                style={{ marginLeft: 20 }}
              />
            ))}
          </View>
        )}
      </View>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            {renderMenuItems()}
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 1,
  },
  childContainer: {
    marginLeft: 20,
    borderBottomWidth: 1,
    borderColor: '#dedede',
  },
});

export default DrawerContent;
