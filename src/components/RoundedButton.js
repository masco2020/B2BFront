import React from 'react'
import styled from 'styled-components/native'
import Theme from 'themes/default'
import Icon from 'components/Icon'
import Touchable from 'components/Touchable'

const Button = styled(Touchable)({
  backgroundColor: Theme.COLORS.PRIMARY,
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
      <Icon name={props.icon} color={Theme.COLORS.WHITE} />
    </Button>
  )
}
