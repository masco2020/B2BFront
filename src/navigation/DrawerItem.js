import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Icon } from 'native-base'
import Theme from 'themes/default'

class DrawerItem extends React.Component {
  render() {
    const { focused, title, iconName } = this.props

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null,
    ]

    return (
      <View style={containerStyles}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon type="FontAwesome5" style={[styles.icon]} name={iconName}/>
          <Text
            style={styles.textStyle}
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
  textStyle:{
    color: Theme.COLORS.PRIMARY,
    fontSize: Theme.SIZES.ROUND * 3,
  },
  icon:{
    fontSize: Theme.SIZES.ROUND * 3,
    color: Theme.COLORS.PRIMARY,
    marginRight: Theme.SIZES.BASE * 1.5,
  },
})

export default DrawerItem
