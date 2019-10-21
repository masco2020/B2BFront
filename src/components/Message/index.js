import React from 'react'
import { Dimensions, Text } from 'react-native'
import Block from 'components/Block'

import styled from 'styled-components/native'
import moment from 'moment'
import 'moment/locale/es'

import MessageAudio from './Audio'
import MessageDocument from './Document'
import MessageLocation from './Location'
import MessageImage from './Image'
import Theme from 'themes/default'

moment.locale('es')

const TIPO_CONTENIDO = {
  1: 'mensaje',
  2: 'imagen',
  3: 'audio',
  4: 'documento',
  5: 'ubicacion',
}

const { width } = Dimensions.get('screen')

export default function Message(props) {
  const item = props.item
  let Content

  switch (TIPO_CONTENIDO[item.idTipoContenido]) {
    case 'ubicacion': {
      Content = <MessageLocation {...item} />
      break
    }
    case 'imagen': {
      Content = <MessageImage {...item} />
      break
    }
    case 'audio': {
      Content = <MessageAudio {...item} />
      break
    }
    case 'documento': {
      Content = <MessageDocument {...item} />
      break
    }
    default:
      Content = <Text>{item.mensaje}</Text>
  }

  const fecha = moment(item.fechaRegistro).format('DD [de] MMMM')
  const hora = moment(item.fechaRegistro).format('hh:mm:ss A')

  return (
    <BubbleContainer {...item}>
      <Bubble {...item}>
        {!item.isUser && <MessageUser>{item.usuario.nombre}</MessageUser>}
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
