import { StyleSheet } from 'react-native'
import Theme from 'themes/default'

export default StyleSheet.create({
  perfilButton: {
    borderRadius: Theme.SIZES.BASE,
    width: '100%',
  },
  perfilCard: {
    backgroundColor: Theme.COLORS.PRIMARY,
    padding: Theme.SIZES.BASE,
  },
  perfilIcon: {
    height: 95,
    width: 95,
    marginHorizontal: Theme.SIZES.BASE,
  },
  centerMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
