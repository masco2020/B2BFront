import { StyleSheet } from 'react-native'
import Theme from 'themes/default'

export const fz = StyleSheet.create({
  n16: { fontSize: 16 },
  n20: { fontSize: 20 },
  n24: { fontSize: 24 },
})

export const fw = StyleSheet.create({
  bold: { fontWeight: 'bold' },
})

export const fc = StyleSheet.create({
  primary: { color: Theme.COLORS.PRIMARY },
  muted: { color: Theme.COLORS.MUTED },
  gray: { color: Theme.COLORS.GRAY },
  black: { color: Theme.COLORS.BLACK },
  white: { color: '#fff' },
})

export const ta = StyleSheet.create({
  center: { textAlign: 'center' },
})

export const bg = StyleSheet.create({
  primary: { backgroundColor: Theme.COLORS.PRIMARY },
  muted: { backgroundColor: Theme.COLORS.MUTED },
  gray: { backgroundColor: Theme.COLORS.GRAY },
  black: { backgroundColor: Theme.COLORS.BLACK },
  white: { backgroundColor: '#fff' },
})

// export const margin = (...args) => {
//   let styles = {}
//   if (!args.length) {
//     return styles
//   } else if (args.length === 1) {
//     styles.margin = args[0]
//   } else if (args.length === 2) {
//     styles.marginVertical = args[0]
//     styles.marginHorizontal = args[1]
//   }
// }
