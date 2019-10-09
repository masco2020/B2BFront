import { Icon as IconBase } from 'native-base'
import styled from 'styled-components/native'
import Theme from 'themes/default'

const Icon = styled(IconBase).attrs(({ size = Theme.SIZES.BASE, primary }) => ({
  type: 'FontAwesome5',
  fontSize: size,
  color: primary && Theme.COLORS.PRIMARY,
}))(({ size = Theme.SIZES.BASE, primary }) => ({
  fontSize: size,
  color: primary && Theme.COLORS.PRIMARY,
}))

export default Icon
