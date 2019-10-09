import { StyleSheet } from 'react-native'
import Theme from 'themes/default'

export default StyleSheet.create({
  iconFA: {
    color: '#fff',
    fontSize: 24,
  },
  /* LOGIN */
  iniciarSesionBtn: {
    marginTop: 45,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  itemLogin: {
    borderColor: Theme.COLORS.PRIMARY,
    borderBottomWidth: 1.5,
    width: '85%',
  },
  gestionTextLogin: {
    fontSize: 18,
  },

  gestionButtonText: {
    color: Theme.COLORS.MUTED,
    fontSize: 20,
  },

  gestionButton: {
    borderWidth: 1,
    borderColor: Theme.COLORS.MUTED,
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
