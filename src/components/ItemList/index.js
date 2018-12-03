/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Item from '../Item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  error: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorSign: {
    fontSize: 50,
  },
  errorHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

const ItemList = ({ error, items }) => {
  if (error || items && !items.length) {
    return (
      <View style={styles.error}>
        <Text accessibilityHint='Warning!' style={styles.errorSign}>⚠️</Text>
        <Text style={styles.errorHeader}>Something went wrong</Text>
        <Text style={styles.errorText}>{error || 'No recipes found'}</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.list}
      data={items}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.href}
    />
  );
};

const mapStateToProps = (store) => ({
  items: store.items,
  error: store.error,
});

export default connect(
  mapStateToProps,
  null,
)(ItemList);

ItemList.defaultProps = {
  items: null,
  error: null,
};

ItemList.propTypes = {
  items: PropTypes.array,
  error: PropTypes.string,
};
