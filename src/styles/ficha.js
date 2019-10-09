import { StyleSheet } from 'react-native'
import Theme from 'themes/default'
import styled from 'styled-components/native'

export const FichaTitle = styled.Text({
  color: Theme.COLORS.PRIMARY,
  fontWeight: 'bold',
  paddingBottom: Theme.SIZES.BASE / 4,
})

export const FichaDesc = styled.Text({
  color: Theme.COLORS.BLACK,
  fontSize: Theme.SIZES.BASE,
})

export default StyleSheet.create({
  contentFicha: {
    padding: Theme.SIZES.BASE,
  },
  listFicha: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.MUTED,
    marginBottom: Theme.SIZES.BASE,
  },
  listItemFichaContac: {
    paddingTop: 20,
    borderBottomWidth: 0,
  },
  itemBodyFicha: {
    paddingBottom: Theme.SIZES.BASE,
  },
  dateFicha: {
    color: Theme.COLORS.BLACK,
    fontSize: Theme.SIZES.BASE,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  listModal: {
    borderBottomWidth: 0,
  },
  listItemModal: {
    paddingBottom: Theme.SIZES.BASE,
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
    borderColor: Theme.COLORS.BLACK,
    height: 35,
  },
  btnListFicha: {
    textTransform: 'capitalize',
    paddingHorizontal: 10,
  },
  dateBtnListFichaSectores: {},
  dateBtnListFichaProducts: {},

  /* from estilos */
  borderBtn: {
    borderRadius: Theme.SIZES.BASE / 2,
  },
  fichaButton: {
    borderRadius: Theme.SIZES.BASE / 2,
    textTransform: 'capitalize',
    height: 35,
  },
  correoEmpresarial: {},
  /* end from estilos */
})
