import React from 'react'
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/FontAwesome5'
import defaultTheme from '../constants/defaultTheme'

const Button = styled.TouchableHighlight({
  backgroundColor: defaultTheme.primaryColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
  height: 30,
  width: 30,
})

export default function RoundedButton(props) {
  return (
    <Button onPress={props.onPress}>
      <Icon name={props.icon} color="#fff" />
    </Button>
  )
}
