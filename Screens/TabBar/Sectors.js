import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Grid from 'react-native-grid-component';
import { iOSColors, sanFranciscoWeights } from 'react-native-typography'

class Sector extends Component {
  _renderItem = (data, i) => (
    <View style={[{ backgroundColor: data.color }, styles.item]} key={i} >
      <Text style={[sanFranciscoWeights.heavy, styles.gridText]} key={i}>{data.text}</Text>
    </View>
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  render() {
    return (
      <View style={styles.container}>
        <Text style={[sanFranciscoWeights.heavy, styles.header]}>
            Choices
        </Text>
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          renderPlaceholder={this._renderPlaceholder}
          data={[{color: iOSColors.red , text: 'Shirts'},{color: iOSColors.orange , text: 'T-Shirts'} ,{color:iOSColors.green , text: 'Jackets'} ,{color:  iOSColors.yellow , text: 'Trousers'}, {color: iOSColors.blue , text: 'Shoes'},{color: iOSColors.purple , text: 'Jeans'} ,{color: iOSColors.tealBlue , text: 'Belts'}]}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
    margin: 10,
    flexDirection: 'column',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center'
  },
  list: {
    marginTop: 10,
    flex: 1
  },
  header: {
    fontSize: 48,
    // fontWeight: 'bold',
    // color: 'black',
    marginTop: '15%',
    paddingLeft: 10
},
container:{
  flex: 1
}, 
gridText: {
  fontSize: 20,
  alignSelf: 'center'
}
});

export default Sector