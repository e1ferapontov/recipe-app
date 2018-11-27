import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';
import { makeSearchReq } from '../../store/actions';
import { throttle } from '../../utils/throttle';

// TODO: EVERYTHING

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  list: {
    flex: 1,
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

class ItemList extends React.PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.input}
          value={this.state.query}
          placeholder="Search recipes"
          onChange={this.props.handleChange}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleChange: (input) => throttle(dispatch(makeSearchReq(input)), 450),
});

export default connect(
  null,
  mapDispatchToProps,
)(ItemList);

ItemList.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
