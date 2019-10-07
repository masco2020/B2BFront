import React from 'react'
// import Icon from '@expo/vector-icons/FontAwesome5'
// import styled from 'styled-components/native'
import Theme from 'themes/default'
import { Button, Icon } from 'native-base'

// const Button = styled.TouchableHighlight({
//   backgroundColor: Theme.COLORS.PRIMARY,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: 15,
//   height: 30,
//   width: 30,
// })

export default function RoundedButton(props) {
  return (
    <Button
      style={{ backgroundColor: Theme.COLORS.PRIMARY }}
      onPress={props.onPress}>
      <Icon type="FontAwesome5" name={props.icon} />
    </Button>
  )
}
