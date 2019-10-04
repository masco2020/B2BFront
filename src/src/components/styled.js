import React from 'react'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import { Text, Card, CardItem, Body } from 'native-base'
import theme from 'themes/default'
// import Block from 'components/Block'

export const Button = props => {
  return (
    <Card>
      <TouchableHighlight onPress={props.onPress}>
        <CardItem>
          <Body>
            <Text>{props.children}</Text>
          </Body>
        </CardItem>
      </TouchableHighlight>
    </Card>
  )
}

export const Hbar = styled.View({
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  marginBottom: 10,
})

export const Badge = styled.View(({ size = 30, color }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  backgroundColor: color,
  borderRadius: size / 2,
  margin: 2,
  width: size,
  height: size,
}))

export const Container = styled.View(({ padding = theme.SIZES.BASE }) => ({
  paddingHorizontal: padding,
  flex: 1,
}))

export const LinkText = styled.Text({
  color: theme.COLORS.PRIMARY,
})
