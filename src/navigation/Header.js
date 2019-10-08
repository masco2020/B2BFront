import React from 'react'
import { withNavigation } from 'react-navigation'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'

class AppHeader extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props
    return back ? navigation.goBack() : navigation.openDrawer()
  }

  render() {
    const { hideDrawer, back, navigation, title, style, ...other } = this.props
    const leftButtonIcon = back ? 'arrow-back' : 'menu'

    return (
      <Header noLeft={hideDrawer} {...other} >
        {!hideDrawer && (
          <Left>
            <Button transparent onPress={this.handleLeftPress}>
              <Icon name={leftButtonIcon} />
            </Button>
          </Left>
        )}
        <Body style={style}>
          <Title style={{fontWeight: 'bold'}}>{title}</Title>
        </Body>
        {!hideDrawer && <Right />}
      </Header>
    )
  }
}

export default withNavigation(AppHeader)
