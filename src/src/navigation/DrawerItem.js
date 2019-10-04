import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'

class DrawerItem extends React.Component {
  render() {
    const { focused, title } = this.props

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null,
    ]

    return (
      <View style={containerStyles}>
        <View>
          <Text
            size={15}
            bold={focused ? true : false}
            color={focused ? 'white' : 'rgba(0,0,0,0.5)'}>
            {title}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
  },
  // activeStyle: {
  //   backgroundColor: defaultTheme.primaryColor,
  //   borderRadius: 4,
  // },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
})

export default DrawerItem
