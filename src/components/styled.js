import Block from 'components/Block'
import styled from 'styled-components/native'
import Theme from 'themes/default'

export const Hbar = styled.View(({ color = '#DDD' }) => ({
  borderBottomWidth: 1,
  borderBottomColor: color,
  marginBottom: 10,
}))

export const Badge = styled(Block).attrs({ center: true, middle: true })(
  ({ size = 30, color = Theme.COLORS.MUTED }) => ({
    backgroundColor: color,
    borderRadius: size / 2,
    width: size,
    height: size,
  })
)

export const Container = styled(Block).attrs({ flex: 1 })(
  ({ padding = Theme.SIZES.BASE }) => ({
    paddingHorizontal: padding,
  })
)

export const LinkText = styled.Text({
  color: Theme.COLORS.PRIMARY,
})
