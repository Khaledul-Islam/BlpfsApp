import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios'; 
import _ from 'lodash';


export default function DataTable() {


  const [columns, setColumns] = useState([
    'Name',
    'Gender',
    'Breed',
    'Weight',
    // 'Age',
    'Action' // Add Action column
  ]);
  const [direction, setDirection] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://mocki.io/v1/7ab5400f-ef28-4d39-8302-9cdfa632920f?page=${page}`);
      const newData = response.data; // Assuming results is the array containing the data
      setPets([...pets, ...newData]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const sortTable = (column) => {
    const newDirection = direction === 'desc' ? 'asc' : 'desc';
    const sortedData = _.orderBy(filteredPets, [column], [newDirection]);
    setSelectedColumn(column);
    setDirection(newDirection);
    setFilteredPets(sortedData);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = pets.filter((pet) =>
      pet.Name.toLowerCase().includes(query.toLowerCase()) || pet.Breed.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPets(filteredData);
  };

  const handleEdit = (name) => {
    // Navigate to another page with the name parameter
   // navigation.navigate('EditPage', { name: name });
   console.log(name);
  };
  const handAddbutton = () =>{
console.log('Add Button');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handAddbutton} style={styles.addButton}>
      <MaterialCommunityIcons name="plus" size={20} color="white" />
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredPets}
        style={{ width: '100%' }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? '#F0FBFC' : 'white' }}>
            <Text style={{ ...styles.columnRowTxt, fontWeight: 'bold' }}>{item.Name}</Text>
            <Text style={styles.columnRowTxt}>{item.Gender}</Text>
            <Text style={styles.columnRowTxt}>{item.Breed}</Text>
            <Text style={styles.columnRowTxt}>{item.Weight}</Text>
            {/* <Text style={styles.columnRowTxt}>{item.Age}</Text> */}
            <TouchableOpacity onPress={() => handleEdit(item.Name)}>
            <MaterialCommunityIcons name="pencil" size={20} color="gray" 
             style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.tableHeader}>
            {columns.map((column, index) => (
              <TouchableOpacity key={index} style={styles.columnHeader} onPress={() => sortTable(column)}>
                <Text style={styles.columnHeaderTxt}>
                  {column + ' '}
                  {selectedColumn === column && (
                    <MaterialCommunityIcons
                      name={direction === 'desc' ? 'arrow-down-drop-circle' : 'arrow-up-drop-circle'}
                    />
                  )}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        }
        ListFooterComponent={
          <TouchableOpacity onPress={handAddbutton} style={styles.addButton}>
             <MaterialCommunityIcons name="plus" size={20} color="white" />
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchContainer: {
    width: '90%',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#37C2D0',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  columnHeader: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnHeaderTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  columnRowTxt: {
    width: '20%',
    textAlign: 'center',
  },
  editButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  
});
