import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, View } from 'react-native';
import { makeSearchReq } from '../../store/actions';
import throttle from '../../utils/throttle';

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

class SearchBar extends React.PureComponent {
  state = {
    query: '',
  };

  handleChange = (input) => {
    console.log(input);
    this.setState({query: input});
    this.props.search(input);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.query}
          placeholder="Search recipes"
          onChangeText={this.handleChange}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: throttle((query) => dispatch(makeSearchReq(query)), 2000, true),
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};
