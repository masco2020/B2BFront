import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  boxBtnRight: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 36,
  },
  btnRight: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  whiteText: {
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    // textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  welcomeBox: {
    alignContent: 'center',
    alignSelf: 'center',
    width: '75%',
    marginTop: '25%',
  },
  welcome: {
    resizeMode: 'contain',
    width: '100%',
  },
  image: {
    marginLeft: 2,
    height: 140,
    width: 140,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 3,
  },
  title: {
    fontSize: 42,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24,
  },
})