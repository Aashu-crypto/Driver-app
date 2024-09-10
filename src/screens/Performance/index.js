import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function InboxScreen() {
  const data = [
    {
      id: '1',
      title: 'Zaptric points you towards savings 😃',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu....',
      timestamp: '17 hr',
    },
    {
      id: '2',
      title: 'Need oil change? 🚗',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu....',
      timestamp: '4 May',
    },
    {
      id: '3',
      title: 'Zaptric points you towards savings 😃',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu....',
      timestamp: '7 May',
    },
    {
      id: '4',
      title: 'Zaptric points towards savings 😃😁',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu....',
      timestamp: '2 May',
    },
    {
      id: '5',
      title: 'Zaptric pointss savings 😃😁',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu....',
      timestamp: '1 May',
    },
  ];

  const renderMessageItem = ({ item }) => (
    <View style={styles.messageCard}>
      <View style={styles.messageContent}>
        <Text style={styles.messageTitle}>{item.title}</Text>
        <Text style={styles.messageDescription}>{item.description}</Text>
        <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <AntDesign name="close" size={18} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inbox</Text>
        <TouchableOpacity>
          <AntDesign name="setting" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F8',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageList: {
    paddingBottom: 20,
  },
  messageCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  messageContent: {
    flex: 1,
    marginRight: 10,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  messageDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#AAA',
  },
  closeButton: {
    padding: 5,
  },
});
