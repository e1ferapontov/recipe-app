import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginTop: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 86,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'center',
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 3,
  },

  detailsContainer: {
    padding: 10,
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  subHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
  ingredients: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginHorizontal: 10,
  },
});

class Item extends React.PureComponent {
  state = {
    expanded: false,
  };

  touchHandler = () =>
    this.setState((prevState) => ({ expanded: !prevState.expanded }));

  renderIngridientsList = () => (
    <View style={styles.detailsContainer}>
      <Text style={styles.subHeader}>INGRIDIENTS:</Text>
      <Text style={styles.ingredients}>{this.props.item.ingredients}</Text>
      <Button
        onPress={() => Linking.openURL(this.props.item.href)}
        title="Go to recipe"
        color="darkgrey"
        accessibilityLabel="Go to recipe"
      />
    </View>
  );

  render() {
    return (
      <TouchableOpacity onPress={this.touchHandler}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image
              source={{
                uri: this.props.item.thumbnail
                  ? this.props.item.thumbnail
                  : 'http://img.recipepuppy.com/9.jpg',
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title}>{this.props.item.title}</Text>
          </View>
          {this.state.expanded ? this.renderIngridientsList() : null}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
    thumbnail: PropTypes.string,
    ingredients: PropTypes.string,
  }).isRequired,
};
