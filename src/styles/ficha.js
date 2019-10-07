import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerFicha: {
    flex: 1,
  },
  contentFicha: {},
  formFicha: {
    padding: 16,
  },
  listFicha: {
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#7e7e7d',
  },
  listItemFicha: {
    borderBottomWidth: 0,
    borderBottomColor: undefined,
    marginLeft: 0,
  },
  listItemFichaContac: {
    paddingTop: 20,
    borderBottomWidth: 0,
  },
  itemBodyFicha: {},
  tittleFicha: {
    color: '#D80212',
    marginLeft: 0,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  dateFicha: {
    color: '#7e7e7d',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  listModal: {
    borderBottomWidth: 0,
  },
  listItemModal: {
    paddingBottom: 15,
    paddingTop: 0,
  },
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
  btnPicker: {
    borderColor: '#7e7e7d',
    height: 35,
  },
  btnListFicha: {
    textTransform: 'capitalize',
    paddingLeft: 10,
    paddingRight: 10,
  },
  dateBtnListFichaSectores: {},
  dateBtnListFichaProducts: {},
  boxBtnLocationFicha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  btnAddLocationFicha: {
    height: 35,
  },
  textBtnAddLocationFicha: {
    textTransform: 'capitalize',
    color: '#D80212',
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnVerLocationFicha: {
    height: 35,
  },
  textBtnVerLocationFicha: {
    textTransform: 'capitalize',
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },

  /* from estilos */
  tipoCliente: {},
  borderBtn: {
    borderRadius: 8,
  },
  correoEmpresarial: {},
  /* end from estilos */
})
