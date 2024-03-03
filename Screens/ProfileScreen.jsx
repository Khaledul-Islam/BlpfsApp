import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//import { MaterialCommunityIcons } from 'react-native-vector-icons';

const ProfileScreen = () => {
  // Replace with your actual profile picture URL
  const profilePictureUrl = 'https://via.placeholder.com/150';

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image source={{ uri: profilePictureUrl }} style={styles.profilePicture} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>Md Golam Habib</Text>
        <View style={styles.iconRow}>
          {/* <MaterialCommunityIcons name="email" size={20} color="#000" style={styles.icon} /> */}
          <Text style={styles.infoText}>golam.habib@blmanagedservices.com</Text>
        </View>
        <View style={styles.iconRow}>
          {/* <MaterialCommunityIcons name="phone" size={20} color="#000" style={styles.icon} /> */}
          <Text style={styles.infoText}>+8801717678134</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
  },
});

export default ProfileScreen;