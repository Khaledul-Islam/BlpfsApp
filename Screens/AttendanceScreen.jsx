import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const AttendanceScreen = ({ data = [] }) => {
  const renderItem = ({ item }) => {
    const { name, date, status, hoursWorked } = item;
    return (
      <View style={styles.attendanceItem}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.infoRow}>
          {/* <MaterialCommunityIcons name="calendar" size={20} color="#000" style={styles.icon} /> */}
          <Text style={styles.infoText}>{date}</Text>
        </View>
        <View style={styles.infoRow}>
          {/* <MaterialCommunityIcons name="clock-outline" size={20} color="#000" style={styles.icon} /> */}
          <Text style={styles.infoText}>{status}</Text>
        </View>
        {hoursWorked && (
          <View style={styles.infoRow}>
            {/* <MaterialCommunityIcons name="clock" size={20} color="#000" style={styles.icon} /> */}
            <Text style={styles.infoText}>{hoursWorked} hours</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Attendance</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  attendanceItem: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
  },
});

export default AttendanceScreen;