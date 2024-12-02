import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const App = () => {
  const [box1Scale] = useState(new Animated.Value(1));
  const [box2Scale] = useState(new Animated.Value(1));

  const handlePressBox1 = () => {
    Animated.sequence([
      Animated.timing(box1Scale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(box1Scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      })
    ]).start();
  };

  const handlePressBox2 = () => {
    Animated.sequence([
      Animated.timing(box2Scale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(box2Scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      })
    ]).start();
  };

  return (
    <LinearGradient
      colors={['#f0f4fd', '#e6eaf4']}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>SULTAN FADHIL 5C</Text>
        <Text style={styles.headerText}>Interactive Design</Text>
        <Text style={styles.subtitleText}>Touch the boxes to interact</Text>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={handlePressBox1}
        >
          <Animated.View 
            style={[
              styles.box1, 
              { 
                transform: [{ 
                  scale: box1Scale 
                }],
                shadowColor: '#ff7f7f',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5
              }
            ]}
          >
            <Text style={styles.boxText}>Box 1</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={handlePressBox2}
        >
          <Animated.View 
            style={[
              styles.box2, 
              { 
                transform: [{ 
                  scale: box2Scale 
                }],
                shadowColor: '#7fafff',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5
              }
            ]}
          >
            <Text style={styles.boxText}>Box 2</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3a4b6d',
    letterSpacing: 1,
  },
  subtitleText: {
    fontSize: 16,
    color: '#7a8ba6',
    marginTop: 8,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
  },
  box1: {
    width: width * 0.35,
    height: width * 0.35,
    backgroundColor: '#ff7f7f',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,127,127,0.2)',
  },
  box2: {
    width: width * 0.35,
    height: width * 0.35,
    backgroundColor: '#7fafff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(127,175,255,0.2)',
  },
  boxText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default App;