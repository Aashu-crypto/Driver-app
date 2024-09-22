import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { Color } from "../../../GlobalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const ChatScreen = () => {
  const messages = [
    { id: "1", text: "I'm on my way" },
    { id: "2", text: "Struck in traffic" },
    { id: "3", text: "I've arrived" },
    { id: "4", text: "I'm in White Swift" },
    { id: "5", text: "Be there in 5 min" },
  ];

  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
      <View style={styles.iconContainer}>
        <MaterialIcons name="send" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/img/riderPic.png")} // Replace with the user's profile picture
          style={styles.profileImage}
        />
        <Text style={styles.username}>Ajay</Text>
        <TouchableOpacity style={styles.callButton}>
          <Text>📞</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={styles.chatList}
      />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message Ajay"
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.appDefaultColor,
    padding: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    flex: 1,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  callButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  chatList: {
    padding: 20,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.appDefaultColor,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  messageText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,

  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 10,
    paddingLeft: 20,
  },
  sendButton: {
    marginLeft: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
