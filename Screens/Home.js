import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { black } from 'ansi-colors';
import { sanFranciscoWeights } from 'react-native-typography'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={[sanFranciscoWeights.heavy, styles.header]}>
                ThriftGuru
            </Text>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 48,
        // fontWeight: 'bold',
        // color: 'black',
        marginTop: '15%',
        paddingLeft: 10
    }

});

export default Home