import React from 'react'
import { Dimensions, Text } from 'react-native'
import Block from 'components/Block'

import styled from 'styled-components/native'
import moment from 'moment'
import 'moment/locale/es'

import MessageAudio from './Audio'
import MessageLocation from './Location'
import MessageImage from './Image'
import Theme from 'themes/default'

moment.locale('es')

const { width } = Dimensions.get('screen')

export default function Message(props) {
  const item = props.item
  let Content

  switch (item.type) {
    case 'location': {
      Content = <MessageLocation {...item} />
      break
    }
    case 'image': {
      Content = <MessageImage {...item} />
      break
    }
    case 'audio': {
      Content = <MessageAudio {...item} />
      break
    }
    default:
      Content = <Text>{item.content}</Text>
  }

  const fecha = moment(item.timestamp).format('DD [de] MMMM')
  const hora = moment(item.timestamp).format('HH:mm A')

  return (
    <BubbleContainer {...item}>
      <Bubble {...item}>
        {!item.isUser && <MessageUser>{item.user.name}</MessageUser>}
        {Content}
        <Block style={{ paddingTop: 4 }} row space="between">
          <MessageDate>{fecha}</MessageDate>
          <MessageDate>{hora}</MessageDate>
        </Block>
      </Bubble>
    </BubbleContainer>
  )
}

const Bubble = styled(Block).attrs({
  flex: 1,
})(props => ({
  padding: 5,
  backgroundColor:
    Theme.COLORS.MESSAGES[props.isUser ? 'user' : 'other'].background,
  borderWidth: 1,
  borderColor: '#c0c0c0',
  borderRadius: 5,
  width: width * 0.6,
}))

const MessageUser = styled.Text({
  color: Theme.COLORS.MESSAGES.other.usernameColor,
  fontSize: 12,
})

const BubbleContainer = styled(Block).attrs(props => ({
  flex: 1,
  right: props.isUser,
}))({
  marginBottom: 5,
})

const MessageDate = styled.Text({
  color: 'rgba(0,0,0,.45)',
  fontSize: 11,
})
