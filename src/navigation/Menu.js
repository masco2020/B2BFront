import React from 'react'
import { DrawerItems } from 'react-navigation-drawer'
import { ScrollView, Dimensions } from 'react-native'
import Block from '../components/Block'

const { width } = Dimensions.get('screen')

const Drawer = props => (
  <Block flex forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DrawerItems {...props} />
      </ScrollView>
    </Block>
  </Block>
)

const Menu = {
  // contentComponent(props) {
  //   return <Drawer {...props} />
  // },
  contentComponent: Drawer,
  // drawerBackgroundColor: '',
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#000',
    activeBackgroundColor: 'transparent',
    itemStyle: {
      width: width * 0.75,
      backgroundColor: 'transparent',
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: 'normal',
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
  },
}

export default Menu
