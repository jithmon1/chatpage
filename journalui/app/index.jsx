import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { Entypo, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';

export default function ChatUIWithDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Dynamically get and format the current date
    const date = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.dateText}>{currentDate}</Text>
        <TouchableOpacity style={styles.saveButton} onPress={() => alert('Save button clicked!')}>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
      </View>

      {/* Main Scrollable Area */}
      <ScrollView contentContainerStyle={styles.scrollView}></ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Entypo name="image" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="video-camera" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="camera" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="mic" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="send" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  dateText: { fontSize: 18, fontWeight: 'bold' },
  saveButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  saveText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  scrollView: { flexGrow: 1, backgroundColor: '#f2f2f2' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
