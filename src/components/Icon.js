import { Icon as IconBase } from 'native-base'
import styled from 'styled-components/native'
import Theme from 'themes/default'

const Icon = styled(IconBase).attrs(
  ({ size = Theme.SIZES.BASE, primary, color }) => ({
    type: 'FontAwesome5',
    fontSize: size,
    color: (primary && Theme.COLORS.PRIMARY) || color,
  })
)(({ size = Theme.SIZES.BASE, primary, color }) => ({
  fontSize: size,
  color: (primary && Theme.COLORS.PRIMARY) || color,
}))

export default Icon
