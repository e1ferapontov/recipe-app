import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, View } from 'react-native';
import { makeSearchReq } from '../../store/actions';
import throttle from '../../utils/throttle';

const styles = StyleSheet.create({
  container: {
    height: 95,
    paddingTop: 50,
    paddingBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f1f1f1',
    borderColor: '#ddd',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
  },
  input: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
});

class SearchBar extends React.PureComponent {
  state = {
    query: '',
  };

  handleChange = (input) => {
    this.setState({ query: input });
    if (input !== '') {
      this.props.search(input);
    }
  };

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
  search: throttle((query) => dispatch(makeSearchReq(query)), 450),
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};
