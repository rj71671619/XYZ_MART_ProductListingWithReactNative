import { View, Text, StyleSheet } from 'react-native';
import ProductListing from './Components/ProductListing';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './navigation/Tab';
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 2,
    marginTop: 15,
  },
});

export default App;