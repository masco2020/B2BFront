import { StyleSheet } from 'react-native'
import Theme from 'themes/default'

export default StyleSheet.create({
  contentContactos: {
    backgroundColor: '#EBEBEB',
    padding: Theme.SIZES.BASE,
  },
  iconEmpresarialContacto: {
    color: Theme.COLORS.PRIMARY,
  },
  contactoCards: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  contactoCardsItems: {},
  contactoCardsBody: {
    flex: 1,
    width: '100%',
  },
  contactoCardTop: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 5,
  },
  contactoCardBot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 5,
  },
  iconContact: {
    fontSize: 16,
    marginRight: 5,
  },
  contactDato: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    color: '#7e7e7d',
  },
  contactNombreText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactCargoScroll: {
    maxWidth: '45%',
  },
  contactllamarText: {
    color: Theme.COLORS.PRIMARY,
    fontSize: 16,
  },
  contactMailText: {
    color: Theme.COLORS.PRIMARY,
    fontSize: 16,
  },
  tipoDocumentBtnText: {
    color: '#7e7e7d',
    fontSize: 16,
    textTransform: 'capitalize',
    marginLeft: 0,
  },
  // boxBtnNewContact: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 50,
  // },
  /* nuevo contacto */
  textBtnNewContact: {
    fontWeight: 'bold',
  },
  itemNewContact: {
    marginLeft: 0,
  },

  /* from estilos */
  contactNombre: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  contactCargo: {
    fontSize: 14,
  },
  editContactIcon: {
    fontSize: 19,
  },
  contactllamar: {
    marginBottom: 3,
    marginTop: 3,
  },
  contactMail: {
    marginBottom: 3,
    marginTop: 3,
  },
  formFicha: {
    padding: 16,
  },
  btnPickProductsFicha: {},
  modalFicha: {
    margin: 0,
    backgroundColor: 'white',
    height: 'auto',
    flex: 0,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 25,
    paddingBottom: 5,
  },
  listFicha: {
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#7e7e7d',
  },
  listModal: {
    borderBottomWidth: 0,
  },
  tittleFicha: {
    color: Theme.COLORS.PRIMARY,
    marginLeft: 0,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  listItemFicha: {
    borderBottomWidth: 0,
    borderBottomColor: undefined,
    marginLeft: 0,
  },
  listItemModal: {
    paddingBottom: 15,
    paddingTop: 0,
  },
  itemBodyFicha: {},
  dateFicha: {
    color: '#7e7e7d',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  infoContacto: {
    borderRadius: 8,
    backgroundColor: Theme.COLORS.WHITE,
    paddingHorizontal: Theme.SIZES.BASE,
    paddingVertical: Theme.SIZES.BASE / 2,
    marginBottom: Theme.SIZES.BASE / 2,
  },
  infoText: {
    color: Theme.COLORS.BLACK,
    fontSize: Theme.SIZES.BASE,
    marginLeft: Theme.SIZES.BASE,
    width: '100%',
  },
  // textEmpresarialContacto: {
  // },
  // telefonoEmpresarial: {},
  // correoEmpresarial: {},
  // iniciarSesionBtn: {},
  // borderBtn: {},
  // iniciarSesionBtnText: {},
  /* end from estilos */
})
