import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const contactsData = [
  { id: 1, name: "Alice Charlie", number: "123-456-7890" },
  { id: 22, name: "Amanda Henry", number: "987-654-3210" },
  { id: 32, name: "Billy Joe", number: "987-654-3210" },
  { id: 42, name: "Ben Afflick", number: "987-654-3210" },
  { id: 3, name: "Charlie", number: "555-555-5555" },
  { id: 4, name: "David", number: "111-111-1111" },
  { id: 5, name: "Eve", number: "222-222-2222" },
  { id: 6, name: "Everest Charlie", number: "333-333-3333" },
  { id: 7, name: "Grace Ruby", number: "444-444-4444" },
  { id: 8, name: "Henry", number: "555-555-5555" },
  { id: 9, name: "Ivy", number: "666-666-6666" },
  { id: 10, name: "Jack", number: "777-777-7777" },
  { id: 11, name: "Kate", number: "888-888-8888" },
  { id: 12, name: "Liam", number: "999-999-9999" },
  { id: 13, name: "Mia", number: "000-000-0000" },
  { id: 14, name: "Noah", number: "111-111-1111" },
  { id: 15, name: "Oliver", number: "222-222-2222" },
  { id: 16, name: "Penelope Henry", number: "333-333-3333" },
  { id: 17, name: "Quinn", number: "444-444-4444" },
  { id: 18, name: "Ruby", number: "555-555-5555" },
  { id: 19, name: "Samuel", number: "666-666-6666" },
  { id: 20, name: "Taylor", number: "777-777-7777" },
];

const generateAlphabets = (contacts) => {
  const alphabets = [];
  contacts.forEach((contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!alphabets.includes(firstLetter)) {
      alphabets.push(firstLetter);
    }
  });
  return alphabets.sort();
};

const renderContactItem = ({ item }) => (
  <View style={styles.contactItem}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{item.name.charAt(0).toUpperCase()}</Text>
    </View>
    <View style={styles.contactInfo}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactNumber}>{item.number}</Text>
    </View>
  </View>
);

const Contacts = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contactsData);

  const alphabets = generateAlphabets(filteredContacts);

  useEffect(() => {
    const filtered = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../../assets/x.png")}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#999999"
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <FlatList
        data={alphabets}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.alphabet}>{item}</Text>
            <FlatList
              data={filteredContacts.filter(
                (contact) => contact.name.charAt(0).toUpperCase() === item
              )}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderContactItem}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    height: "10%",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchBar: {
    borderBottomWidth: 1,
    fontSize: 26,
    borderBottomColor: "#3B3D38",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 20,
    color: "#999999",
  },
  alphabet: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#6FCF97",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 24,
  },
  contactInfo: {
    marginLeft: 20,
  },
  contactName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactNumber: {
    color: "#999999",
    fontSize: 16,
  },
});

export default Contacts;
