import React from 'react'
import { StatusBar } from 'react-native'
import { Block } from 'galio-framework'
import styled from 'styled-components/native'
import { AppProvider } from './components/AppProvider'

import Chat from './screens/Chat'

export default function App() {
  return (
    <AppProvider>
      <Container>
        <StatusBar />
        <Chat />
      </Container>
    </AppProvider>
  )
}

const Container = styled(Block).attrs({ flex: true })({
  // alignItems: 'center',
  // flex: 1,
  backgroundColor: '#fff',
  // justifyContent: 'center',
  // padding: theme.SIZES.BASE,
  paddingTop: /* theme.SIZES.BASE +  */ StatusBar.currentHeight,
})
