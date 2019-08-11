import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Random from './TabBar/Random';
import Sectors from './TabBar/Sectors';
import Trending from './TabBar/Trending';


const bottomTab = createBottomTabNavigator({
    Trending: Trending,
    Random: Random,
    Sectors: Sectors
}, {
    initialRouteName: 'Trending',
    defaultNavigationOptions: ({
        navigation
    }) => ({
        tabBarIcon: ({
            focused,
            horizontal,
            tintColor,
            bgColor
        }) => {
            const {
                routeName
            } = navigation.state;
            let IconComponent = Icon;
            let iconName;
            if (routeName === 'Blog') {
                iconName = 'book-open-page-variant';
                bgColor = '#00695C';
                // this.colorPicker(routeName);
            } else if (routeName === 'Profile') {
                iconName = 'account';
                bgColor = '#6A1B9A';
                // this.colorPicker(routeName);
             } else if (routeName === 'Recycle') {
                iconName = 'recycle';
                bgColor = '#FF9000';
                // this.colorPicker(routeName);
            } 
            else if (routeName === 'Points') {
                iconName = 'coin';
                bgColor = '#2F4F4F';
                // this.colorPicker(routeName);
            }
            else if (routeName === 'Quiz') {
                iconName = 'animation';
                bgColor = '#2F4F4F';
                // this.colorPicker(routeName);
            }

            return <IconComponent name = {
                iconName
            }
            size = {
                25
            }
            color = {
                tintColor
            }
            />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
            //backgroundColor: '#F0FFFf',
            backgroundColor: 'white',
            borderTopColor: 'black',
            borderWidth: 0.75,

        }
    },
});

class TabNav extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default TabNav