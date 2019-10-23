import { StyleSheet } from 'react-native'
import Theme from 'themes/default'

export default StyleSheet.create({
  iconFA: {
    color: '#fff',
    fontSize: 24,
  },
  /* LOGIN */
  block: {
    // backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iniciarSesionBtn: {
    marginTop: 40,
    // width: '100%',
    // alignSelf: 'center',
    // justifyContent: 'center',
    borderRadius: Theme.SIZES.RADIUS,
    height: 35,
  },
  iniciarSesionBtnText: {
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemLogin: {
    borderColor: Theme.COLORS.PRIMARY,
    borderBottomWidth: 1.5,
    marginTop: 10,
  },
  gestionTextLogin: {
    color: Theme.COLORS.BLACK,
    fontSize: 18,
  },

  gestionButtonText: {
    color: Theme.COLORS.BLACK,
    fontSize: 20,
    textTransform: 'none',
  },

  gestionButton: {
    borderWidth: 1,
    borderColor: Theme.COLORS.BLACK,
    borderRadius: Theme.SIZES.ROUND,
    padding: Theme.SIZES.BASE / 2,
  },

  /* from estilos */
  msgGestionLogin: {
    alignItems: 'center',
    borderBottomWidth: 0,
    borderBottomColor: undefined,
  },
  msgGestionR: {
    borderBottomWidth: 0,
    borderBottomColor: undefined,
    borderColor: undefined,
  },
  // gestionTxtMsg: {
  //   color: '#D80212',
  //   fontSize: 20,
  // },
  mailGestion: {
    borderBottomWidth: 0,
    borderBottomColor: undefined,
  },
  gestionEmailBtn: {
    borderColor: '#7e7e7d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtn: {
    borderRadius: 8,
  },
  gestionEmailTxt: {
    color: '#7e7e7d',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    fontSize: 18,
  },
  /* end from estilos */
})
