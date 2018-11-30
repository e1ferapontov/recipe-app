import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text } from 'react-native';
import Item from '../Item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

const ItemList = ({ items }) => {
  if (items && !items.length) {
    return <Text>No recipes</Text>;
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
});

export default connect(
  mapStateToProps,
  null,
)(ItemList);

ItemList.defaultProps = {
  items: [],
};

ItemList.propTypes = {
  items: PropTypes.array,
};
