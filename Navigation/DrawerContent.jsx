// DrawerContent.jsx
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useAuthState } from './AuthContext';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const authState = useAuthState();
  const [openMenu, setOpenMenu] = useState('');

  const handleToggleMenu = (rootSystemName) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === rootSystemName ? '' : rootSystemName));
  };

  const renderMenuItems = () => {
    return authState.DynamicMenu.map((rootNode, index) => (
      <View key={index} style={styles.menuItem}>
        <TouchableOpacity
          onPress={() => {
            handleToggleMenu(rootNode.RootSystemName);
          }}
        >
          <View style={styles.menuItemContent}>
            <Text style={[styles.menuItemText, { fontWeight: openMenu === rootNode.RootSystemName ? 'bold' : 'normal' }]}>
              {rootNode.RootTitle}
            </Text>
            <Icon
              name={openMenu === rootNode.RootSystemName ? 'chevron-down' : 'chevron-right'}
              style={styles.menuItemIcon}
            />
          </View>
        </TouchableOpacity>
        {openMenu === rootNode.RootSystemName && rootNode.ChildNodes && rootNode.ChildNodes.length > 0 && (
          <View style={styles.childContainer}>
            {rootNode.ChildNodes.map((childNode, childIndex) => (
              <DrawerItem
                key={childIndex}
                label={childNode.ChildTitle}
                onPress={() => {
                  navigation.navigate('Home');
                }}
                style={styles.childItem}
              />
            ))}
          </View>
        )}
      </View>
    ));
  };

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>{renderMenuItems()}</View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  menuItemIcon: {
    fontSize: 20,
    color: '#555',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  childContainer: {
    marginLeft: 30,
  },
  childItem: {
    marginLeft: 10,
    borderBottomWidth: 0, // Remove the bottom border for child items
  },
});

export default DrawerContent;
