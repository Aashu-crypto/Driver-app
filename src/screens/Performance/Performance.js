import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Color } from '../../../GlobalStyles';

export default function PerformanceScreen() {
  const [activeTab, setActiveTab] = useState('Daily Rides');
  const [activeDate, setActiveDate] = useState('7-12 Jun');
  const [expanded, setExpanded] = useState(null); // to toggle FAQ

  const handleFAQToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const renderTabButton = (tabName) => (
    <TouchableOpacity
      style={[styles.tabButton, activeTab === tabName && styles.activeTabButton]}
      onPress={() => setActiveTab(tabName)}
    >
      <Text style={activeTab === tabName ? styles.activeTabText : styles.tabText}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );

  const renderDateButton = (dateRange) => (
    <TouchableOpacity
      style={[styles.dateButton, activeDate === dateRange && styles.activeDateButton]}
      onPress={() => setActiveDate(dateRange)}
    >
      <Text style={activeDate === dateRange ? styles.activeDateText : styles.dateText}>
        {dateRange}
      </Text>
    </TouchableOpacity>
  );

  const renderFAQ = (index, question) => (
    <TouchableOpacity onPress={() => handleFAQToggle(index)} key={index}>
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>{question}</Text>
        <AntDesign
          name={expanded === index ? 'up' : 'down'}
          size={18}
          color="gray"
        />
      </View>
      {expanded === index && (
        <Text style={styles.faqAnswer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      )}
    </TouchableOpacity>
  );

  const renderProgressBar = (progress, color) => (
    <View style={styles.progressBarBackground}>
      <View
        style={[
          styles.progressBarFill,
          { width: `${progress * 100}%`, backgroundColor: color },
        ]}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {renderTabButton('Daily Rides')}
        {renderTabButton('Rentals')}
        {renderTabButton('Shared')}
      </View>

      {/* Date Range Selection */}
      <View style={styles.dateContainer}>
        {renderDateButton('2-6 Jun')}
        {renderDateButton('7-12 Jun')}
        {renderDateButton('12-16 Jun')}
      </View>

      {/* Acceptance Rate */}
      <View style={styles.metricContainer}>
        <Text style={styles.metricLabel}>Acceptance rate</Text>
        <Text style={styles.metricValue}>64%</Text>
        {renderProgressBar(0.64, '#FF8A00')}
        <Text style={styles.metricDetails}>65/98 accepted rides</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Start accepting more rides</Text>
        </TouchableOpacity>
      </View>

      {/* Cancellation Rate */}
      <View style={styles.metricContainer}>
        <Text style={styles.metricLabel}>Cancellation rate</Text>
        <Text style={styles.metricValue}>34%</Text>
        {renderProgressBar(0.34, '#FF4D4D')}
        <Text style={styles.metricDetails}>21/65 rides cancelled</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Stop cancelling so many rides</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Section */}
      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>FAQs</Text>
        {['Lorem ipsum dolor sit amet...', 'Consectetur adipiscing elit...', 'Sed do eiusmod tempor...'].map((faq, index) =>
          renderFAQ(index, faq)
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F8',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor:  Color.appDefaultColor,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    fontSize: 16,
    color: '#FFF',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dateButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  activeDateButton: {
    backgroundColor: Color.appDefaultColor,
    borderColor:  Color.appDefaultColor,
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  activeDateText: {
    fontSize: 14,
    color: '#FFF',
  },
  metricContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  metricLabel: {
    fontSize: 16,
    color: '#7B7B7B',
  },
  metricValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF8A00',
    textAlign: 'right',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  metricDetails: {
    fontSize: 14,
    color: '#7B7B7B',
  },
  actionButton: {
    marginTop: 10,
    backgroundColor: '#FFE5CC',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  actionText: {
    color: '#FF8A00',
  },
  faqContainer: {
    marginBottom: 40,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqItem: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqText: {
    fontSize: 16,
    color: '#7B7B7B',
  },
  faqAnswer: {
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    color: '#7B7B7B',
    fontSize: 14,
  },
});
