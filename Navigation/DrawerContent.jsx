// DrawerContent.jsx
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useAuthState } from './AuthContext';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const authState = useAuthState();
  const [openMenu, setOpenMenu] = useState('');
  const [clickedChild, setClickedChild] = useState('');

  const handleToggleMenu = (rootSystemName) => {
    setOpenMenu((prevOpenMenu) =>
      prevOpenMenu === rootSystemName ? '' : rootSystemName
    );
  };

  const handleChildItemClick = (childTitle) => {
    setClickedChild(childTitle);
  };

  const renderMenuItems = () => {
    return (
      <ScrollView>
        {/* "Default" item */}
        <DrawerItem
          label={() => (
            <View>
              <Text style={styles.defaultItemText}>
                <Icon name="star" size={15} /> Menu
              </Text>
            </View>
          )}
          style={styles.defaultItem}
        />

        {/* Dynamic menu items */}
        {authState.DynamicMenu.map((rootNode, index) => (
          <View key={index} style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                handleToggleMenu(rootNode.RootSystemName);
              }}
            >
              <View style={styles.menuItemContent}>
                <Text
                  style={[
                    styles.menuItemText,
                    {
                      fontWeight:
                        openMenu === rootNode.RootSystemName ? 'bold' : 'normal',
                    },
                  ]}
                >
                  <Icon name={rootNode.RootIcon} size={15}></Icon> {rootNode.RootTitle}
                </Text>
                <Icon
                  name={
                    openMenu === rootNode.RootSystemName
                      ? 'chevron-down'
                      : 'chevron-right'
                  }
                  style={styles.menuItemIcon}
                />
              </View>
            </TouchableOpacity>
            {openMenu === rootNode.RootSystemName &&
              rootNode.ChildNodes &&
              rootNode.ChildNodes.length > 0 && (
                <View style={styles.childContainer}>
                  {rootNode.ChildNodes.map((childNode, childIndex) => (
                    <DrawerItem
                      key={childIndex}
                      label={() => (
                        <View>
                          <Text
                            style={[
                              styles.childItemText,
                              {
                                fontWeight:
                                  clickedChild === childNode.ChildTitle
                                    ? 'bold'
                                    : 'normal',
                              },
                            ]}
                          >
                            <Icon name={childNode.ChildIcon} size={12} />{' '}
                            {childNode.ChildTitle}
                          </Text>
                        </View>
                      )}
                      onPress={() => {
                        handleChildItemClick(childNode.ChildTitle);
                        navigation.navigate('Home');
                      }}
                      style={styles.childItem}
                    />
                  ))}
                </View>
              )}
          </View>
        ))}

        {/* "Sign Out" item */}
        <DrawerItem
          label={() => (
            <View>
              <Text style={styles.signOutItemText}>
                <Icon name="sign-out" size={15} /> Sign Out
              </Text>
            </View>
          )}
          onPress={() => {
            // Handle sign out
            // Example: authDispatch({ type: 'LOGOUT' });
          }}
          style={styles.signOutItem}
        />
      </ScrollView>
    );
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
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemIcon: {
    fontSize: 20,
    color: '#555',
  },
  menuItemText: {
    fontSize: 15,
    color: '#333',
  },
  childContainer: {
    marginLeft: 15,
  },
  childItem: {
    marginLeft: 15,
  },
  childItemText: {
    fontSize: 15,
    color: '#555',
  },
  defaultItem: {
    marginTop: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
  },
  defaultItemText: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  signOutItem: {
    marginTop: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
  },
  signOutItemText: {
    fontSize: 15,
    color: '#d9534f', // Bootstrap's danger color for red
    fontWeight: 'bold',
  },
});

export default DrawerContent;
