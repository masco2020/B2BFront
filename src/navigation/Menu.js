import React from 'react'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { ScrollView, Dimensions, Text } from 'react-native'
import styled from 'styled-components/native'

import Block from 'components/Block'
import Logout from 'navigation/Logout'
import { connect } from 'components/AppProvider'
import Theme from 'themes/default'
import { bg, fz, fc, fw } from 'styles/styles'

const { width } = Dimensions.get('screen')

const Drawer = ({ user, ...props }) => {
  const initial = user && user.nombre && user.nombre.slice(0, 1)

  return (
    <Block flex forceInset={{ top: 'always', horizontal: 'never' }}>
      {user && (
        <Block row middle style={[bg.primary, { paddingVertical: Theme.SIZES.BASE * 2, paddingHorizontal: Theme.SIZES.BASE}]}>
          <Initial>
            <Text style={[fz.n30, fc.white, fw.bold]}>{initial}</Text>
          </Initial>
          <Block flex>
            <Text numberOfLines={1} style={[fz.n20, fc.white, fw.bold]}>
              {user.nombre}
            </Text>
            <Text numberOfLines={1} style={[fz.n16, fc.white, fw.bold]}>
              {user.cargo}
            </Text>
          </Block>
        </Block>
      )}
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false} style={[{ flex: 1 }, bg.muted]}>
          <DrawerNavigatorItems {...props} />
          <Logout />
        </ScrollView>
      </Block>
    </Block>
  )
}

const Menu = {
  contentComponent: connect(ctx => ({ user: ctx.context.user }))(Drawer),
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

const Initial = styled(Block).attrs({ center: true, middle: true })(
  ({ size = 50 }) => ({
    borderColor: Theme.COLORS.WHITE,
    borderRadius: size / 2,
    borderWidth: 4,
    height: size,
    marginRight: Theme.SIZES.BASE / 2,
    width: size,
  })
)
