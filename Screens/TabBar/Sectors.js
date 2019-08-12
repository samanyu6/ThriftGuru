import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Grid from 'react-native-grid-component';
import { iOSColors, sanFranciscoWeights } from 'react-native-typography'
import LinearGradient from 'react-native-linear-gradient';

class Sector extends Component {
  _renderItem = (data, i) => (
    <TouchableOpacity style= {styles.item} onPress={()=> alert('pressed')}>
      <LinearGradient colors={[data.color1, data.color2]} style={styles.item} key={i}>
        <Text style={[sanFranciscoWeights.heavy, styles.gridText]} key={i}>{data.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
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
          data={[{ color1: iOSColors.red, color2: iOSColors.orange, text: 'Shirts' },
            { color1: iOSColors.orange,color2: iOSColors.yellow, text: 'T-Shirts' },
            { color1: iOSColors.green,color2: iOSColors.tealBlue,text: 'Jackets' }, 
            { color1: iOSColors.blue, color2: iOSColors.tealBlue, text: 'Trousers' },
            { color1: iOSColors.tealBlue, color2: iOSColors.purple, text: 'Shoes' },
            { color1: iOSColors.yellow, color2: iOSColors.pink, text: 'Jeans' },
            { color1: iOSColors.tealBlue, color2: iOSColors.green, text: 'Belts' }
          ]}
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
    margin: 5,
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
},
});

export default Sector