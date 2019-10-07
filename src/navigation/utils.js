import React from 'react'
import { Easing, Animated } from 'react-native'
// drawer
import DrawerItem from './DrawerItem'
// header for screens
import Header from './Header'
import isFunction from 'lodash/isFunction'

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps
    const thisSceneIndex = scene.index
    const width = layout.initWidth

    // const scale = position.interpolate({
    //   inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
    //   outputRange: [4, 1, 1],
    // })
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    })
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    })

    const scaleWithOpacity = { opacity }
    const screenName = 'Search'

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity
    }
    return { transform: [{ translateX }] }
  },
})

export const defaultStackConfig = {
  cardStyle: {
    backgroundColor: '#F8F9FE',
  },
  transitionConfig,
}

export const getHeaderOptions = ({ title, headerProps, ...props }) => ({
  navigation,
}) => {
  title = isFunction(title) ? title(navigation) : title

  return {
    header: <Header {...headerProps} title={title} navigation={navigation} />,
    ...props,
  }
}

export const getDrawerOptions = props => () => ({
  // eslint-disable-next-line react/display-name
  drawerLabel: ({ focused }) => <DrawerItem focused={focused} {...props} />,
})
