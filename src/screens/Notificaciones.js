import React, { Component } from 'react'
import { Container, Root, Text, Content } from 'native-base'
import AppFooter from 'AppFooter'

export default class Notificaciones extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Content>
            <Text>Notificaciones</Text>
          </Content>
          <AppFooter />
        </Container>
      </Root>
    )
  }
}
