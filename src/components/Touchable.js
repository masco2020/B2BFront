import React from 'react'
import {
  // Platform,
  // TouchableNativeFeedback,
  // TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

const Touchable = ({ children, ...props }) => {
  // FIXME: TouchableNativeFeedback isnt affected by borderRadius
  // const Component =
  //   Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
  const Component = TouchableOpacity
  return (
    <Component
      activeOpacity={0.6}
      // background={
      //   Platform.OS === 'android' &&
      //   TouchableNativeFeedback.SelectableBackground()
      // }
      {...props}>
      {children}
    </Component>
  )
}

export default Touchable
