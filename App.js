import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import SearchBar from './src/components/SearchBar';
import ItemList from './src/components/ItemList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f1f1f1',
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <SearchBar />
      <ItemList />
    </View>
  </Provider>
);

export default App;
